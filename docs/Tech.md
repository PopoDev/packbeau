# Technical Architecture

## Core Technology Stack

### AI Code Generation
- **Vercel AI SDK**: Primary code generation engine
- **Convex Agent Component** (`@convex-dev/agent`): Handles agentic tasks and complex AI workflows
- **System Prompt Design**: Engineered to leverage fast generation and direct output to HTML+CSS by using the existing component library
- **Tech moat**: Designed for speed and simplicity, no VMs, third party servers, no extra dependencies, simplest generated code possible.

### Backend & Data
- **Convex**: Real-time database and backend infrastructure
- **Thread Management**: Multi-project support with conversation persistence
- **Auto-generated Titles**: First message generates thread title

### Frontend
- **Design System**: shadcn/ui components
- **Streaming UI**: Real-time text streaming with typing indicators and progress states
- **Color System**: Customizable brand colors

## Key Technical Features

### Streaming AI Responses
- **Convex Agent Integration**: Uses `@convex-dev/agent` with Vercel AI SDK for code generation
- **Streaming UI**: Real-time text streaming with typing indicators and progress states
- **Progressive Rendering**: Users see responses as they're generated

### Chat Interface
- **Thread Management**: Users can create multiple app projects, each with its own conversation thread
- **Thread Persistence**: All conversations stored in Convex database with automatic title generation from first message
- **Context Preservation**: Full conversation history maintained per project

### Prototype Generation Pipeline
1. User submits text prompt (+ optional screenshot)
2. System prompt designed to be as fast as possible to generate HTML+CSS code directly by using the existing component library
3. Convex Agent orchestrates generation workflow
4. Vercel AI SDK streams HTML+CSS code
5. Real-time preview updates as code generates
6. Version automatically saved to database

## Technical Constraints (MVP)

### Output Format
- **HTML + CSS only**: Minimal JavaScript for lightweight interactions
- **Single-page structure**: No routing or multi-page navigation
- **Deterministic rendering**: Consistent output for same inputs
- **Mock data only**: No API calls or dynamic data fetching

### Performance Requirements
- **Generation time**: <30 seconds for initial prototype
- **Streaming latency**: <200ms for first token
- **Share link load time**: <2 seconds
- **Video generation**: <60 seconds for explainer

### Scalability Considerations
- **Convex real-time sync**: Handles concurrent users without additional infrastructure
- **Stateless generation**: Each prototype generation is independent
- **Efficient prompt caching**: Reuse system prompts and component definitions

## Development Workflow

### Component Library Strategy
- Maintain curated set of shadcn/ui components
- System prompt references component APIs
- Agent selects and composes components based on user intent

### Agent Tool Integration
- **MCP Tools**: Model Context Protocol for standardized tool calling
- **Component Tools**: Direct access to design system primitives
- **Layout Tools**: Semantic layout generation (hero, features, pricing, etc.)

### Quality Control
- Prompt engineering for consistent output
- Component validation before rendering
- Automatic fallbacks for generation failures

## Future Technical Enhancements (Post-MVP)
- Multi-page navigation support
- Real-time collaborative editing
- Custom component import from Figma
- Advanced animation and interaction states
- Production code export with proper architecture

