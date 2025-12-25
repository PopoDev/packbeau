'use client';

import { FileCode2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { ActionBadge as ActionBadgeType } from '@/store/thread';

interface ActionBadgeProps {
  badge: ActionBadgeType;
}

export function ActionBadge({ badge }: ActionBadgeProps) {
  const iconMap = {
    write: FileCode2,
  };

  const Icon = iconMap[badge.type];

  return (
    <div
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full',
        'bg-primary/10 border border-primary/20',
        'text-xs font-semibold text-primary',
        'animate-in fade-in-0 zoom-in-95 duration-300'
      )}
    >
      <Icon className="h-3 w-3" />
      <span>{badge.label}</span>
    </div>
  );
}

