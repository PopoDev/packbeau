import * as esbuild from "esbuild-wasm";
import { GeneratedProject } from "@/types/project";

let esbuildInitialized = false;
let initPromise: Promise<void> | null = null;

/**
 * Initialize esbuild-wasm
 * Safe to call multiple times - will only initialize once
 */
export async function initEsbuild(): Promise<void> {
  // Already initialized
  if (esbuildInitialized) {
    return;
  }

  // Initialization in progress
  if (initPromise) {
    return initPromise;
  }

  // Check if esbuild was already initialized (e.g., by another module or HMR)
  try {
    // Try to use esbuild - if it works, it's already initialized
    await esbuild.transform("", { loader: "ts" });
    esbuildInitialized = true;
    return;
  } catch (e) {
    // Not initialized yet, proceed with initialization
  }

  initPromise = esbuild
    .initialize({
      wasmURL: "https://unpkg.com/esbuild-wasm@0.27.2/esbuild.wasm",
    })
    .then(() => {
      esbuildInitialized = true;
    })
    .catch((err) => {
      // If initialization fails due to already being initialized, that's fine
      if (err.message?.includes("more than once")) {
        esbuildInitialized = true;
        return;
      }
      throw err;
    });

  return initPromise;
}

/**
 * Virtual file system plugin for esbuild
 * Resolves imports from our GeneratedProject structure
 */
function virtualFilesPlugin(project: GeneratedProject): esbuild.Plugin {
  return {
    name: "virtual-files",
    setup(build) {
      // Resolve component imports
      build.onResolve({ filter: /^\.\/\w+$/ }, (args) => {
        const componentName = args.path.replace("./", "");
        if (project.components[componentName]) {
          return { path: componentName, namespace: "virtual" };
        }
        return null;
      });

      // Load virtual files
      build.onLoad({ filter: /.*/, namespace: "virtual" }, (args) => {
        const code = project.components[args.path];
        if (code) {
          return {
            contents: code,
            loader: "tsx",
          };
        }
        return null;
      });

      // Handle entry point
      build.onResolve({ filter: /^__entry__$/ }, () => {
        return { path: "__entry__", namespace: "entry" };
      });

      build.onLoad({ filter: /.*/, namespace: "entry" }, () => {
        return {
          contents: project.app,
          loader: "tsx",
        };
      });

      // Handle React imports - replace with global React
      build.onResolve({ filter: /^react$/ }, () => {
        return { path: "react", namespace: "react-shim" };
      });

      build.onResolve({ filter: /^react-dom(\/client)?$/ }, () => {
        return { path: "react-dom", namespace: "react-shim" };
      });

      build.onLoad({ filter: /.*/, namespace: "react-shim" }, (args) => {
        if (args.path === "react") {
          return {
            contents: "module.exports = window.React;",
            loader: "js",
          };
        }
        return {
          contents: "module.exports = window.ReactDOM;",
          loader: "js",
        };
      });
    },
  };
}

/**
 * Bundle a GeneratedProject into executable HTML
 */
export async function bundleProject(
  project: GeneratedProject
): Promise<string> {
  await initEsbuild();

  try {
    const result = await esbuild.build({
      entryPoints: ["__entry__"],
      bundle: true,
      write: false,
      format: "iife",
      globalName: "AppModule",
      plugins: [virtualFilesPlugin(project)],
      loader: {
        ".tsx": "tsx",
        ".ts": "ts",
      },
      // Use classic JSX transform that uses React.createElement
      jsx: "transform",
      jsxFactory: "React.createElement",
      jsxFragment: "React.Fragment",
      target: "es2020",
    });

    const bundledCode = result.outputFiles?.[0]?.text || "";

    // Generate complete HTML document
    return generateHTML(bundledCode, project.style);
  } catch (error) {
    console.error("Bundle error:", error);
    throw error;
  }
}

/**
 * Generate complete HTML document with bundled code
 */
