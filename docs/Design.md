# Packbeau Design System

The AI design tool for fast iteration and validation.

## Brand Identity

### Theme
- Cruise ship and ocean voyage
- Nautical exploration and discovery
- Journey from idea to shipped product

### Vision
- Curiosity is the only limit

### Voice and Tone
- Confident and empowering
- Action-oriented and forward-moving
- Professional yet approachable
- Simple, concise, and to the point

### Key Messaging
- Primary CTA: Time to ship, captain
- Secondary CTA: Bring your ideas to life
- Value proposition: Prototype your idea, get user feedback, and iterate in production.

## Typography

### Font Families
- Sans: var(--font-sans)
- Mono: var(--font-geist-mono)

### Text Hierarchy
- Hero Headline: 3xl to 5xl, font-medium, tracking-tight, white
- Body: Default size, foreground color
- Labels: Small to default, muted-foreground

### Text Treatment
- Use white text on ocean gradient backgrounds
- High contrast for readability on animated backgrounds
- Center-align hero text
- Left-align body and interface text

## Layout System

### Spacing
- Use Tailwind spacing scale
- Generous whitespace around hero elements
- Responsive padding: px-4 on mobile, px-8 on tablet, px-16 on desktop

### Container Patterns
- Full-screen hero layouts with centered content
- Minimum height: min-h-screen
- Flexbox for centering: flex flex-col items-center justify-center

### Grid and Alignment
- Center-aligned hero sections
- Left-aligned interface elements
- Responsive breakpoints: sm, lg standards

## Components

### Glass Morphism
- Primary glass: rgba(255, 255, 255, 0.08) background
- Backdrop blur: 24px
- Border: 1px solid rgba(255, 255, 255, 0.15)
- Shadow: 0 8px 32px rgba(0, 0, 0, 0.3) with inset highlight
- Use for cards, panels, and floating UI elements

### Glass Morphism Light
- Light variant: rgba(255, 255, 255, 0.85) background
- Use for light mode interfaces
- Border: 1px solid rgba(0, 0, 0, 0.1)
- Softer shadows

## Visual Effects

### Ocean Ambiance
- Floating bubble particles from bottom to top
- Bubble count: 45 particles
- Bubble size range: 2px to 8px
- Animation duration: 10s to 20s per bubble
- Radial gradient fill with transparency
- Blur filter: 0.5px

### Night Sky Stars
- Star particles in upper 30% of viewport
- Star count: 80 particles
- Star size range: 1px to 3px
- Twinkle animation: 2s to 4s
- White with subtle box shadow glow

### Spotlight Effect
- Radial gradient ellipse centered at 50% 45%
- White with low opacity: 0.12 to 0.05
- Pulsing animation: 4s duration
- Creates depth and focus on center content

### Wave Glow
- Positioned at bottom of viewport
- Height: 200px
- Radial gradient with cyan tint: rgba(6, 182, 212, 0.15)
- Gentle animation sync with background gradient

### Grain Texture
- Fixed overlay on entire viewport
- SVG fractal noise pattern
- Very low opacity: 0.03
- Adds analog warmth to digital gradient
- Z-index: 100 (always on top but non-interactive)

## Animation Principles

### Animation Duration Standards
- Quick interactions: 0.2s
- Standard transitions: 0.6s to 0.8s
- Ambient animations: 10s to 25s
- Ease functions: ease-in-out for most, cubic-bezier for elastic

### Keyframe Animations
- accordion-down and accordion-up: 0.2s ease-out
- appear: 0.6s with blur and translateY
- appear-zoom: 0.6s scale transform
- bubble-float: 15s with opacity and position changes
- gradient-shift: 25s infinite alternate
- spotlight-pulse: 4s infinite
- star-twinkle: 3s infinite
- slide-up-fade: 0.8s ease-out
- scale-in: 0.6s elastic cubic-bezier

### Animation Delays
- Stagger animations with delays: 0.1s, 0.2s, 0.3s, 0.4s, 0.5s, 0.7s, 1s
- Random delays for particles to create organic feel

### Reduced Motion
- Respect prefers-reduced-motion media query
- Disable all decorative animations when requested
- Keep functional animations minimal

## Interaction States

### Hover States
- Slight scale increase: 1.05 to 1.1
- Opacity or brightness increase
- Border color intensification
- Smooth transition: 0.2s ease

### Active States
- Background color shift to accent color
- Border glow effect
- Box shadow with color matching accent
- Clear visual feedback

### Focus States
- Ring outline using --ring color
- 50% opacity on ring
- Accessible contrast ratios

### Disabled States
- Reduce opacity to 0.5
- Remove hover effects
- Cursor: not-allowed

### Breakpoints
- Mobile: default (< 640px)
- Tablet: sm (640px)
- Desktop: lg (1024px)

### Text Scaling
- Hero: text-3xl sm:text-4xl lg:text-5xl
- Scale proportionally across breakpoints

