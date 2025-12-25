'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Monitor, Code2, Tablet, Smartphone, ArrowRight } from 'lucide-react';

interface CodePreviewProps {
  code: string;
}

type TabType = 'code' | 'preview';
type ViewportType = 'desktop' | 'tablet' | 'mobile';

const VIEWPORT_WIDTHS: Record<ViewportType, string> = {
  desktop: '100%',
  tablet: '768px',
  mobile: '375px',
};

// Store page.html content for code tab display
const PAGE_HTML_PATH = '/page.html';

export function CodePreview({ code }: CodePreviewProps) {
  const [activeTab, setActiveTab] = useState<TabType>('preview');
  const [viewport, setViewport] = useState<ViewportType>('desktop');
  const [htmlContent, setHtmlContent] = useState<string>('');

  // Fetch HTML content for code display
  useEffect(() => {
    fetch(PAGE_HTML_PATH)
      .then((res) => res.text())
      .then(setHtmlContent)
      .catch(() => setHtmlContent('Unable to load HTML content'));
  }, []);

  const handleShare = () => {
    // Placeholder for share functionality
    alert('Share link copied to clipboard!');
  };

  const isScaledViewport = viewport !== 'desktop';

  return (
    <div className="flex h-full flex-col bg-card rounded-lg border border-border overflow-hidden">
      {/* Top Control Bar */}
      <div className="flex items-center justify-between border-b border-border px-4 py-2 h-12">
        {/* Left: View Toggle */}
        <div className="flex items-center rounded-md border border-border overflow-hidden">
          <button
            onClick={() => setActiveTab('preview')}
            className={cn(
              'flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium transition-colors',
              activeTab === 'preview'
                ? 'bg-accent text-foreground'
                : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
            )}
          >
            <Monitor className="h-4 w-4" />
            Preview
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={cn(
              'flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium transition-colors border-l border-border',
              activeTab === 'code'
                ? 'bg-accent text-foreground'
                : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
            )}
          >
            <Code2 className="h-4 w-4" />
            Code
          </button>
        </div>

        {/* Center: Responsive Viewport Controls */}
        <div className="hidden sm:flex items-center gap-1">
          <button
            onClick={() => setViewport('desktop')}
            className={cn(
              'h-8 w-8 flex items-center justify-center rounded-md transition-colors',
              viewport === 'desktop'
                ? 'text-primary bg-primary/10'
                : 'text-muted-foreground hover:text-foreground hover:bg-accent'
            )}
            aria-label="Desktop view"
          >
            <Monitor className="h-4 w-4" />
          </button>
          <button
            onClick={() => setViewport('tablet')}
            className={cn(
              'h-8 w-8 flex items-center justify-center rounded-md transition-colors',
              viewport === 'tablet'
                ? 'text-primary bg-primary/10'
                : 'text-muted-foreground hover:text-foreground hover:bg-accent'
            )}
            aria-label="Tablet view"
          >
            <Tablet className="h-4 w-4" />
          </button>
          <button
            onClick={() => setViewport('mobile')}
            className={cn(
              'h-8 w-8 flex items-center justify-center rounded-md transition-colors',
              viewport === 'mobile'
                ? 'text-primary bg-primary/10'
                : 'text-muted-foreground hover:text-foreground hover:bg-accent'
            )}
            aria-label="Mobile view"
          >
            <Smartphone className="h-4 w-4" />
          </button>
        </div>

        {/* Right: Share Button */}
        <button
          onClick={handleShare}
          className={cn(
            'flex items-center gap-1.5 px-4 py-1.5 rounded-md text-sm font-medium',
            'bg-primary text-primary-foreground hover:bg-primary/90 transition-colors'
          )}
        >
          Share
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-auto">
        {activeTab === 'code' ? (
          <pre className="p-6 text-sm text-muted-foreground font-mono leading-relaxed overflow-auto h-full">
            <code>{htmlContent || 'Loading code...'}</code>
          </pre>
        ) : (
          <div
            className={cn(
              'h-full transition-all duration-300',
              isScaledViewport ? 'bg-muted/50 p-4 flex justify-center' : 'bg-white'
            )}
          >
            {code ? (
              <div
                className={cn(
                  'h-full transition-all duration-300',
                  isScaledViewport && 'shadow-lg rounded-lg overflow-hidden border border-border'
                )}
                style={{
                  width: VIEWPORT_WIDTHS[viewport],
                  maxWidth: '100%',
                }}
              >
                <iframe
                  src={PAGE_HTML_PATH}
                  className="h-full w-full border-0 bg-white"
                  title="Preview"
                  sandbox="allow-scripts"
                />
              </div>
            ) : (
              <div className="flex h-full items-center justify-center text-muted-foreground">
                Preview will appear here after generation...
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
