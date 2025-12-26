"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ComponentBrowserProps {
  components: Record<string, string>;
  galleryBundle: string;
  isLoading: boolean;
}

export function ComponentBrowser({ components, galleryBundle, isLoading }: ComponentBrowserProps) {
  const componentNames = Object.keys(components);
  const [activeSection, setActiveSection] = useState(componentNames[0]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const isManualScrolling = useRef(false);

  // Listen for active section updates from the iframe
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data.type === 'active-section' && !isManualScrolling.current) {
        setActiveSection(event.data.name);
      }
    };
    
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  const scrollToComponent = (name: string) => {
    isManualScrolling.current = true;
    setActiveSection(name);
    
    // Use postMessage to tell the iframe to scroll
    if (iframeRef.current?.contentWindow) {
      iframeRef.current.contentWindow.postMessage({
        type: 'scroll-to-section',
        sectionId: `preview-${name}`
      }, '*');
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
        className="flex-1 bg-muted/30 overflow-hidden relative"
      >
        {isLoading ? (
          <div className="h-full w-full flex items-center justify-center bg-background/50">
            <div className="flex flex-col items-center gap-4">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
              <p className="text-sm text-muted-foreground">Loading components...</p>
            </div>
          </div>
        ) : galleryBundle ? (
          <iframe
            ref={iframeRef}
            srcDoc={galleryBundle}
            className="w-full h-full border-0 block"
            title="Component Gallery"
            sandbox="allow-scripts"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center bg-background/50">
            <p className="text-sm text-muted-foreground">No components to display</p>
          </div>
        )}
      </main>
    </div>
  );
}