### Spacing Adaptation
- Padding: px-4 sm:px-8 lg:px-16
- Margin: Proportional to viewport

### Component Adaptation
- Stack vertically on mobile
- Side-by-side on desktop
- Touch-friendly tap targets (minimum 44px)

## Dark Mode

### Strategy
- Dark mode as default experience
- Ocean night theme inherently dark

### Color Switching
- All colors defined with light and dark variants
- Automatic theme switching via .dark class
- Consistent glass morphism in both modes

### Contrast Management
- Maintain readability in both modes
- Adjust opacity and blur for different backgrounds
- Test all states in both themes

## Iconography

### Style
- Clean and minimal
- Consistent stroke width
- Match overall aesthetic (nautical where appropriate)

### Size Scale
- Small: 16px
- Medium: 20px
- Large: 24px
- Hero: 32px+

### Usage
- Use icons to support text, not replace it
- Maintain consistent sizing within context
- Ensure icons have proper ARIA labels

## Imagery

### Photography Style
- Ocean and nautical themes when applicable
- High quality and sharp
- Color palette alignment with brand blues and teals

### Mockup Presentations
- Clean device mockups
- Shadow: --shadow-mockup (-12px 16px 48px)
- Show UI in context

### Illustrations
- Minimal and modern
- Line-based or geometric
- Match color system

## Micro-interactions

### Loading States
- Smooth opacity transitions
- Skeleton screens with glass morphism
- Progress indicators that match theme

### Success Feedback
- Subtle scale or glow effect
- Brief animation (< 1s)
- Non-intrusive confirmation

### Error States
- Destructive color with reduced opacity
- Shake or pulse animation
- Clear error message

### Transitions
- Page transitions: slide-up-fade or scale-in
- Element transitions: appear or appear-zoom
- Maintain continuity between states

## Z-Index Layers

### Layer System
- Grain overlay: 100
- Content: 30
- Spotlight: 15
- Bubbles: 10
- Wave: 8
- Stars: 5
- Background: 0

### Stacking Context
- Establish clear hierarchy
- Avoid z-index conflicts
- Keep system predictable

## Border Radius

### Scale
- sm: calc(var(--radius) - 4px)
- md: calc(var(--radius) - 2px)
- lg: var(--radius) - 0.625rem base
- xl: calc(var(--radius) + 4px)
- 2xl: calc(var(--radius) + 8px)
- 3xl: calc(var(--radius) + 12px)
- 4xl: calc(var(--radius) + 16px)

### Usage
- Buttons and controls: 8px (md to lg)
- Cards and panels: 12px (lg to xl)
- Modals: 16px (xl to 2xl)
- Pills: 9999px (full)

## Shadows

### Elevation System
- Low: 0 4px 24px rgba(0, 0, 0, 0.4)
- Medium: 0 8px 32px rgba(0, 0, 0, 0.3)
- High: 0 16px 48px rgba(0, 0, 0, 0.4)
- Mockup: -12px 16px 48px (--shadow-strong)

### Glow Effects
- Accent glow: 0 0 12px rgba(59, 130, 246, 0.3)
- White glow: 0 0 8px rgba(255, 255, 255, 0.5)
- Star glow: 0 0 4px rgba(255, 255, 255, 0.8)

### Inset Highlights
- Top highlight: inset 0 1px 0 rgba(255, 255, 255, 0.1)
- Creates depth on glass surfaces

## Component Library Integration

### shadcn/ui
- Use shadcn components as base
- Apply glass morphism styling
- Customize with ocean theme colors
- Maintain consistent radix patterns

### Custom Components
- Build on top of shadcn primitives
- Follow established patterns
- Document component-specific usage
- Ensure accessibility compliance

## Design Tokens

### Line Width
- Standard: 1px (--line-width)
- Use for borders and dividers

### Backdrop Blur
- Standard: 24px for glass effects
- Light: 16px for subtle blur
- Use -webkit-backdrop-filter for Safari support

### Opacity Ranges
- Text on gradient: 1.0 (full opacity white)
- Glass background: 0.08 to 0.15
- Particles: 0.2 to 0.6
- Overlays: 0.03 to 0.25

## Best Practices

### Performance
- Optimize animation count and complexity
- Use CSS transforms for animations (GPU accelerated)
- Lazy load heavy assets
- Minimize backdrop-filter usage on large areas

### Consistency
- Always use design tokens from globals.css
- Follow established component patterns
- Reference this document for decisions
- Test in both light and dark modes

### Maintenance
- Keep design system updated with new patterns
- Document new components as they are created
- Regular design audits for consistency
- Version control design changes

### AI Agent Guidelines
- Reference color variables not hex codes
- Use established component patterns
- Apply glass morphism for floating UI
- Follow animation duration standards
- Maintain z-index layer system
- Respect accessibility requirements
- Use ocean gradient as default background for hero pages
- Apply nautical theme to copy and messaging

