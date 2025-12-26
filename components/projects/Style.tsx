"use client";

import { useMemo } from "react";

interface StyleViewerProps {
  style: string;
}

interface DesignToken {
  name: string;
  cssVar: string;
  value: string;
}

/**
 * Enhanced Parser to capture colors, radius, and fonts
 */
function parseTokens(style: string) {
  const tokens: DesignToken[] = [];
  const rootMatch = style.match(/:root\s*\{([^}]+)\}/);
  if (!rootMatch) return { colors: [], layout: {} as Record<string, string> };

  const rootContent = rootMatch[1];
  const varRegex = /--([\w-]+):\s*([^;]+);/g;
  let match;

  const layout: Record<string, string> = {};

  while ((match = varRegex.exec(rootContent)) !== null) {
    const [_, name, value] = match;
    const trimmedValue = value.trim();

    // Categorize tokens
    if (
      trimmedValue.startsWith("oklch") ||
      trimmedValue.startsWith("rgb") ||
      trimmedValue.startsWith("hsl") ||
      trimmedValue.startsWith("#") ||
      ["white", "black", "transparent"].includes(trimmedValue)
    ) {
      tokens.push({
        name: formatTokenName(name),
        cssVar: `--${name}`,
        value: trimmedValue,
      });
    } else {
      // Capture structural tokens (radius, font-family)
      layout[name] = trimmedValue;
    }
  }

  return { colors: tokens, layout };
}

function formatTokenName(name: string): string {
  return name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function StyleViewer({ style }: StyleViewerProps) {
  const { colors, layout } = useMemo(() => parseTokens(style), [style]);

  const groupedColors = useMemo(() => {
    const groups: Record<string, DesignToken[]> = {
      Core: [],
      Primary: [],
      Other: [],
    };
    colors.forEach((c) => {
      if (c.cssVar.includes("primary")) groups["Primary"].push(c);
      else if (
        c.cssVar.includes("background") ||
        c.cssVar.includes("foreground")
      )
        groups["Core"].push(c);
      else groups["Other"].push(c);
    });
    return Object.fromEntries(
      Object.entries(groups).filter(([_, t]) => t.length > 0)
    );
  }, [colors]);

  const themeRadius = layout["radius"] || "0.5rem";

  return (
    <div className="h-full overflow-auto p-6 transition-colors duration-300">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <header>
          <h2 className="text-2xl font-semibold mb-1">Design System</h2>
          <p className="text-sm text-muted-foreground">
            Color palette and font family
          </p>
        </header>

        {/* Color Palette */}
        {Object.entries(groupedColors).map(([groupName, tokens]) => (
          <section key={groupName} className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest opacity-50">
              {groupName}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {tokens.map((token) => (
                <ColorSwatch key={token.cssVar} token={token} />
              ))}
            </div>
          </section>
        ))}

        <div className="grid md:grid-cols-2 gap-8">
          {/* Typography */}
          <section className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest opacity-50">
              Typography
            </h3>
            <div className="p-6 border rounded-lg">
              <div className="space-y-4">
                <div>
                  <p className="text-[10px] uppercase opacity-50 mb-1">
                    Font Family
                  </p>
                  <p className="text-sm font-mono">
                    {layout["font-sans"] || "System Sans"}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-4xl font-extrabold tracking-tighter">
                    Headline XL
                  </p>
                  <p className="text-lg opacity-80">
                    Body copy showing line-height and weight.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Border Radius */}
          <section className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest opacity-50">
              Border Radius
            </h3>
            <div className="flex flex-wrap gap-4 items-end">
              {[0.5, 1, 1.5, 2].map((multiplier) => {
                // Calculate scaled radius based on the base token
                const baseVal = parseFloat(themeRadius);
                const unit = themeRadius.replace(/[0-9.]/g, "");
                const calculatedRadius = `${baseVal * multiplier}${unit}`;

                return (
                  <div
                    key={multiplier}
                    className="flex flex-col items-center gap-2"
                  >
                    <div
                      className="w-16 h-16"
                      style={{
                        backgroundColor:
                          colors.find((c) => c.cssVar.includes("primary"))
                            ?.value || "currentColor",
                        borderRadius: calculatedRadius,
                      }}
                    />
                    <span className="text-[10px] font-mono">
                      {calculatedRadius}
                    </span>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function ColorSwatch({ token }: { token: DesignToken }) {
  return (
    <div className="group flex flex-col overflow-hidden border rounded-lg">
      <div className="h-20 w-full" style={{ backgroundColor: token.value }} />
      <div className="p-3 text-left">
        <p className="font-semibold text-xs truncate">{token.name}</p>
        <code className="text-[10px] opacity-60 block mt-1">{token.value}</code>
      </div>
    </div>
  );
}
