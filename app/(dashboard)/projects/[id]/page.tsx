"use client";

import { useEffect, useRef, useState } from "react";
import { ChatInput } from "@/components/ChatInput";
import { ChatMessage } from "@/components/ChatMessage";
import { CodePreview } from "@/components/CodePreview";
import { useThreadStore } from "@/store/thread";
import { useParams, redirect, useRouter } from "next/navigation";
import { Home, Pencil, ChevronDown, Zap } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

// Mock credits data for MVP
const MOCK_CREDITS = { used: 5, total: 10 };

function CreditsProgressBar() {
  const { used, total } = MOCK_CREDITS;
  const remaining = total - used;
  const percentage = (remaining / total) * 100;

  return (
    <div className="px-3 py-3">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Zap className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium">Credits</span>
        </div>
        <span className="text-xs text-muted-foreground">{remaining} left</span>
      </div>
      <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
        <div
          className="h-full rounded-full bg-primary transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

export default function ProjectPage() {
  const params = useParams();
  const router = useRouter();
  const threadId = params.id as string;
  const thread = useThreadStore((state) => state.getThread(threadId || ""));
  const addMessage = useThreadStore((state) => state.addMessage);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isRenaming, setIsRenaming] = useState(false);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [thread?.messages]);

  if (!thread) {
    return redirect("/");
  }

  const handleSubmit = (message: string) => {
    addMessage(thread.id, "user", message);
  };

  const handleGoHome = () => {
    router.push("/home");
  };

  const handleRename = () => {
    // Placeholder for MVP - will be implemented later
    setIsRenaming(true);
    setTimeout(() => setIsRenaming(false), 1500);
  };

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Conversation Panel */}
      <div className="relative flex w-full min-w-sm lg:w-[30%] lg:flex-shrink-0 flex-col border-r border-border bg-card">
        <div className="flex items-center p-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="gap-2 -ml-2">
                <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-primary">
                  <span className="text-xs font-semibold text-primary-foreground">
                    P
                  </span>
                </div>
                <span className="font-medium text-sm truncate max-w-[200px]">
                  {thread.title}
                </span>
                <ChevronDown className="h-4 w-4 text-muted-foreground ml-auto" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-64">
              <CreditsProgressBar />
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleGoHome}>
                <Home className="h-4 w-4" />
                <span>Go to Home</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleRename}>
                <Pencil className="h-4 w-4" />
                <span>{isRenaming ? "Renaming..." : "Rename project"}</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-auto px-6 py-6">
          <div className="flex flex-col gap-6">
            {thread.messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Chat Input */}
        <div className="p-4 border-t border-border">
          <ChatInput
            onSubmit={handleSubmit}
            placeholder="Send a message..."
            variant="compact"
          />
        </div>
      </div>

      {/* Preview Panel */}
      <div className="flex flex-1 min-w-0 flex-col p-4 bg-background">
        <CodePreview code={thread.generatedCode} />
      </div>
    </div>
  );
}
