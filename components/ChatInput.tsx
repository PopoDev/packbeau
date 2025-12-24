import { useState, KeyboardEvent } from 'react';
import { ArrowUp, Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/local/test/next-app/components/ui/button';

interface ChatInputProps {
  onSubmit: (message: string) => void;
  placeholder?: string;
  className?: string;
  variant?: 'hero' | 'compact';
}

export function ChatInput({ 
  onSubmit, 
  placeholder = 'How can I help you today?',
  className,
  variant = 'hero'
}: ChatInputProps) {
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (message.trim()) {
      onSubmit(message.trim());
      setMessage('');
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div
      className={cn(
        'relative rounded-xl bg-input border border-border',
        variant === 'hero' && 'w-full max-w-2xl',
        variant === 'compact' && 'w-full',
        className
      )}
    >
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        rows={variant === 'hero' ? 3 : 1}
        className={cn(
          'w-full resize-none bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none',
          variant === 'hero' && 'px-5 py-4 pr-14 text-base',
          variant === 'compact' && 'px-4 py-3 pr-12 text-sm'
        )}
      />
      <Button
        onClick={handleSubmit}
        disabled={!message.trim()}
        className={cn(
          'absolute flex items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:opacity-40 disabled:hover:bg-muted',
          variant === 'hero' && 'bottom-4 right-4 h-10 w-10',
          variant === 'compact' && 'bottom-2.5 right-3 h-8 w-8'
        )}
      >
        <ArrowUp className={cn(variant === 'hero' ? 'h-5 w-5' : 'h-4 w-4')} />
      </Button>
    </div>
  );
}
