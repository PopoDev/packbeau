"use client";

import { useCallback } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { TAILWIND_PALETTE } from "@/utils/color";

type ColorSelectorPopoverProps = {
  label: string;
  currentColor: string;
  onChange: (color: string) => void;
};

export function ColorSelectorPopover({
  label,
  currentColor,
  onChange,
}: ColorSelectorPopoverProps) {
  const handleColorSelect = useCallback(
    (color: string) => {
      onChange(color);
    },
    [onChange]
  );

  const isColorSelected = useCallback(
    (color: string) => {
      return currentColor === color;
    },
    [currentColor]
  );

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          aria-label="Select theme"
          variant="secondary"
          className="flex items-center gap-2 p-5"
        >
          <ColorSwatch
            color={currentColor}
            name={label}
            isSelected={true}
            size="sm"
          />
          <span className="font-medium text-muted-foreground">{label}</span>
        </Button>
      </PopoverTrigger>

      <PopoverContent
        className="size-auto gap-0 overflow-hidden p-0"
        align="end"
      >
        <div className="my-0 w-full">
          <ScrollArea className="h-84 w-full">
            <div className="flex flex-col gap-0.5 p-1">
              {Object.entries(TAILWIND_PALETTE).map(([key, colors]) => {
                return (
                  <div key={key} className="flex gap-0.5">
                    {Object.entries(colors).map(([shade, color]) => {
                      return (
                        <ColorSwatch
                          key={`${key}-${shade}`}
                          name={`${key}-${shade}`}
                          color={color}
                          isSelected={isColorSelected(color)}
                          onClick={() => handleColorSelect(color)}
                          className="rounded-none"
                          size="md"
                        />
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </ScrollArea>
        </div>
      </PopoverContent>
    </Popover>
  );
}

interface ColorSwatchProps extends React.HTMLAttributes<HTMLButtonElement> {
  isSelected: boolean;
  color: string;
  name: string;
  size?: "sm" | "md" | "lg";
}

function ColorSwatch({
  color,
  name,
  className,
  isSelected,
  size = "sm",
  ...props
}: ColorSwatchProps) {
  const sizeClasses = {
    sm: "size-4",
    md: "size-6",
    lg: "size-8",
  };
  return (
    <button
      aria-label={`Select color ${name}`}
      title={name}
      className={cn(
        "group relative cursor-pointer rounded-sm border bg-(--color) transition-all hover:z-10 hover:scale-110 hover:shadow-lg",
        sizeClasses[size],
        isSelected && "ring-2 ring-(--color)",
        className
      )}
      style={{ "--color": color } as React.CSSProperties}
      {...props}
    >
      <div className="group-hover:ring-foreground/50 absolute inset-0 rounded-[inherit] ring-2 ring-transparent transition-all duration-200" />
    </button>
  );
}
