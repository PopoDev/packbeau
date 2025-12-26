# Preview Architecture

## Overview

The Preview system provides three views for generated projects:
- **Page**: Full rendered page preview with responsive viewport controls
- **Component**: Visual component browser (Canva/Figma-style slides)
- **Style**: Design system tokens viewer (colors, typography)

## Tech Stack

- React + TypeScript
- Tailwind CSS with CSS variables
- esbuild-wasm for client-side bundling
- iframe for isolated rendering

## Data Structure

All generated code is stored as structured JSON for modularity and precise editing:

```typescript
interface GeneratedProject {
  components: Record<string, string>; // componentName -> React TSX code
  style: string;                      // globals.css content
  app: string;                        // App.tsx main entry
}
```

### Example Structure

```json
{
  "components": {
    "Header": "export function Header() { return <nav>...</nav>; }",
    "Hero": "export function Hero() { return <section>...</section>; }",
    "Features": "...",
    "Pricing": "...",
    "Footer": "..."
  },
  "style": ":root { --primary: oklch(0.623 0.214 259.815); ... }",
  "app": "import { Header } from './Header';\n..."
}
```

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                      Thread Store                           │
│                   (generatedProject JSON)                   │
└─────────────────────────┬───────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│                     Preview Component                        │
│  ┌─────────────┬─────────────┬─────────────┐               │
│  │    Page     │  Component  │    Style    │  ← Tab Nav    │
│  └─────────────┴─────────────┴─────────────┘               │
│                                                              │
│  ┌───────────────────────────────────────────────────────┐  │
│  │                    Content Area                        │  │
│  │                                                        │  │
│  │  Page Tab:      esbuild-wasm → iframe                 │  │
│  │  Component Tab: Visual component browser               │  │
│  │  Style Tab:     Design tokens viewer                   │  │
│  │                                                        │  │
│  └───────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

## Rendering Pipeline

### Page Tab (esbuild-wasm Mode A)

1. Receive JSON with components + style + app
2. Initialize esbuild-wasm in browser
3. Bundle all components into single executable
4. Inject into iframe with Tailwind CDN
5. Render live output

```
User edits → AI generates JSON → Browser bundles → iframe renders
```

### Component Tab

1. Parse components from JSON
2. Display as visual grid/slides
3. Each component card shows:
   - Component name
   - Live preview thumbnail
   - Click to expand/edit

### Style Tab

1. Parse CSS variables from style string
2. Display design tokens:
   - Color palette (large swatches)
   - Typography scale
   - Spacing/radius values

## File Structure

```
components/projects/
├── Preview.tsx      # Main container with tabs
├── Component.tsx    # Visual component browser
└── Style.tsx        # Design tokens viewer

lib/
└── bundler.ts       # esbuild-wasm integration

types/
└── project.ts       # GeneratedProject interface

store/
└── thread.ts        # Updated with JSON structure
```

## Integration

```tsx
// app/(dashboard)/projects/[id]/page.tsx
import { Preview } from '@/components/projects/Preview';

<Preview project={thread.generatedProject} />
```

## CSS Variable Tokens

The style system uses oklch color format for design tokens:

```css
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --primary: oklch(0.623 0.214 259.815);
  --primary-foreground: oklch(0.985 0 0);
  --card: oklch(1 0 0);
  --border: oklch(0.922 0 0);
  --radius: 0.625rem;
}
```

## MVP Scope

- Basic three-tab navigation
- Page preview with viewport controls
- Component browser with card layout
- Style viewer with color swatches
- Minimal styling, functional first
