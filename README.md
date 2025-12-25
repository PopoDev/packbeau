# Packbeau

AI Website Designer. Turn your ideas into beautiful website mockups instantly with AI.

- Prototype: gather requirements, inspiration
- Design: create website, mockups, workflows
- Share: video and link

## Copywriting

- Theme: Cruise ship
- Vision: Curiosity is the only limit.
- CTA: Bring your ideas to life.

## Features

- Chat interface: enter a prompt and get a streamed response.
- Preview: live view of the app.
- Design agent: use shadcn to create a design system.

- Design prototype using AI
- Import from Figma: design system, components, and pages

## Implementation

- Use Convex Agent component for agentic tasks
- Integrated Vercel AI SDK for code generation
- Designed system prompt to use MCP tools and existing components

### Chat Interface
- **Thread Management**: Users can create multiple app projects, each with its own conversation thread
- **Thread Persistence**: All conversations are stored in Convex database with automatic title generation from first message

### Streaming AI Responses
- **Convex Agent Integration**: Uses `@convex-dev/agent` with Vercel AI SDK for code generation
- **Streaming UI**: Real-time text streaming with typing indicators and progress states

## Input

### CTA Message
- "Bring your ideas to life."

### Controls
- Theme: dark/light mode
- Brand colors: primary
- Animations: yes/no
