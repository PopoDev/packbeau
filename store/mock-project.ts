import { GeneratedProject } from '@/types/project';

/**
 * Mock generated project data
 */
export const MOCK_PROJECT: GeneratedProject = {
  components: {
    Header: `import React from 'react';

export function Header() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl">
      <div className="liquid-glass rounded-full px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-lg tracking-tight">
          <div className="w-6 h-6 bg-primary rounded-md"></div>
          Aura AI
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium opacity-70">
          <a href="#features" className="hover:opacity-100 transition-opacity">Features</a>
          <a href="#showcase" className="hover:opacity-100 transition-opacity">Showcase</a>
          <a href="#pricing" className="hover:opacity-100 transition-opacity">Pricing</a>
        </div>
        <button className="bg-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-all shadow-md active:scale-95">
          Get Started
        </button>
      </div>
    </nav>
  );
}`,

    Hero: `import React from 'react';

export function Hero() {
  return (
    <section className="relative pt-40 pb-20 px-6 text-center max-w-4xl mx-auto animate-slide-up">
      <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase bg-primary/10 text-primary rounded-full">
        The Future of Web Design
      </span>
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
        Design mobile apps <span className="text-primary">in minutes.</span>
      </h1>
      <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
        Go from a simple text prompt to a beautiful, high-fidelity website mockup instantly. Built for the next generation of digital creators.
      </p>
      <div className="relative max-w-2xl mx-auto group">
        <div className="liquid-glass rounded-2xl p-2 flex items-center shadow-xl group-focus-within:ring-2 ring-primary/20 transition-all">
          <input
            type="text"
            placeholder="I want to design a modern SaaS landing page..."
            className="w-full bg-transparent px-6 py-4 outline-none text-lg"
          />
          <button className="bg-primary text-primary-foreground p-3 rounded-xl hover:opacity-90 transition-all shadow-lg active:scale-90">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </button>
        </div>
        <p className="mt-4 text-xs text-muted-foreground font-medium">Try: "A minimal crypto wallet dashboard"</p>
      </div>
    </section>
  );
}`,

    TrustedBy: `import React from 'react';

export function TrustedBy() {
  return (
    <section className="py-12 border-y border-border bg-muted/30">
      <div className="max-w-6xl mx-auto px-6 overflow-hidden">
        <p className="text-center text-xs font-bold text-muted-foreground uppercase tracking-widest mb-10">
          Trusted by the world's most innovative teams
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale">
          <span className="text-2xl font-bold">VERTEX</span>
          <span className="text-2xl font-bold">QUANTUM</span>
          <span className="text-2xl font-bold">LINEAR</span>
          <span className="text-2xl font-bold">SPHERE</span>
          <span className="text-2xl font-bold">VELOCITY</span>
        </div>
      </div>
    </section>
  );
}`,

    Features: `import React from 'react';

export function Features() {
  const features = [
    {
      title: "Instant Layouts",
      description: "AI-driven structures that follow modern conversion psychology out of the box.",
      highlight: false,
    },
    {
      title: "Asset Generation",
      description: "Automated copy, icons, and illustrations tailored specifically to your brand voice.",
      highlight: true,
    },
    {
      title: "Shadcn Logic",
      description: "Export production-ready components that fit perfectly into your tech stack.",
      highlight: false,
    },
  ];

  return (
    <section id="features" className="py-24 px-6 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-16">Everything you need to ship.</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bento-card liquid-glass p-8 rounded-xl text-center"
          >
            <div className={"w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-6 " + (feature.highlight ? "bg-primary" : "bg-primary/10")}>
              <svg className={"w-5 h-5 " + (feature.highlight ? "text-primary-foreground" : "text-primary")} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}`,

    Showcase: `import React from 'react';

export function Showcase() {
  const projects = [
    {
      title: "Neo-Banking Dashboard",
      category: "Fintech Platform",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "Mindfulness App UI",
      category: "Healthcare",
      image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=1000",
    },
  ];

  return (
    <section id="showcase" className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Built with Aura</h2>
        <p className="text-muted-foreground mb-16">High-fidelity results generated in under 60 seconds.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden shadow-2xl transition-transform hover:scale-[1.02]"
            >
              <img src={project.image} className="w-full h-80 object-cover" alt={project.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8 text-white text-left">
                <div>
                  <p className="text-sm font-medium opacity-70">{project.category}</p>
                  <h4 className="text-xl font-bold">{project.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}`,

    Pricing: `import React from 'react';

export function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      features: ["3 Projects per month", "Basic AI Components", "PNG Exports"],
      cta: "Get Started",
      highlight: false,
    },
    {
      name: "Pro",
      price: "$19",
      features: ["Unlimited Projects", "Full Code Exports", "Advanced Shaders & Animation"],
      cta: "Go Pro Now",
      highlight: true,
      badge: "Most Popular",
    },
  ];

  return (
    <section id="pricing" className="py-24 px-6 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">Simple, transparent pricing.</h2>
      <p className="text-muted-foreground mb-16">Start for free, upgrade when you're ready to scale.</p>
      <div className="grid md:grid-cols-2 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={"p-8 rounded-xl text-center bg-card shadow-sm relative overflow-hidden " + (plan.highlight ? "border-2 border-primary shadow-xl" : "border border-border")}
          >
            {plan.badge && (
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-[10px] px-3 py-1 font-bold uppercase tracking-widest">
                {plan.badge}
              </div>
            )}
            <h3 className="font-bold text-lg mb-2">{plan.name}</h3>
            <div className="text-4xl font-bold mb-6">
              {plan.price} <span className="text-sm font-normal text-muted-foreground">/mo</span>
            </div>
            <ul className="text-sm space-y-4 mb-8 text-muted-foreground">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <button
              className={"w-full py-3 rounded-full font-semibold transition-all " + (plan.highlight ? "bg-primary text-primary-foreground hover:opacity-90 shadow-lg" : "border border-border hover:bg-muted")}
            >
              {plan.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}`,

    Footer: `import React from 'react';

export function Footer() {
  return (
    <footer className="py-20 border-t border-border text-center">
      <div className="flex items-center justify-center gap-2 font-bold text-xl mb-8">
        <div className="w-8 h-8 bg-primary rounded-md"></div>
        Aura AI
      </div>
      <p className="text-muted-foreground text-sm mb-8">© 2025 Aura Design Lab. All rights reserved.</p>
      <div className="flex justify-center gap-6 text-muted-foreground">
        <a href="#" className="hover:text-primary transition-colors">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
          </svg>
        </a>
        <a href="#" className="hover:text-primary transition-colors">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
        <a href="#" className="hover:text-primary transition-colors">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
      </div>
    </footer>
  );
}`,
  },

  style: `:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --primary: oklch(0.623 0.214 259.815);
  --primary-foreground: oklch(0.985 0 0);
  --card: oklch(1 0 0 / 0.8);
  --border: oklch(0.922 0 0);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --radius: 0.625rem;
}

body {
  font-family: 'Inter', sans-serif;
  background-color: var(--background);
  color: var(--foreground);
  overflow-x: hidden;
}

.bg-background { background-color: var(--background); }
.bg-foreground { background-color: var(--foreground); }
.bg-primary { background-color: var(--primary); }
.bg-primary\\/10 { background-color: oklch(0.623 0.214 259.815 / 0.1); }
.bg-card { background-color: var(--card); }
.bg-muted { background-color: var(--muted); }
.bg-muted\\/30 { background-color: oklch(0.97 0 0 / 0.3); }

.text-foreground { color: var(--foreground); }
.text-primary { color: var(--primary); }
.text-primary-foreground { color: var(--primary-foreground); }
.text-muted-foreground { color: var(--muted-foreground); }

.border-border { border-color: var(--border); }
.border-primary { border-color: var(--primary); }

.ring-primary\\/20 { --tw-ring-color: oklch(0.623 0.214 259.815 / 0.2); }

.liquid-glass {
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(12px) saturate(180%);
  border: 1px solid oklch(0.922 0 0 / 0.5);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.07);
}

.hero-glow {
  position: absolute;
  top: -10%;
  left: 50%;
  transform: translateX(-50%);
  width: 80vw;
  height: 60vh;
  background: radial-gradient(circle, oklch(0.623 0.214 259.815 / 0.15) 0%, transparent 70%);
  z-index: -1;
  filter: blur(60px);
}

.bento-card {
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.bento-card:hover {
  transform: translateY(-5px);
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-slide-up {
  animation: slideUp 0.8s ease-out forwards;
}`,

  app: `import React from 'react';
import { Header } from './Header';
import { Hero } from './Hero';
import { TrustedBy } from './TrustedBy';
import { Features } from './Features';
import { Showcase } from './Showcase';
import { Pricing } from './Pricing';
import { Footer } from './Footer';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <div className="hero-glow" />
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustedBy />
        <Features />
        <Showcase />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}`,
};
