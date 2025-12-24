'use client';

import { useRouter } from 'next/navigation';
import { useThreadStore } from '@/store/thread';
import { ChatInput } from '@/components/ChatInput';

export default function Home() {
  const router = useRouter();
  const createThread = useThreadStore((state) => state.createThread);

  const handleSubmit = (message: string) => {
    const threadId = createThread(message);
    router.push(`/projects/${threadId}`);
  };

  return (
      <div className="flex min-h-screen flex-col items-center justify-center px-8">
        <h1 className="mb-8 text-3xl font-medium text-foreground">
          What can I help with?
        </h1>
        <ChatInput onSubmit={handleSubmit} variant="hero" />
      </div>
  );
}
