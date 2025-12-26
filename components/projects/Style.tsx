'use client';

import { useMemo } from 'react';
import { cn } from '@/lib/utils';

interface StyleViewerProps {
  style: string;
}

interface ColorToken {
  name: string;
  cssVar: string;
  value: string;
}

/**
 * Parse CSS variables from style string
 */
function parseTokens(style: string): { colors: ColorToken[] } {
  const colors: ColorToken[] = [];
  
  // Match CSS variables in :root
  const rootMatch = style.match(/:root\s*\{([^}]+)\}/);
  if (!rootMatch) return { colors };

  const rootContent = rootMatch[1];
  const varRegex = /--([\w-]+):\s*([^;]+);/g;
  let match;

  while ((match = varRegex.exec(rootContent)) !== null) {
    const [, name, value] = match;
    const trimmedValue = value.trim();

    // Identify color tokens (oklch, rgb, hsl, hex, or named colors)
    if (
      trimmedValue.startsWith('oklch') ||
      trimmedValue.startsWith('rgb') ||
      trimmedValue.startsWith('hsl') ||
      trimmedValue.startsWith('#') ||
      ['white', 'black', 'transparent'].includes(trimmedValue)
    ) {
      colors.push({
        name: formatTokenName(name),
        cssVar: `--${name}`,
        value: trimmedValue,
      });
    }
  }

  return { colors };
}

/**
 * Format token name for display
 */
function formatTokenName(name: string): string {
  return name
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Group colors by category
 */
function groupColors(colors: ColorToken[]): Record<string, ColorToken[]> {
  const groups: Record<string, ColorToken[]> = {
    'Core': [],
    'Primary': [],
    'Card & Popover': [],
    'Muted': [],
    'Other': [],
  };

  for (const color of colors) {
    const lowerName = color.cssVar.toLowerCase();
    
    if (lowerName.includes('primary')) {
      groups['Primary'].push(color);
    } else if (lowerName.includes('background') || lowerName.includes('foreground')) {
      groups['Core'].push(color);
    } else if (lowerName.includes('card') || lowerName.includes('popover')) {
      groups['Card & Popover'].push(color);
    } else if (lowerName.includes('muted')) {
      groups['Muted'].push(color);
    } else {
      groups['Other'].push(color);
    }
  }

  // Remove empty groups
  return Object.fromEntries(
    Object.entries(groups).filter(([, tokens]) => tokens.length > 0)
  );
}

export function StyleViewer({ style }: StyleViewerProps) {
  const { colors } = useMemo(() => parseTokens(style), [style]);
  const groupedColors = useMemo(() => groupColors(colors), [colors]);

  return (
    <div className="h-full overflow-auto p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h2 className="text-xl font-semibold mb-1">Design Tokens</h2>
          <p className="text-sm text-muted-foreground">
            Color palette and design system variables
          </p>
        </div>

        {/* Color Palette */}
        {Object.entries(groupedColors).map(([groupName, tokens]) => (
          <section key={groupName} className="space-y-4">
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              {groupName}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {tokens.map((token) => (
                <ColorSwatch key={token.cssVar} token={token} />
              ))}
            </div>
          </section>
        ))}

        {/* Typography Section */}
        <section className="space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Typography
          </h3>
          <div className="bg-card rounded-xl border border-border p-6 space-y-4">
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground">Font Family</p>
              <p className="font-medium">Inter, sans-serif</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground">Heading</p>
                <p className="text-2xl font-bold">Aa Bb Cc</p>
              </div>
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground">Body</p>
                <p className="text-base">Aa Bb Cc</p>
              </div>
            </div>
          </div>
        </section>

        {/* Radius Section */}
        <section className="space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Border Radius
          </h3>
          <div className="flex gap-4">
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 bg-primary rounded-sm" />
              <span className="text-xs text-muted-foreground">sm</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 bg-primary rounded-md" />
              <span className="text-xs text-muted-foreground">md</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 bg-primary rounded-lg" />
              <span className="text-xs text-muted-foreground">lg</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 bg-primary rounded-xl" />
              <span className="text-xs text-muted-foreground">xl</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 bg-primary rounded-full" />
              <span className="text-xs text-muted-foreground">full</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

interface ColorSwatchProps {
  token: ColorToken;
}

function ColorSwatch({ token }: ColorSwatchProps) {
  return (
    <button
      className={cn(
        'group flex flex-col rounded-xl border border-border overflow-hidden',
        'hover:border-primary/50 hover:shadow-md transition-all'
      )}
    >
      {/* Color Box */}
      <div
        className="h-20 w-full"
        style={{ backgroundColor: `var(${token.cssVar})` }}
      />
      {/* Info */}
      <div className="p-3 bg-card text-left">
        <p className="font-medium text-sm truncate">{token.name}</p>
        <p className="text-xs text-muted-foreground truncate mt-0.5">
          {token.value}
        </p>
      </div>
    </button>
  );
}