function generateHTML(bundledCode: string, styles: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Preview</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    ${styles}
  </style>
</head>
<body>
  <div id="root"></div>
  
  <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
  
  <script>
    ${bundledCode}
  </script>
  
  <script>
    (function() {
      try {
        var App = AppModule && AppModule.default ? AppModule.default : AppModule;
        if (App) {
          var root = ReactDOM.createRoot(document.getElementById('root'));
          root.render(React.createElement(App));
        } else {
          console.error('App component not found in bundle');
        }
      } catch (e) {
        console.error('Render error:', e);
        document.getElementById('root').innerHTML = '<pre style="color:red;padding:20px;">' + e.message + '</pre>';
      }
    })();
  </script>
</body>
</html>`;
}

/**
 * Bundle project with component gallery
 * Returns both the full app bundle and a component gallery bundle
 */
export async function bundleProjectWithGallery(
  project: GeneratedProject
): Promise<{
  fullAppBundle: string;
  componentGalleryBundle: string;
}> {
  await initEsbuild();

  try {
    // Bundle 1: Full app (existing logic)
    const fullAppBundle = await bundleProject(project);

    // Bundle 2: Component gallery - all components in one HTML
    const componentNames = Object.keys(project.components);

    if (componentNames.length === 0) {
      // No components, return empty gallery
      return {
        fullAppBundle,
        componentGalleryBundle: generateComponentGalleryHTML("", project.style),
      };
    }

    // Extract function names from each component
    const componentInfo = componentNames.map((name) => {
      const code = project.components[name];
      const functionMatch = code.match(/export\s+function\s+(\w+)/);
      const functionName = functionMatch ? functionMatch[1] : name;
      return { name, functionName };
    });

    // Create a gallery entry point that imports and renders all components
    const galleryEntry = `
import React from 'react';
${componentInfo
  .map(
    ({ name, functionName }) => `import { ${functionName} } from './${name}';`
  )
  .join("\n")}

export default function Gallery() {
  return React.createElement('div', null,
    ${componentInfo
      .map(
        ({ name, functionName }) => `
      React.createElement('section', { 
        id: 'preview-${name}', 
        className: 'component-section'
      }, 
        React.createElement('div', { className: 'component-label' }, '${name}'),
        React.createElement('div', { className: 'component-wrapper' },
          React.createElement(${functionName})
        )
      )`
      )
      .join(",\n")}
  );
}
    `;

    const galleryResult = await esbuild.build({
      stdin: {
        contents: galleryEntry,
        loader: "tsx",
      },
      bundle: true,
      write: false,
      format: "iife",
      globalName: "GalleryModule",
      plugins: [virtualFilesPlugin(project)],
      loader: {
        ".tsx": "tsx",
        ".ts": "ts",
      },
      jsx: "transform",
      jsxFactory: "React.createElement",
      jsxFragment: "React.Fragment",
      target: "es2020",
    });

    const galleryCode = galleryResult.outputFiles?.[0]?.text || "";
    const componentGalleryBundle = generateComponentGalleryHTML(
      galleryCode,
      project.style
    );

    return {
      fullAppBundle,
      componentGalleryBundle,
    };
  } catch (error) {
    console.error("Bundle with gallery error:", error);
    throw error;
  }
}

/**
 * Generate HTML for component gallery
 */
function generateComponentGalleryHTML(
  bundledCode: string,
  styles: string
): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Component Gallery</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    ${styles}
    
    body {
      margin: 0;
      padding: 0;
      background: black;
    }
    
    #root {
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 48px;
      align-items: center;
    }
    
    .component-section {
      scroll-margin-top: 20px;
      width: 100%;
      max-width: 1200px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    
    .component-label {
      font-size: 11px;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: rgba(0, 0, 0, 0.6);
      padding: 0 4px;
    }
    
    .component-wrapper {
      background: white;
      border-radius: 12px;
      border: 1px solid rgba(0, 0, 0, 0.08);
      box-shadow: 0 12px 40px -12px rgba(0, 0, 0, 0.1);
      overflow: visible;
      padding: 16px 0px;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    
    .component-wrapper > * {
      max-width: 100%;
      width: 100%;
    }
  </style>
</head>
<body>
  <div id="root"></div>
  
  <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
  
  <script>
    ${bundledCode}
  </script>
  
  <script>
    (function() {
      try {
        var Gallery = GalleryModule && GalleryModule.default ? GalleryModule.default : GalleryModule;
        if (Gallery) {
          var root = ReactDOM.createRoot(document.getElementById('root'));
          root.render(React.createElement(Gallery));
          
          // After render, handle fixed positioned parent elements
          setTimeout(function() {
            var wrappers = document.querySelectorAll('.component-wrapper');
            wrappers.forEach(function(wrapper) {
              // Only check direct children (component root elements), not nested children
              var directChildren = Array.from(wrapper.children);
              
              directChildren.forEach(function(child) {
                var computed = window.getComputedStyle(child);
                
                // If this direct child has fixed positioning, remove it
                if (computed.position === 'fixed') {
                  // Replace fixed with relative/static and use flex to center if needed
                  child.style.position = 'relative';
                  child.style.inset = 'auto'; // Clear top/left/right/bottom
                  child.style.transform = 'none'; // Clear transforms
                  
                  // If it was centered (common for fixed headers), keep it centered
                  if (computed.left === '50%' || child.style.left === '50%') {
                    child.style.left = 'auto';
                    child.style.transform = 'none';
                    child.style.margin = '0 auto';
                  }
                }
              });
            });
          }, 100);
          
          // Set up IntersectionObserver to track active section
          setTimeout(function() {
            var sections = document.querySelectorAll('.component-section');
            
            var observer = new IntersectionObserver(function(entries) {
              entries.forEach(function(entry) {
                if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
                  var componentName = entry.target.id.replace('preview-', '');
                  window.parent.postMessage({ 
                    type: 'active-section',
                    name: componentName
                  }, '*');
                }
              });
            }, {
              threshold: [0.1, 0.3, 0.5, 0.7],
              rootMargin: '-10% 0px -60% 0px'
            });
            
            sections.forEach(function(section) {
              observer.observe(section);
            });
          }, 200);
          
          // Listen for scroll requests from parent
          window.addEventListener('message', function(event) {
            if (event.data.type === 'scroll-to-section') {
              var element = document.getElementById(event.data.sectionId);
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }
          });
          
          // Prevent navigation in preview mode
          document.addEventListener('click', function(e) {
            var link = e.target.closest('a');
            if (link) {
              e.preventDefault();
              console.log('Navigation blocked in preview mode:', link.href);
            }
          }, true);
        } else {
          console.error('Gallery component not found in bundle');
        }
      } catch (e) {
        console.error('Render error:', e);
        document.getElementById('root').innerHTML = '<pre style="color:red;padding:20px;">' + e.message + '</pre>';
      }
    })();
  </script>
</body>
</html>`;
}

