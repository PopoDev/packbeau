# Feature Specification

## Product Vision
Packbeau enables founders and small teams to go from feature idea to shareable prototype with automated explainer in minutes. Optimized for validation and stakeholder alignment.

## Core Value Proposition
**Replace:** Days of designer time, Figma mockups, Loom videos, and scattered feedback tools.  
**With:** Single flow from text prompt to commented demo link in under 5 minutes.

## Target User
Early-stage startup teams (2-10 people) without dedicated designers who need to:
- Validate features with customers quickly
- Communicate product concepts to stakeholders
- Iterate without blocking on design resources

## MVP Feature Set

### 1. Ideation Input
**Required:**
- Text prompt describing feature (user story, goal, workflow)

**Optional:**
- Screenshot upload/capture via extension for context

**Constraints:**
- No complex settings or design controls
- Simple narrative input only

### 2. Prototype Generation
**Output:** Single-page, scroll-based HTML+CSS prototype

**Capabilities:**
- Vertical scrolling narrative
- Mock data only
- Simple interaction states: hover, expand, toggle, form states
- Natural language iteration and regeneration
- Automatic version saving

**Explicitly Out of Scope:**
- Multi-page navigation or click-through flows
- Real API calls or backend logic
- Production code export
- Drag-and-drop editing
- Complex visual customization

**Design Principle:** Storytelling artifact for alignment, not functional simulation.

### 3. Share and Explain
**Interactive Demo Link:**
- Browser-viewable scrollable prototype
- Comment panel for reviewers
- No signup required to view

**Auto-Generated Explainer Video:**
- Scroll-based walkthrough (<1 min)
- On-screen annotations
- Subtitles with narrative
- Optional AI voiceover (default off)

**Combined Share Page:**
- Video first
- Prototype below video
- Inline commenting

## Success Metrics
1. Time from idea to share link: <5 minutes
2. Stakeholder comprehension without additional explanation
3. Repeat usage within same week
4. Users report replacing existing validation tools

## Technical Constraints
- Deterministic single-page output
- HTML+CSS only (minimal JS)
- Clarity over visual complexity
- Reliable sharing links
- Persistent comments without complex auth

## End-to-End Flow
```
Describe feature → Generate prototype → Iterate (optional) → 
Create demo → Share link → Collect feedback → Iterate
```

## Key Differentiators vs Magic Patterns
- **Context:** Feature narratives, not just visual layouts
- **Workflow:** Integrated explanation and feedback
- **Output:** Validation artifacts, not production components
- **Scope:** Single-page stories, not multi-screen apps

