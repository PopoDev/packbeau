# Packbeau

Prototype your idea, get user feedback, and iterate in production.
The AI design tool for fast iteration and validation.

- Vision: Curiosity is the only limit
- CTA: Bring your ideas to life

## What It Does
AI-powered tool that transforms feature descriptions into shareable prototypes with automated explainer videos. Optimized for stakeholder alignment and rapid validation.

**Core Flow:**  
Text prompt → Prototype design → Auto-generated demo → Feedback → Iterate

## Target Users
Early-stage startup teams without dedicated designers who need to validate features and communicate concepts quickly.

## Key Features

### Ideation
- Natural language feature description
- Optional screenshot context

### Prototype Generation
- Single-page, scroll-based HTML+CSS prototypes
- Mock data and simple interactions (hover, toggle, expand)
- Natural language iteration
- Automatic versioning

### Share & Explain
- Auto-generated explainer video (scroll-based walkthrough with annotations)
- Interactive demo link with inline commenting
- No signup required for viewers

## Product Principles
1. **Speed over polish:** 5 minutes from idea to share link
2. **Alignment over fidelity:** Stakeholder clarity, not pixel perfection
3. **Narrative over navigation:** Single-page stories, not multi-screen apps
4. **Validation over production:** Prototypes for decision-making, not deployment

## Technical Stack
- **AI Code Generation:** Vercel AI SDK with Convex Agent
- **Thread Management:** Multi-project support with Convex database
- **Streaming UI:** Real-time generation with progress indicators
- **Design System:** shadcn/ui components

## Documentation
- `/docs/MVP.md` - Complete product requirements and scope
- `/docs/Feature.md` - Technical feature specification
- `/docs/Design.md` - Design system and UI guidelines

## Success Criteria
Users repeatedly generate, iterate, and share feature concepts within Packbeau instead of using Figma, Loom, and scattered feedback tools.
