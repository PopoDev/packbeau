'use client';

import { useState, useEffect, useCallback } from 'react';
import { cn } from '@/lib/utils';
import { Monitor, Layers, Palette, Tablet, Smartphone, ArrowRight, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GeneratedProject } from '@/types/project';
import { bundleProject } from '@/lib/bundler';
import { ComponentBrowser } from './Component';
import { StyleViewer } from './Style';

interface PreviewProps {
  project: GeneratedProject | null;
}

type TabType = 'page' | 'component' | 'style';
type ViewportType = 'desktop' | 'tablet' | 'mobile';

const VIEWPORT_WIDTHS: Record<ViewportType, string> = {
  desktop: '100%',
  tablet: '768px',
  mobile: '375px',
};

export function Preview({ project }: PreviewProps) {
  const [activeTab, setActiveTab] = useState<TabType>('page');
  const [viewport, setViewport] = useState<ViewportType>('desktop');
  const [bundledHtml, setBundledHtml] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Bundle project when it changes
  const bundle = useCallback(async () => {
    if (!project) {
      setBundledHtml('');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const html = await bundleProject(project);
      setBundledHtml(html);
    } catch (err) {
      console.error('Bundle error:', err);
      setError(err instanceof Error ? err.message : 'Failed to bundle project');
    } finally {
      setIsLoading(false);
    }
  }, [project]);

  useEffect(() => {
    bundle();
  }, [bundle]);

  const handleShare = () => {
    alert('Share link copied to clipboard!');
  };

  const isScaledViewport = viewport !== 'desktop';

  return (
    <div className="flex h-full flex-col bg-card rounded-2xl border border-border overflow-hidden">
      {/* Top Control Bar */}
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        {/* Left: Tab Toggle */}
        <div className="inline-flex items-center rounded-xl border border-border overflow-hidden">
          <button
            onClick={() => setActiveTab('page')}
            className={cn(
              'flex items-center gap-2 px-3 py-1.5 text-sm font-medium transition-colors',
              activeTab === 'page' ? 'bg-accent' : 'hover:bg-accent/50'
            )}
          >
            <Monitor className="h-4 w-4" />
            Page
          </button>
          <button
            onClick={() => setActiveTab('component')}
            className={cn(
              'flex items-center gap-2 px-3 py-1.5 text-sm font-medium transition-colors border-l border-border',
              activeTab === 'component' ? 'bg-accent' : 'hover:bg-accent/50'
            )}
          >
            <Layers className="h-4 w-4" />
            Component
          </button>
          <button
            onClick={() => setActiveTab('style')}
            className={cn(
              'flex items-center gap-2 px-3 py-1.5 text-sm font-medium transition-colors border-l border-border',
              activeTab === 'style' ? 'bg-accent' : 'hover:bg-accent/50'
            )}
          >
            <Palette className="h-4 w-4" />
            Style
          </button>
        </div>

        {/* Center: Responsive Viewport Controls (only for Page tab) */}
        {activeTab === 'page' && (
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
        )}

        {/* Spacer when viewport controls are hidden */}
        {activeTab !== 'page' && <div className="hidden sm:block" />}

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
        {activeTab === 'page' && (
          <PagePreview
            bundledHtml={bundledHtml}
            isLoading={isLoading}
            error={error}
            viewport={viewport}
            isScaledViewport={isScaledViewport}
          />
        )}
        {activeTab === 'component' && project && (
          <ComponentBrowser
            components={project.components}
            style={project.style}
          />
        )}
        {activeTab === 'style' && project && (
          <StyleViewer style={project.style} />
        )}
        {!project && activeTab !== 'page' && (
          <EmptyState message="No project loaded" />
        )}
      </div>
    </div>
  );
}

interface PagePreviewProps {
  bundledHtml: string;
  isLoading: boolean;
  error: string | null;
  viewport: ViewportType;
  isScaledViewport: boolean;
}

function PagePreview({ bundledHtml, isLoading, error, viewport, isScaledViewport }: PagePreviewProps) {
  if (isLoading) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          <p className="text-sm text-muted-foreground">Bundling preview...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-full items-center justify-center p-8">
        <div className="max-w-md text-center">
          <div className="mb-4 flex justify-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10">
              <span className="text-2xl">⚠️</span>
            </div>
          </div>
          <h3 className="mb-2 font-semibold">Bundle Error</h3>
          <p className="text-sm text-muted-foreground">{error}</p>
        </div>
      </div>
    );
  }

  if (!bundledHtml) {
    return <EmptyState message="Your preview will appear here" />;
  }

  return (
    <div
      className={cn(
        'h-full transition-all',
        isScaledViewport ? 'bg-muted/30 p-8 flex justify-center' : 'bg-white'
      )}
    >
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
          srcDoc={bundledHtml}
          className="h-full w-full border-0 bg-white"
          title="Preview"
          sandbox="allow-scripts"
        />
      </div>
    </div>
  );
}

function EmptyState({ message }: { message: string }) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-muted border border-border">
        <Monitor className="h-10 w-10 text-muted-foreground" />
      </div>
      <p className="text-sm text-muted-foreground">{message}</p>
    </div>
  );
}
