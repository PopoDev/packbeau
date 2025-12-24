"use client";

import React, { useState } from 'react';
import { ChevronRight, Check, Menu, X, Layers, Zap, Shield, Smartphone } from 'lucide-react';

const SleekLandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
              <Layers className="text-primary-foreground w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tight">Sleek</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Features</a>
            <a href="#solutions" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Solutions</a>
            <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Pricing</a>
            <button className="bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-medium shadow-md hover:opacity-90 transition-all">
              Get Started
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium mb-6 border border-border">
            <span className="bg-primary w-2 h-2 rounded-full animate-pulse"></span>
            v2.0 is now live
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
            Build faster with <span className="text-primary">intelligent</span> design.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            The modern standard for high-performance teams. Deploy beautiful interfaces in minutes, not months, with our pre-built component ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
              Start Building Free <ChevronRight size={18} />
            </button>
            <button className="w-full sm:w-auto bg-background border border-border px-8 py-4 rounded-xl font-semibold hover:bg-secondary transition-all">
              View Documentation
            </button>
          </div>

          {/* Product Mockup Placeholder */}
          <div className="mt-20 relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-blue-400/20 rounded-[var(--radius-xl)] blur-2xl"></div>
            <div className="relative bg-card border border-border rounded-[var(--radius-xl)] shadow-2xl overflow-hidden aspect-video flex items-center justify-center">
               <div className="grid grid-cols-12 gap-4 w-full h-full p-4">
                  <div className="col-span-3 bg-secondary/50 rounded-lg animate-pulse"></div>
                  <div className="col-span-9 space-y-4">
                     <div className="h-12 bg-secondary/50 rounded-lg w-3/4 animate-pulse"></div>
                     <div className="h-64 bg-secondary/30 rounded-lg animate-pulse"></div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 border-y border-border bg-secondary/30">
        <div className="container mx-auto px-6">
          <p className="text-center text-sm font-medium text-muted-foreground mb-8">TRUSTED BY INNOVATIVE TEAMS WORLDWIDE</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale">
            <span className="text-2xl font-bold">VERTEX</span>
            <span className="text-2xl font-bold">GLOBO</span>
            <span className="text-2xl font-bold">PHASE</span>
            <span className="text-2xl font-bold">LUMOS</span>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 px-6">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need to scale</h2>
            <p className="text-muted-foreground">Focus on your business logic while we handle the heavy lifting of UI consistency and performance.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Zap className="text-primary" />, title: "Instant Performance", desc: "Optimized for Core Web Vitals out of the box with zero configuration." },
              { icon: <Shield className="text-primary" />, title: "Secure by Default", desc: "Enterprise-grade security protocols integrated into every component." },
              { icon: <Smartphone className="text-primary" />, title: "Fully Responsive", desc: "Fluid layouts that look stunning on everything from mobile to 4K." }
            ].map((feature, i) => (
              <div key={i} className="p-8 rounded-[var(--radius-lg)] border border-border bg-card shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="bg-primary rounded-[var(--radius-xl)] p-12 text-center text-primary-foreground relative overflow-hidden shadow-xl">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent)]"></div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">Ready to transform your workflow?</h2>
            <p className="text-primary-foreground/80 mb-10 max-w-xl mx-auto relative z-10">
              Join over 10,000 developers building the future on Sleek.
            </p>
            <button className="bg-primary-foreground text-primary px-10 py-4 rounded-xl font-bold shadow-lg hover:scale-105 transition-transform relative z-10">
              Get Started for Free
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                <Layers className="text-primary-foreground w-4 h-4" />
              </div>
              <span className="font-bold">Sleek</span>
            </div>
            <p className="text-sm text-muted-foreground">© 2024 Sleek Labs Inc. All rights reserved.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary">Features</a></li>
              <li><a href="#" className="hover:text-primary">Integrations</a></li>
              <li><a href="#" className="hover:text-primary">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary">About Us</a></li>
              <li><a href="#" className="hover:text-primary">Careers</a></li>
              <li><a href="#" className="hover:text-primary">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary">Privacy</a></li>
              <li><a href="#" className="hover:text-primary">Terms</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SleekLandingPage;