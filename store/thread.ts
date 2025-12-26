import { create } from 'zustand';
import { GeneratedProject } from '@/types/project';
import { MOCK_PROJECT } from './mock-project';

export interface ActionBadge {
  type: 'write';
  label: string;
}

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  createdAt: Date;
  thinkingText?: string;
  actionBadges?: ActionBadge[];
  isThinking?: boolean;
}

export interface Thread {
  id: string;
  title: string;
  messages: Message[];
  generatedProject: GeneratedProject | null;
  createdAt: Date;
}

interface ThreadStore {
  threads: Thread[];
  createThread: (initialMessage: string) => string;
  addMessage: (
    threadId: string, 
    role: 'user' | 'assistant', 
    content: string,
    options?: {
      thinkingText?: string;
      actionBadges?: ActionBadge[];
      isThinking?: boolean;
    }
  ) => void;
  updateMessageThinking: (threadId: string, messageId: string, isThinking: boolean) => void;
  updateGeneratedProject: (threadId: string, project: GeneratedProject) => void;
  getThread: (threadId: string) => Thread | undefined;
}

const generateId = () => Math.random().toString(36).substring(2, 15);

const MOCK_THINKING_TEXT = "Thinking...";

const MOCK_AI_RESPONSE = `I've crafted a modern AI landing page with a clean, *liquid glass* aesthetic.

**What I've built:**
- Hero section with bold headline and AI-powered input
- Trusted by section with company logos
- Feature cards with *glass morphism* effects
- Showcase gallery with hover interactions
- Pricing tiers with clear value propositions
- Responsive footer with social links

**Design highlights:**
- Sophisticated blue accent palette matching your brand
- Smooth slide-up animations for engagement
- Clean typography with **Inter font family**
- Mobile-responsive layout throughout

Learn more about design systems at [Tailwind CSS](https://tailwindcss.com) or [Radix UI](https://www.radix-ui.com).`;

const MOCK_FOLLOWUP_RESPONSE = `I've updated the design based on your feedback. The changes are now reflected in the preview — take a look and let me know if we need to adjust course.`;

export const useThreadStore = create<ThreadStore>((set, get) => ({
  threads: [],
  
  createThread: (initialMessage: string) => {
    const threadId = generateId();
    const userMessageId = generateId();
    const assistantMessageId = generateId();
    
    const newThread: Thread = {
      id: threadId,
      title: initialMessage.slice(0, 50) + (initialMessage.length > 50 ? '...' : ''),
      messages: [
        {
          id: userMessageId,
          role: 'user',
          content: initialMessage,
          createdAt: new Date(),
        },
        {
          id: assistantMessageId,
          role: 'assistant',
          content: '',
          createdAt: new Date(),
          thinkingText: MOCK_THINKING_TEXT,
          isThinking: true,
        },
      ],
      generatedProject: null,
      createdAt: new Date(),
    };
    
    set((state) => ({
      threads: [...state.threads, newThread],
    }));

    // Simulate AI response after delay
    setTimeout(() => {
      set((state) => ({
        threads: state.threads.map((thread) =>
          thread.id === threadId
            ? {
                ...thread,
                messages: thread.messages.map((msg) =>
                  msg.id === assistantMessageId
                    ? {
                        ...msg,
                        content: MOCK_AI_RESPONSE,
                        isThinking: false,
                        actionBadges: [{ type: 'write' as const, label: 'Generated prototype' }],
                      }
                    : msg
                ),
                generatedProject: MOCK_PROJECT,
              }
            : thread
        ),
      }));
    }, 1500);
    
    return threadId;
  },
  
  addMessage: (
    threadId: string, 
    role: 'user' | 'assistant', 
    content: string,
    options?: {
      thinkingText?: string;
      actionBadges?: ActionBadge[];
      isThinking?: boolean;
    }
  ) => {
    const messageId = generateId();
    
    set((state) => ({
      threads: state.threads.map((thread) =>
        thread.id === threadId
          ? {
              ...thread,
              messages: [
                ...thread.messages,
                {
                  id: messageId,
                  role,
                  content,
                  createdAt: new Date(),
                  ...options,
                },
              ],
            }
          : thread
      ),
    }));

    // If user sends a message, simulate AI thinking then response
    if (role === 'user') {
      const thinkingMessageId = generateId();
      
      // Add thinking message
      set((state) => ({
        threads: state.threads.map((thread) =>
          thread.id === threadId
            ? {
                ...thread,
                messages: [
                  ...thread.messages,
                  {
                    id: thinkingMessageId,
                    role: 'assistant',
                    content: '',
                    createdAt: new Date(),
                    thinkingText: 'Updating your design...',
                    isThinking: true,
                  },
                ],
              }
            : thread
        ),
      }));
      
      // Update with response after delay
      setTimeout(() => {
        set((state) => ({
          threads: state.threads.map((thread) =>
            thread.id === threadId
              ? {
                  ...thread,
                  messages: thread.messages.map((msg) =>
                    msg.id === thinkingMessageId
                      ? {
                          ...msg,
                          content: MOCK_FOLLOWUP_RESPONSE,
                          isThinking: false,
                        }
                      : msg
                  ),
                }
              : thread
          ),
        }));
      }, 1000);
    }
  },
  
  updateMessageThinking: (threadId: string, messageId: string, isThinking: boolean) => {
    set((state) => ({
      threads: state.threads.map((thread) =>
        thread.id === threadId
          ? {
              ...thread,
              messages: thread.messages.map((msg) =>
                msg.id === messageId
                  ? { ...msg, isThinking }
                  : msg
              ),
            }
          : thread
      ),
    }));
  },
  
  updateGeneratedProject: (threadId: string, project: GeneratedProject) => {
    set((state) => ({
      threads: state.threads.map((thread) =>
        thread.id === threadId
          ? { ...thread, generatedProject: project }
          : thread
      ),
    }));
  },
  
  getThread: (threadId: string) => {
    return get().threads.find((thread) => thread.id === threadId);
  },
}));
