"use client";

import { useState } from "react";
import type { Message } from "@/store/thread";
import { ThinkingState } from "./ThinkingState";
import { MarkdownRenderer } from "./MarkdownRenderer";
import { Copy, CircleCheck, Check } from "lucide-react";
import { Button } from "./ui/button";

interface ChatMessageProps {
  message: Message;
}

function TasksList({ badges }: { badges: { type: string; label: string }[] }) {
  return (
    <div className="rounded-xl border border-border bg-muted p-3 space-y-2">
      <div className="text-xs font-medium text-muted-foreground mb-2">
        Tasks
      </div>
      {badges.map((badge, index) => (
        <div key={index} className="flex items-center gap-2 text-xs">
          <CircleCheck className="h-3.5 w-3.5 text-primary" />
          <span>{badge.label}</span>
        </div>
      ))}
    </div>
  );
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user";
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(message.content);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  if (isUser) {
    return (
      <div className="flex w-full justify-end group">
        <div className="relative max-w-[85%]">
          <Button
            size="icon-xs"
            variant="ghost"
            onClick={handleCopy}
            className="absolute right-0 -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Copy message"
          >
            {isCopied ? (
              <Check className="h-4 w-4" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>

          <div className="rounded-lg px-4 py-2.5 text-sm bg-muted border">
            <p className="whitespace-pre-wrap leading-relaxed">
              {message.content}
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Assistant message
  return (
    <div className="flex w-full justify-start">
      <div className="max-w-[90%] space-y-3">
        {message.thinkingText && (
          <ThinkingState
            text={message.thinkingText}
            isThinking={message.isThinking ?? false}
            defaultExpanded={message.isThinking}
          />
        )}

        {message.content && !message.isThinking && (
          <div className="text-sm leading-relaxed">
            <MarkdownRenderer content={message.content} />
          </div>
        )}

        {message.actionBadges &&
          message.actionBadges.length > 0 &&
          !message.isThinking && <TasksList badges={message.actionBadges} />}
      </div>
    </div>
  );
}
