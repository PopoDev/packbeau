'use client';

import { useState } from 'react';
import { Sparkles, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ThinkingStateProps {
  text: string;
  isThinking: boolean;
  defaultExpanded?: boolean;
}

export function ThinkingState({ text, isThinking, defaultExpanded = false }: ThinkingStateProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded || isThinking);

  return (
    <div className="mb-3">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={cn(
          'flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200',
          'bg-white/[0.04] hover:bg-white/[0.08]',
          'text-sm text-muted-foreground'
        )}
      >
        <Sparkles 
          className={cn(
            'h-4 w-4',
            isThinking && 'animate-pulse text-primary'
          )} 
        />
        <span className="font-medium">
          {isThinking ? text : 'Thought for a moment'}
        </span>
        <ChevronDown 
          className={cn(
            'h-4 w-4 ml-auto transition-transform duration-200',
            isExpanded && 'rotate-180'
          )}
        />
      </button>
      
      <div
        className={cn(
          'overflow-hidden transition-all duration-200 ease-out',
          isExpanded ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="px-3 py-2 text-sm text-muted-foreground/70">
          {text}
        </div>
      </div>
    </div>
  );
}