/**
 * Bundle a single component for isolated preview
 */
export async function bundleComponent(
  componentCode: string,
  componentName: string,
  styles: string
): Promise<string> {
  await initEsbuild();

  // Extract the function name from the component code
  const functionMatch = componentCode.match(/export\s+function\s+(\w+)/);
  const actualFunctionName = functionMatch ? functionMatch[1] : componentName;

  try {
    const wrapperCode = `
import React from 'react';

${componentCode}

export default function ComponentWrapper() {
  return React.createElement('div', { className: 'p-8 bg-background min-h-screen' }, 
    React.createElement(${actualFunctionName})
  );
}
    `;

    const result = await esbuild.build({
      stdin: {
        contents: wrapperCode,
        loader: "tsx",
      },
      bundle: true,
      write: false,
      format: "iife",
      globalName: "ComponentModule",
      jsx: "transform",
      jsxFactory: "React.createElement",
      jsxFragment: "React.Fragment",
      target: "es2020",
      plugins: [
        {
          name: "react-shim",
          setup(build) {
            build.onResolve({ filter: /^react$/ }, () => {
              return { path: "react", namespace: "react-shim" };
            });
            build.onLoad({ filter: /.*/, namespace: "react-shim" }, () => {
              return {
                contents: "module.exports = window.React;",
                loader: "js",
              };
            });
          },
        },
      ],
    });

    const bundledCode = result.outputFiles?.[0]?.text || "";
    return generateComponentHTML(bundledCode, styles);
  } catch (error) {
    console.error("Component bundle error:", error);
    throw error;
  }
}

/**
 * Generate HTML for component preview
 */
function generateComponentHTML(bundledCode: string, styles: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Component Preview</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    ${styles}
  </style>
</head>
<body>
  <div id="root"></div>
  
  <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
  
  <script>
    ${bundledCode}
  </script>
  
  <script>
    (function() {
      try {
        var Component = ComponentModule && ComponentModule.default ? ComponentModule.default : ComponentModule;
        if (Component) {
          var root = ReactDOM.createRoot(document.getElementById('root'));
          root.render(React.createElement(Component));
        } else {
          console.error('Component not found in bundle');
        }
      } catch (e) {
        console.error('Render error:', e);
        document.getElementById('root').innerHTML = '<pre style="color:red;padding:20px;">' + e.message + '</pre>';
      }
    })();
  </script>
</body>
</html>`;
}
