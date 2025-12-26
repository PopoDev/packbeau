"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { bundleComponent } from "@/lib/bundler";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ComponentBrowserProps {
  components: Record<string, string>;
  style: string;
}

export function ComponentBrowser({ components, style }: ComponentBrowserProps) {
  const componentNames = Object.keys(components);
  const [bundledComponents, setBundledComponents] = useState<
    Record<string, string>
  >({});
  const [activeSection, setActiveSection] = useState(componentNames[0]);
  const [iframeHeights, setIframeHeights] = useState<Record<string, number>>(
    {}
  );
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isManualScrolling = useRef(false);

  useEffect(() => {
    async function bundleAll() {
      const bundles: Record<string, string> = {};
      for (const name of componentNames) {
        try {
          const rawHtml = await bundleComponent(components[name], name, style);
          const heightScript = `
            <script>
                // 1. Handle Height Updates
                const resizeObserver = new ResizeObserver((entries) => {
                window.parent.postMessage({ 
                    type: 'resize', 
                    name: '${name}', 
                    height: document.documentElement.scrollHeight 
                }, '*');
                });
                resizeObserver.observe(document.documentElement);

                // 2. Prevent Navigations (Best Practice UX)
                document.addEventListener('click', (e) => {
                const link = e.target.closest('a');
                if (link) {
                    e.preventDefault();
                    console.log('Navigation blocked in preview mode:', link.href);
                }
                }, true);
            </script>
            `;
          bundles[name] = rawHtml + heightScript;
        } catch (err) {
          console.error(err);
        }
      }
      setBundledComponents(bundles);
    }
    bundleAll();
  }, [components, style]);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data.type === "resize") {
        setIframeHeights((prev) => ({
          ...prev,
          [event.data.name]: event.data.height,
        }));
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isManualScrolling.current) return;

        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id.replace("preview-", ""));
        }
      },
      {
        root: scrollContainerRef.current,
        threshold: 0.1,
        rootMargin: "-10% 0px -70% 0px",
      }
    );

    componentNames.forEach((name) => {
      const el = document.getElementById(`preview-${name}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [bundledComponents]);

  const scrollToComponent = (name: string) => {
    isManualScrolling.current = true;
    setActiveSection(name);
    const element = document.getElementById(`preview-${name}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setTimeout(() => {
      isManualScrolling.current = false;
    }, 800);
  };

  if (componentNames.length === 0) return null;

  return (
    <div className="flex h-full w-full bg-background overflow-hidden border">
      <aside className="w-56 h-full border-r bg-muted/5 flex flex-col shrink-0">
        <ScrollArea className="flex-1 h-full">
          <div className="p-3 space-y-3">
            {componentNames.map((name) => (
              <button
                key={name}
                onClick={() => scrollToComponent(name)}
                className={cn(
                  "w-full group text-left transition-all outline-none",
                  activeSection === name
                    ? "opacity-100"
                    : "opacity-40 hover:opacity-100"
                )}
              >
                <span className="text-[10px] font-bold px-1 uppercase tracking-wider text-foreground/70 mb-2">
                  {name}
                </span>
                <div
                  className={cn(
                    "aspect-[16/10] w-full rounded-lg border-2 bg-card flex items-center justify-center p-3 transition-all ring-offset-background",
                    activeSection === name
                      ? "border-primary shadow-[0_0_0_1px_rgba(var(--primary),0.1)] bg-primary/5"
                      : "border-border shadow-none"
                  )}
                >
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-tight text-center truncate px-2">
                    {name}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </ScrollArea>
      </aside>

      <main
        ref={scrollContainerRef}
        className="flex-1 bg-muted/30 overflow-y-auto scroll-smooth flex flex-col items-center py-6 gap-12"
      >
        {componentNames.map((name) => (
          <section
            key={name}
            id={`preview-${name}`}
            className="w-full max-w-5xl px-8 flex flex-col relative"
          >
            <div className="flex items-center mb-2.5">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold text-foreground/60 uppercase tracking-widest">
                  {name}
                </span>
              </div>
            </div>

            <div className="w-full bg-white rounded-xl border border-border/60 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.1)] ring-1 ring-black/[0.02] overflow-hidden">
              {bundledComponents[name] ? (
                <iframe
                  srcDoc={bundledComponents[name]}
                  style={{ height: iframeHeights[name] || 100 }}
                  className="w-full border-0 block transition-[height] duration-300 ease-out"
                  title={name}
                  sandbox="allow-scripts"
                />
              ) : (
                <div className="h-40 w-full flex items-center justify-center bg-background/50">
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" />
                </div>
              )}
            </div>
          </section>
        ))}
        <div className="h-64 w-full shrink-0" />
      </main>
    </div>
  );
}
