'use client';

import { FileCode2 } from 'lucide-react';
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
    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-primary/10 border border-primary/20 text-xs font-medium text-primary">
      <Icon className="h-3 w-3" />
      <span>{badge.label}</span>
    </div>
  );
}

