'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Monitor, Code2, Tablet, Smartphone, ArrowRight, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
    <div className="flex h-full flex-col bg-card rounded-2xl border border-border overflow-hidden">
      {/* Top Control Bar */}
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        {/* Left: View Toggle */}
        <div className="inline-flex items-center rounded-xl border border-border overflow-hidden">
          <button
            onClick={() => setActiveTab('preview')}
            className={cn(
              'flex items-center gap-2 px-3 py-1.5 text-sm font-medium transition-colors',
              activeTab === 'preview'
                ? 'bg-accent'
                : 'hover:bg-accent/50'
            )}
          >
            <Monitor className="h-4 w-4" />
            Preview
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={cn(
              'flex items-center gap-2 px-3 py-1.5 text-sm font-medium transition-colors border-l border-border',
              activeTab === 'code'
                ? 'bg-accent'
                : 'hover:bg-accent/50'
            )}
          >
            <Code2 className="h-4 w-4" />
            Code
          </button>
        </div>

        {/* Center: Responsive Viewport Controls */}
        <div className="hidden sm:flex items-center gap-1">
          <Button
            size="icon-sm"
            variant={viewport === 'desktop' ? 'secondary' : 'ghost'}
            onClick={() => setViewport('desktop')}
            aria-label="Desktop view"
          >
            <Monitor className="h-4 w-4" />
          </Button>
          <Button
            size="icon-sm"
            variant={viewport === 'tablet' ? 'secondary' : 'ghost'}
            onClick={() => setViewport('tablet')}
            aria-label="Tablet view"
          >
            <Tablet className="h-4 w-4" />
          </Button>
          <Button
            size="icon-sm"
            variant={viewport === 'mobile' ? 'secondary' : 'ghost'}
            onClick={() => setViewport('mobile')}
            aria-label="Mobile view"
          >
            <Smartphone className="h-4 w-4" />
          </Button>
        </div>

        {/* Right: Upgrade + Share Buttons */}
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-1.5">
            <Zap className="h-3.5 w-3.5" />
            Upgrade
          </Button>
          <Button size="sm" onClick={handleShare} className="gap-1.5">
            Share
            <ArrowRight className="h-3.5 w-3.5" />
          </Button>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-auto bg-background">
        {activeTab === 'code' ? (
          <pre className="p-6 text-sm text-muted-foreground font-mono leading-relaxed">
            <code>{htmlContent || 'Loading code...'}</code>
          </pre>
        ) : (
          <div
            className={cn(
              'h-full transition-all',
              isScaledViewport ? 'bg-muted/30 p-8 flex justify-center' : 'bg-white'
            )}
          >
            {code ? (
              <div
                className={cn(
                  'h-full transition-all',
                  isScaledViewport && 'shadow-2xl rounded-2xl overflow-hidden border border-border'
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
              <div className="flex h-full flex-col items-center justify-center gap-4">
                <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-muted border border-border">
                  <Monitor className="h-10 w-10 text-muted-foreground" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Your preview will appear here
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
