"use client";

import { useState, KeyboardEvent } from "react";
import { ArrowUp, Sun, Moon, Check, Sparkles, Ban } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverHeader,
  PopoverTitle,
  PopoverDescription,
} from "./ui/popover";
import { TAILWIND_PALETTE } from "@/utils/color";
import { Button } from "@/components/ui/button";

interface ChatInputProps {
  onSubmit: (message: string) => void;
  placeholder?: string;
  variant?: "default" | "compact";
}

export function ChatInput({
  onSubmit,
  placeholder = "Ask Packbeau to create a web app that...",
  variant = "default",
}: ChatInputProps) {
  const [message, setMessage] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = () => {
    if (message.trim()) {
      onSubmit(message.trim());
      setMessage("");
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const isCompact = variant === "compact";

  return (
    <div
      className={cn(
        "relative w-full rounded-2xl p-3 border transition-all",
        isFocused ? "bg-input border-ring" : "bg-muted border-border",
        !isCompact && "max-w-2xl glass-morphism"
      )}
    >
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        rows={isCompact ? 1 : 3}
        className={cn(
          "w-full resize-none bg-transparent text-foreground focus:outline-none",
          "p-2 text-base leading-relaxed",
          isCompact ? "min-h-[40px]" : "min-h-[100px]"
        )}
      />

      <div className="flex items-center justify-between w-full mt-1">
        {!isCompact && <ChatControls />}
        {isCompact && <div />}
        <Button
          onClick={handleSubmit}
          disabled={!message.trim()}
          aria-label="Send message"
          className={cn(
            "flex items-center justify-center rounded-full border",
            "transition-all duration-200 ease-out",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            isCompact ? "h-8 w-8" : "h-10 w-10",
            message.trim()
              ? "bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 text-white hover:scale-110"
              : "bg-background"
          )}
        >
          <ArrowUp
            className={cn(isCompact ? "h-4 w-4" : "h-5 w-5")}
            strokeWidth={2.5}
          />
        </Button>
      </div>
    </div>
  );
}

function ChatControls() {
  const [selectedColor, setSelectedColor] = useState(
    TAILWIND_PALETTE.blue[500]
  );
  const [animationsEnabled, setAnimationsEnabled] = useState(true);
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  return (
    <div className="flex flex-wrap items-center gap-2">
      {/* Theme Selector Popover */}
      <Popover>
        <PopoverTrigger asChild>
          <Button
            aria-label="Select theme"
            variant="secondary"
            className="flex items-center gap-2 p-5"
          >
            {theme === "dark" ? (
              <Moon className="h-4 w-4 text-muted-foreground" />
            ) : (
              <Sun className="h-4 w-4 text-muted-foreground" />
            )}
            <span className="font-medium text-muted-foreground">Theme</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-64" side="top" align="start">
          <PopoverHeader>
            <PopoverTitle>Theme</PopoverTitle>
            <PopoverDescription>
              Choose your preferred color scheme
            </PopoverDescription>
          </PopoverHeader>
          <div className="flex flex-col gap-2">
            <button
              onClick={() => setTheme("light")}
              className={cn(
                "flex items-center gap-3 p-3 rounded-lg border transition-all",
                theme === "light"
                  ? "bg-primary/10 border-primary"
                  : "border-border hover:bg-accent"
              )}
            >
              <Sun className="h-5 w-5" />
              <div className="flex-1 text-left">
                <div className="font-medium">Light</div>
                <div className="text-xs text-muted-foreground">
                  Bright and clear
                </div>
              </div>
              {theme === "light" && <Check className="h-4 w-4 text-primary" />}
            </button>
            <button
              onClick={() => setTheme("dark")}
              className={cn(
                "flex items-center gap-3 p-3 rounded-lg border transition-all",
                theme === "dark"
                  ? "bg-primary/10 border-primary"
                  : "border-border hover:bg-accent"
              )}
            >
              <Moon className="h-5 w-5" />
              <div className="flex-1 text-left">
                <div className="font-medium">Dark</div>
                <div className="text-xs text-muted-foreground">
                  Easy on the eyes
                </div>
              </div>
              {theme === "dark" && <Check className="h-4 w-4 text-primary" />}
            </button>
          </div>
        </PopoverContent>
      </Popover>

      {/* Brand Color Picker Popover */}
      {/* <ColorSelectorPopover label="Brand color" currentColor={selectedColor} onChange={setSelectedColor} /> */}
      <Popover>
        <PopoverTrigger asChild>
          <Button
            aria-label="Select brand color"
            variant="secondary"
            className="flex items-center gap-2 p-5"
          >
            <div
              className="w-5 h-5 rounded-md border-2"
              style={{ backgroundColor: selectedColor }}
            />
            <span className="font-medium text-muted-foreground">Brand</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto max-w-md" side="top" align="start">
          <PopoverHeader>
            <PopoverTitle>Brand Color</PopoverTitle>
            <PopoverDescription>
              Select your app&apos;s primary color
            </PopoverDescription>
          </PopoverHeader>
          <div className="grid grid-cols-6 gap-1.5">
            {Object.entries(TAILWIND_PALETTE).map(([colorName, shades]) => {
              const brandShade = (shades as Record<string, string>)["500"];
              return (
                <button
                  key={colorName}
                  onClick={() => setSelectedColor(brandShade)}
                  aria-label={`Select ${colorName}`}
                  title={colorName}
                  className={cn(
                    "relative w-8 h-8 rounded-md border transition-all hover:scale-110 hover:shadow-lg",
                    selectedColor === brandShade
                      ? "ring-2 ring-offset-2 ring-primary"
                      : "border-border hover:border-primary/50"
                  )}
                  style={{ backgroundColor: brandShade }}
                >
                  {selectedColor === brandShade && (
                    <Check className="absolute inset-0 m-auto h-3 w-3 text-white drop-shadow-md" />
                  )}
                </button>
              );
            })}
          </div>
        </PopoverContent>
      </Popover>

      {/* Animations Toggle Popover */}
      <Popover>
        <PopoverTrigger asChild>
          <Button
            aria-label="Animation settings"
            variant="secondary"
            className="flex items-center gap-2 p-5"
          >
            {animationsEnabled ? (
              <Sparkles className="h-4 w-4 text-muted-foreground" />
            ) : (
              <Ban className="h-4 w-4 text-muted-foreground" />
            )}
            <span className="font-medium text-muted-foreground">Motion</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-64" side="top" align="start">
          <PopoverHeader>
            <PopoverTitle>Animations</PopoverTitle>
            <PopoverDescription>
              Control motion and visual effects
            </PopoverDescription>
          </PopoverHeader>
          <div className="flex flex-col gap-2">
            <button
              onClick={() => setAnimationsEnabled(true)}
              className={cn(
                "flex items-center gap-3 p-3 rounded-lg border transition-all",
                animationsEnabled
                  ? "bg-primary/10 border-primary"
                  : "border-border hover:bg-accent"
              )}
            >
              <Sparkles className="h-5 w-5" />
              <div className="flex-1 text-left">
                <div className="font-medium">Enabled</div>
                <div className="text-xs text-muted-foreground">
                  Smooth animations
                </div>
              </div>
              {animationsEnabled && <Check className="h-4 w-4 text-primary" />}
            </button>
            <button
              onClick={() => setAnimationsEnabled(false)}
              className={cn(
                "flex items-center gap-3 p-3 rounded-lg border transition-all",
                !animationsEnabled
                  ? "bg-primary/10 border-primary"
                  : "border-border hover:bg-accent"
              )}
            >
              <Ban className="h-5 w-5" />
              <div className="flex-1 text-left">
                <div className="font-medium">Disabled</div>
                <div className="text-xs text-muted-foreground">
                  Reduce motion
                </div>
              </div>
              {!animationsEnabled && <Check className="h-4 w-4 text-primary" />}
            </button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
