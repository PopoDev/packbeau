'use client';

import { useEffect, useRef } from 'react';
import { ChatInput } from '@/components/ChatInput';
import { ChatMessage } from '@/components/ChatMessage';
import { CodePreview } from '@/components/CodePreview';
import { useThreadStore } from '@/store/thread';
import { useParams, redirect } from 'next/navigation';

export default function ProjectPage() {
  const params = useParams();
  const threadId = params.id as string;
  const thread = useThreadStore((state) => state.getThread(threadId || ''));
  const addMessage = useThreadStore((state) => state.addMessage);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [thread?.messages]);

  if (!thread) {
    return redirect('/');
  }

  const handleSubmit = (message: string) => {
    addMessage(thread.id, 'user', message);
  };

  return (
      <div className="flex h-screen">
        <div className="flex w-1/2 flex-col border-r border-border">
          <div className="flex-1 overflow-auto p-6">
            <div className="flex flex-col gap-6">
              {thread.messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>

          <div className="border-t border-border p-4">
            <ChatInput
              onSubmit={handleSubmit}
              placeholder="Send a message..."
              variant="compact"
            />
          </div>
        </div>

        <div className="flex w-1/2 flex-col p-4">
          <CodePreview code={thread.generatedCode} />
        </div>
      </div>
  );
}
