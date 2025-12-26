import * as esbuild from 'esbuild-wasm';
import { GeneratedProject } from '@/types/project';

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
    await esbuild.transform('', { loader: 'ts' });
    esbuildInitialized = true;
    return;
  } catch (e) {
    // Not initialized yet, proceed with initialization
  }
  
  initPromise = esbuild.initialize({
    wasmURL: 'https://unpkg.com/esbuild-wasm@0.27.2/esbuild.wasm',
  }).then(() => {
    esbuildInitialized = true;
  }).catch((err) => {
    // If initialization fails due to already being initialized, that's fine
    if (err.message?.includes('more than once')) {
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
    name: 'virtual-files',
    setup(build) {
      // Resolve component imports
      build.onResolve({ filter: /^\.\/\w+$/ }, (args) => {
        const componentName = args.path.replace('./', '');
        if (project.components[componentName]) {
          return { path: componentName, namespace: 'virtual' };
        }
        return null;
      });

      // Load virtual files
      build.onLoad({ filter: /.*/, namespace: 'virtual' }, (args) => {
        const code = project.components[args.path];
        if (code) {
          return {
            contents: code,
            loader: 'tsx',
          };
        }
        return null;
      });

      // Handle entry point
      build.onResolve({ filter: /^__entry__$/ }, () => {
        return { path: '__entry__', namespace: 'entry' };
      });

      build.onLoad({ filter: /.*/, namespace: 'entry' }, () => {
        return {
          contents: project.app,
          loader: 'tsx',
        };
      });

      // Handle React imports - replace with global React
      build.onResolve({ filter: /^react$/ }, () => {
        return { path: 'react', namespace: 'react-shim' };
      });

      build.onResolve({ filter: /^react-dom(\/client)?$/ }, () => {
        return { path: 'react-dom', namespace: 'react-shim' };
      });

      build.onLoad({ filter: /.*/, namespace: 'react-shim' }, (args) => {
        if (args.path === 'react') {
          return {
            contents: 'module.exports = window.React;',
            loader: 'js',
          };
        }
        return {
          contents: 'module.exports = window.ReactDOM;',
          loader: 'js',
        };
      });
    },
  };
}

/**
 * Bundle a GeneratedProject into executable HTML
 */
export async function bundleProject(project: GeneratedProject): Promise<string> {
  await initEsbuild();

  try {
    const result = await esbuild.build({
      entryPoints: ['__entry__'],
      bundle: true,
      write: false,
      format: 'iife',
      globalName: 'AppModule',
      plugins: [virtualFilesPlugin(project)],
      loader: {
        '.tsx': 'tsx',
        '.ts': 'ts',
      },
      // Use classic JSX transform that uses React.createElement
      jsx: 'transform',
      jsxFactory: 'React.createElement',
      jsxFragment: 'React.Fragment',
      target: 'es2020',
    });

    const bundledCode = result.outputFiles?.[0]?.text || '';

    // Generate complete HTML document
    return generateHTML(bundledCode, project.style);
  } catch (error) {
    console.error('Bundle error:', error);
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
        loader: 'tsx',
      },
      bundle: true,
      write: false,
      format: 'iife',
      globalName: 'ComponentModule',
      jsx: 'transform',
      jsxFactory: 'React.createElement',
      jsxFragment: 'React.Fragment',
      target: 'es2020',
      plugins: [{
        name: 'react-shim',
        setup(build) {
          build.onResolve({ filter: /^react$/ }, () => {
            return { path: 'react', namespace: 'react-shim' };
          });
          build.onLoad({ filter: /.*/, namespace: 'react-shim' }, () => {
            return {
              contents: 'module.exports = window.React;',
              loader: 'js',
            };
          });
        },
      }],
    });

    const bundledCode = result.outputFiles?.[0]?.text || '';
    return generateComponentHTML(bundledCode, styles);
  } catch (error) {
    console.error('Component bundle error:', error);
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
