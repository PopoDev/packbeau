'use client';

import { useState } from 'react';
import { Lightbulb, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ThinkingStateProps {
  text: string;
  isThinking: boolean;
  defaultExpanded?: boolean;
}

export function ThinkingState({ text, isThinking, defaultExpanded = false }: ThinkingStateProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded || isThinking);

  return (
    <div>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-accent transition-colors text-xs text-muted-foreground"
      >
        <Lightbulb className="h-3.5 w-3.5" />
        <span className="font-medium">
          {isThinking ? 'Thinking...' : 'Thought for a moment'}
        </span>
        <ChevronRight 
          className={cn(
            'h-3 w-3 transition-transform',
            isExpanded && 'rotate-90'
          )}
        />
      </button>
      
      <div
        className={cn(
          'overflow-hidden transition-all',
          isExpanded ? 'max-h-32 mt-2' : 'max-h-0'
        )}
      >
        <div className="px-3 py-2 text-xs text-muted-foreground leading-relaxed border-l-2 border-border ml-2">
          {text}
        </div>
      </div>
    </div>
  );
}

