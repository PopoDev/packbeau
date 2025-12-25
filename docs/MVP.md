Here is the updated document reflecting the new product decision: **single-page, scroll-based prototypes with no navigation, HTML+CSS only, lightweight interactions and states, optimized for explainer narration and annotations.** The structure is unchanged, but the scope and requirements are updated to match the C-suite decision.

---

# Packbeau MVP PRD

The objective is to enable users to go from a feature idea to a shareable prototype and automated explainer in minutes, with minimal tooling and minimal cognitive overhead.

# Product Goal

Enable founders and small product teams to describe a feature idea, generate a functional prototype, and share an explainer demo for stakeholder review in one integrated flow.

Primary outcome: reduce the time required to move from idea to validated prototype from days to minutes.

North star success behavior: users repeatedly generate, iterate, and share feature concepts from within Packbeau.

# Target ICP

Early-stage startup teams (2–10 people), especially founders without a full-time designer, who need to:

* validate new features with customers
* communicate product ideas to teammates or investors
* iterate rapidly without blocking on Figma or design resources

Willingness to pay is based on time saved and improved decision velocity.

# Case Study: How Small Teams Use Magic Patterns Today

Observation of common behaviors among founders and early product teams using Magic Patterns:

* They write a text prompt to generate a UI layout.
* They iterate by re-prompting until the layout is visually acceptable.
* They export screenshots or copy the UI into Figma to refine it.
* They share screenshots or links manually using Slack, email, or Notion.
* They still need additional tools to explain the design or capture feedback.
* The workflow is primarily visual and not tied to a use-case or feature narrative.
* Validation still requires parallel tools (Loom, Figma, Notion, Docs, Slack).

Pain points:

* Output is often visually appealing but not contextual to a real feature flow.
* Requires designers or manual cleanup after generation.
* No integrated explainer or demo artifact.
* Sharing and feedback are outside the tool.
* Weak alignment with stakeholder discussions.

Implication for Packbeau:

* The winning wedge is not “better UI generation.”
* The winning wedge is “faster alignment and validation around real product features.”
* Packbeau should optimize for product workflow clarity, not visual fidelity.

# Single Most Important Flow

Describe a feature → Generate a functional prototype → Auto-create explainer demo → Share for review and feedback.

This is the MVP flow to implement and refine.

# Flow Overview

The flow consists of three stages:

* Ideation input
* Prototype generation
* Share and explain

Each stage should be simple, opinionated, and fast.

# Stage 1: Ideation Input

Goal: capture the minimum useful context about a feature so the prototype can reflect a real use case without complex setup.

Decision: for MVP, the simplest and highest ROI ideation input is text input plus optional screenshot.

Rationale:

* Early-stage teams often do not have mature Figma systems.
* Copying HTML or complex capture flows slows initial adoption.
* The existing extension can optionally provide screenshots without increasing friction.
* A simple narrative input aligns with founder workflows and user stories.

MVP Input Options:

Required input:

* Free-text prompt describing the feature

Example format:

* user story
* goal of the feature
* target screen or workflow

Optional input:

* Upload or capture a screenshot using the existing extension
* This is used as product context, not hard constraints

Defer for later versions:

* Full Figma import
* Structured field inputs
* Automatic HTML scraping

Ideation screen structure:

* Text box titled “Describe the feature or workflow”
* Optional screenshot attachment
* Button: “Generate Prototype”

Constraints:

* No complex settings
* No design override controls at MVP
* User moves quickly into prototype generation

# Stage 2: Prototype Generation

Goal: generate a simple, scrollable, single-page prototype that communicates the feature narrative clearly enough to support conversation and decision-making, without navigation or multi-screen flows.

Decision: the MVP prototype must be a one-pager using only HTML and CSS, with optional lightweight interaction states, but no page-to-page navigation.

MVP requirements:

* Generate a single-page prototype
* Allow vertical scrolling
* Allow simple interaction states only (hover, expand, toggle, form states)
* Use mock data only
* Use a consistent visual system
* Do not simulate real API calls or backend logic

Prototype contents:

* Title and problem statement (optional)
* Visual narrative of the feature or concept
* Sections representing feature states or components
* Mock data placeholders
* Simple visual storytelling of the solution

User interactions allowed:

* Scroll through the page
* Interact with lightweight elements such as:

  * accordions
  * tabs
  * toggles
  * input states
* Request revision via natural language prompt
* Regenerate updated one-pager
* Save version automatically

Out of scope for MVP:

* Multi-screen navigation
* Click-through flows
* Complex editors or nested tools
* Dynamic data modeling
* Export to production code
* Drag-and-drop editing
* Deep visual customization

Key principle:

* The prototype is a narrative and storytelling artifact, not a functional product simulation.

# Stage 3: Share and Explain

Goal: make the prototype understandable without the user needing to manually narrate or edit a video.

Decision: the explainer is optimized for a one-pager. The video should be scroll-based with annotations and narration synchronized to key regions of the page.

Priorities:

* Demo should be understandable in under one minute.
* Sharing should create a viral surface.
* Viewer should not need to sign up to view.

MVP output artifacts:

Interactive demo link:

* Viewable in browser
* Scrollable one-page prototype
* Comment panel for reviewers
* Viewer identity optional (name field)

Auto-generated explainer video:

* Scroll-based walkthrough of the page
* Step-based movement to key sections
* On-screen annotations
* Subtitles describing the narrative
* Optional AI narration (voiceover), default off but available

Combined share page behavior:

* Video appears first
* Prototype is accessible directly below the video
* Reviewer can scroll, view, and leave comments

Out of scope for MVP:

* Timeline editing for videos
* Custom branding or themes
* Complex animation effects
* Multi-scene or multi-page recordings

Primary goal is clarity, not production value.

# End-to-End Flow Description

* User opens Packbeau and starts a new project.
* User enters feature description in text field.
* Optional: user attaches screenshot using extension.
* User clicks “Generate Prototype.”
* AI generates a single-page HTML+CSS prototype with mock content.
* User reviews and optionally requests a revision with text input.
* User clicks “Create Demo.”
* Packbeau generates:

  * interactive one-page prototype link
  * automated scroll-based explainer video
* User shares the link with stakeholders.
* Stakeholders:

  * watch the explainer
  * scroll through the prototype
  * leave comments or approval
* User iterates based on feedback using the same flow.

# Technical Scope Guidance for MVP

* Output must be deterministic, single-page, and stable.
* Prototype must render using HTML and CSS only.
* Avoid JavaScript-heavy interaction models in MVP.
* Prefer clarity over visual complexity.
* Sharing links must be reliable and performant.
* Comments and views must persist without complex permissions.

# Success Criteria

* Users complete the full flow from idea to share link within 5 minutes.
* Stakeholders understand the concept from the one-pager without extra explanation.
* Teams reuse the tool for multiple concepts within the same week.
* Users state that Packbeau replaces part of their existing ideation and validation process.
