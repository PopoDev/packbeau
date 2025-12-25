import { cn } from '@/lib/utils';
import type { Message } from '@/store/thread';
import { ThinkingState } from './ThinkingState';
import { ActionBadge } from './ActionBadge';
import { MarkdownRenderer } from './MarkdownRenderer';

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user';

  if (isUser) {
    return (
      <div className="flex w-full justify-end">
        <div
          className={cn(
            'max-w-[85%] rounded-2xl px-4 py-3 text-sm',
            'bg-white/[0.08] backdrop-blur-sm',
            'border border-white/[0.15]',
            'text-white'
          )}
        >
          <p className="whitespace-pre-wrap leading-relaxed">{message.content}</p>
        </div>
      </div>
    );
  }

  // Assistant message
  return (
    <div className="flex w-full justify-start">
      <div className="max-w-[85%] space-y-3">
        {/* Thinking State */}
        {message.thinkingText && (
          <ThinkingState
            text={message.thinkingText}
            isThinking={message.isThinking ?? false}
            defaultExpanded={message.isThinking}
          />
        )}

        {/* Main content - only show when not actively thinking */}
        {message.content && !message.isThinking && (
          <div className="text-sm text-white leading-relaxed">
            <MarkdownRenderer content={message.content} />
          </div>
        )}

        {/* Action Badges */}
        {message.actionBadges && message.actionBadges.length > 0 && !message.isThinking && (
          <div className="flex flex-wrap gap-2 mt-3">
            {message.actionBadges.map((badge, index) => (
              <ActionBadge key={index} badge={badge} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
