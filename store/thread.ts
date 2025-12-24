import { create } from 'zustand';

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  createdAt: Date;
}

export interface Thread {
  id: string;
  title: string;
  messages: Message[];
  generatedCode: string;
  createdAt: Date;
}

interface ThreadStore {
  threads: Thread[];
  createThread: (initialMessage: string) => string;
  addMessage: (threadId: string, role: 'user' | 'assistant', content: string) => void;
  updateGeneratedCode: (threadId: string, code: string) => void;
  getThread: (threadId: string) => Thread | undefined;
}

const generateId = () => Math.random().toString(36).substring(2, 15);

const MOCK_GENERATED_CODE = `import React from 'react';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white">
      <header className="flex items-center justify-between px-8 py-6">
        <h1 className="text-2xl font-semibold text-gray-900">Sarah Chen</h1>
        <nav className="flex gap-8">
          <a href="#work" className="text-gray-600 hover:text-gray-900">Work</a>
          <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
        </nav>
      </header>
      
      <main className="flex flex-col items-center justify-center px-8 py-24">
        <img 
          src="/avatar.jpg" 
          alt="Sarah Chen"
          className="w-32 h-32 rounded-full object-cover mb-8"
        />
        <h2 className="text-5xl font-bold text-gray-900 mb-4">UI/UX Designer</h2>
        <p className="text-xl text-gray-600 text-center max-w-2xl mb-8">
          I craft meaningful digital experiences that connect people with
          technology through thoughtful design and user-centered solutions.
        </p>
        <button className="px-8 py-3 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors">
          View My Work
        </button>
      </main>
    </div>
  );
}`;

const MOCK_AI_RESPONSE = `Based on your requirements, I'll create a beautiful single-page design portfolio showcasing case studies with a clean, Mobbin-inspired aesthetic. This will focus on strong visual hierarchy, minimal design, and production-worthy quality.

**Core Features:**
- Clean hero section with designer introduction
- Featured case studies with project previews
- Interactive project cards with hover effects
- Skills and process overview sections
- Contact information with social links
- Smooth scrolling and micro-interactions
- Responsive design for all devices

**Design Elements:**
- Sophisticated color palette with deep blues (#1e293b), vibrant accents (#3b82f6), and warm highlights (#f59e0b)
- Clean typography with proper hierarchy and 150% line spacing for body text`;

export const useThreadStore = create<ThreadStore>((set, get) => ({
  threads: [],
  
  createThread: (initialMessage: string) => {
    const threadId = generateId();
    const messageId = generateId();
    
    const newThread: Thread = {
      id: threadId,
      title: initialMessage.slice(0, 50) + (initialMessage.length > 50 ? '...' : ''),
      messages: [
        {
          id: messageId,
          role: 'user',
          content: initialMessage,
          createdAt: new Date(),
        },
      ],
      generatedCode: '',
      createdAt: new Date(),
    };
    
    set((state) => ({
      threads: [...state.threads, newThread],
    }));

    setTimeout(() => {
      get().addMessage(threadId, 'assistant', MOCK_AI_RESPONSE);
      get().updateGeneratedCode(threadId, MOCK_GENERATED_CODE);
    }, 1500);
    
    return threadId;
  },
  
  addMessage: (threadId: string, role: 'user' | 'assistant', content: string) => {
    set((state) => ({
      threads: state.threads.map((thread) =>
        thread.id === threadId
          ? {
              ...thread,
              messages: [
                ...thread.messages,
                {
                  id: generateId(),
                  role,
                  content,
                  createdAt: new Date(),
                },
              ],
            }
          : thread
      ),
    }));

    if (role === 'user') {
      setTimeout(() => {
        get().addMessage(threadId, 'assistant', 'I\'ve updated the design based on your feedback. The changes are now reflected in the preview.');
      }, 1000);
    }
  },
  
  updateGeneratedCode: (threadId: string, code: string) => {
    set((state) => ({
      threads: state.threads.map((thread) =>
        thread.id === threadId
          ? { ...thread, generatedCode: code }
          : thread
      ),
    }));
  },
  
  getThread: (threadId: string) => {
    return get().threads.find((thread) => thread.id === threadId);
  },
}));
