'use client';

import { useState, useEffect, useCallback } from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { bundleComponent } from '@/lib/bundler';

interface ComponentBrowserProps {
  components: Record<string, string>;
  style: string;
}

export function ComponentBrowser({ components, style }: ComponentBrowserProps) {
  const componentNames = Object.keys(components);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [bundledHtml, setBundledHtml] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const selectedName = componentNames[selectedIndex];
  const selectedCode = components[selectedName];

  // Bundle selected component
  const bundle = useCallback(async () => {
    if (!selectedCode || !selectedName) {
      setBundledHtml('');
      return;
    }

    setIsLoading(true);
    try {
      const html = await bundleComponent(selectedCode, selectedName, style);
      setBundledHtml(html);
    } catch (err) {
      console.error('Component bundle error:', err);
      setBundledHtml('');
    } finally {
      setIsLoading(false);
    }
  }, [selectedCode, selectedName, style]);

  useEffect(() => {
    bundle();
  }, [bundle]);

  const goToPrevious = () => {
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : componentNames.length - 1));
  };

  const goToNext = () => {
    setSelectedIndex((prev) => (prev < componentNames.length - 1 ? prev + 1 : 0));
  };

  if (componentNames.length === 0) {
    return (
      <div className="flex h-full items-center justify-center">
        <p className="text-sm text-muted-foreground">No components available</p>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col">
      {/* Component Slides Navigation */}
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={goToPrevious}
          aria-label="Previous component"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        {/* Slide Indicators */}
        <div className="flex items-center gap-3">
          {componentNames.map((name, index) => (
            <button
              key={name}
              onClick={() => setSelectedIndex(index)}
              className={cn(
                'flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm transition-colors',
                index === selectedIndex
                  ? 'bg-primary text-primary-foreground font-medium'
                  : 'text-muted-foreground hover:bg-accent hover:text-foreground'
              )}
            >
              {name}
            </button>
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon-sm"
          onClick={goToNext}
          aria-label="Next component"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Component Preview */}
      <div className="flex-1 overflow-hidden p-6 bg-muted/30">
        <div className="h-full flex flex-col gap-4">
          {/* Component Card */}
          <div className="flex-1 bg-card rounded-2xl border border-border shadow-lg overflow-hidden">
            {isLoading ? (
              <div className="flex h-full items-center justify-center">
                <div className="h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent" />
              </div>
            ) : bundledHtml ? (
              <iframe
                srcDoc={bundledHtml}
                className="h-full w-full border-0 bg-white"
                title={`${selectedName} preview`}
                sandbox="allow-scripts"
              />
            ) : (
              <div className="flex h-full items-center justify-center">
                <p className="text-sm text-muted-foreground">Preview unavailable</p>
              </div>
            )}
          </div>

          {/* Component Info Footer */}
          <div className="flex items-center justify-between px-2">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <span className="text-sm font-medium">{selectedName}</span>
              <span className="text-xs text-muted-foreground">
                {selectedIndex + 1} / {componentNames.length}
              </span>
            </div>
            <Button variant="ghost" size="sm" className="gap-1.5 text-xs">
              <Maximize2 className="h-3 w-3" />
              Expand
            </Button>
          </div>
        </div>
      </div>

      {/* Thumbnail Strip */}
      <div className="border-t border-border bg-card p-3">
        <div className="flex gap-2 overflow-x-auto">
          {componentNames.map((name, index) => (
            <button
              key={name}
              onClick={() => setSelectedIndex(index)}
              className={cn(
                'flex-shrink-0 w-24 h-16 rounded-lg border-2 transition-all overflow-hidden',
                index === selectedIndex
                  ? 'border-primary ring-2 ring-primary/20'
                  : 'border-border hover:border-muted-foreground/50'
              )}
            >
              <div className="h-full w-full bg-muted flex items-center justify-center">
                <span className="text-[10px] font-medium text-muted-foreground truncate px-1">
                  {name}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

