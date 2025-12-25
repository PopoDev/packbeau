"use client";

import { useRouter } from "next/navigation";
import { useMemo } from "react";
import { useThreadStore } from "@/store/thread";
import { ChatInput } from "@/components/ChatInput";

// Generate random bubble configurations
function generateBubbles(count: number) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 2, // 2-8px
    left: Math.random() * 100, // 0-100%
    delay: Math.random() * 10, // 0-10s delay
    duration: Math.random() * 10 + 10, // 10-20s
    opacity: Math.random() * 0.4 + 0.2, // 0.2-0.6
  }));
}

// Generate random star configurations
function generateStars(count: number) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Math.random() * 2 + 1, // 1-3px
    left: Math.random() * 100, // 0-100%
    top: Math.random() * 30, // Only in top 30%
    delay: Math.random() * 5, // 0-5s delay
    duration: Math.random() * 2 + 2, // 2-4s twinkle
    opacity: Math.random() * 0.7 + 0.3, // 0.3-1.0
  }));
}

export default function Home() {
  const router = useRouter();
  const createThread = useThreadStore((state) => state.createThread);

  // Memoize bubble and star configurations
  const bubbles = useMemo(() => generateBubbles(45), []);
  const stars = useMemo(() => generateStars(80), []);

  const handleSubmit = (message: string) => {
    const threadId = createThread(message);
    router.push(`/projects/${threadId}`);
  };

  return (
    <div className="relative min-h-screen overflow-hidden ocean-gradient">
      {/* Stars - Night Sky */}
      <div className="absolute inset-0 pointer-events-none z-[5]">
        {stars.map((star) => (
          <div
            key={`star-${star.id}`}
            className="star"
            style={{
              width: star.size,
              height: star.size,
              left: `${star.left}%`,
              top: `${star.top}%`,
              opacity: star.opacity,
              animation: `star-twinkle ${star.duration}s ease-in-out infinite`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Animated Bubbles - Ocean Feel */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {bubbles.map((bubble) => (
          <div
            key={`bubble-${bubble.id}`}
            className="bubble"
            style={{
              width: bubble.size,
              height: bubble.size,
              left: `${bubble.left}%`,
              bottom: "-10px",
              opacity: bubble.opacity,
              animation: `bubble-float ${bubble.duration}s ease-in-out infinite`,
              animationDelay: `${bubble.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Spotlight Overlay */}
      <div className="absolute inset-0 spotlight z-[15]" />

      {/* Wave Glow at Bottom */}
      <div className="wave-container z-[8]">
        <div className="wave" />
      </div>

      {/* Grain Texture */}
      <div className="grain-overlay" />

      <div className="relative z-30 flex min-h-screen flex-col items-center justify-center px-4 sm:px-8 lg:px-16">
        <h1 className="mb-10 text-3xl sm:text-4xl lg:text-5xl font-medium text-white tracking-tight text-center">
          Time to ship, captain.
        </h1>

        <ChatInput onSubmit={handleSubmit} />
      </div>
    </div>
  );
}
