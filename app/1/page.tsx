import { Send, Layout, Sparkles, Zap, ArrowRight, MessageSquare } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Sparkles className="text-primary-foreground w-5 h-5" />
          </div>
          <span className="text-xl font-bold tracking-tight">lovable.design</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">Pricing</a>
          <a href="#" className="hover:text-foreground transition-colors">Explore</a>
          <a href="#" className="hover:text-foreground transition-colors">Blog</a>
          <button className="bg-primary text-primary-foreground px-5 py-2 rounded-full font-semibold hover:opacity-90 transition-all shadow-md">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-6 overflow-hidden">
        {/* Abstract background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(circle_at_center,var(--color-primary)_0%,transparent_70%)] opacity-5 -z-10" />
        
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-medium mb-6 border border-border">
            <span className="bg-primary text-white px-2 py-0.5 rounded-full text-[10px]">NEW</span>
            Introducing Export to Anything
            <ArrowRight size={14} />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Design mobile apps <span className="text-primary italic">in minutes</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Go from idea to beautiful app mockups in minutes by chatting with AI. 
            No design skills required, just your imagination.
          </p>

          {/* Sleek Chat Input */}
          <div className="relative max-w-2xl mx-auto group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/0 rounded-[2rem] blur opacity-25 group-focus-within:opacity-50 transition duration-1000"></div>
            <div className="relative flex items-center bg-card border border-border rounded-2xl p-2 shadow-xl">
              <div className="pl-4 text-muted-foreground">
                <MessageSquare size={20} />
              </div>
              <input 
                type="text" 
                placeholder="I want to design an app that..." 
                className="w-full bg-transparent border-none focus:ring-0 px-4 py-4 text-lg outline-none"
              />
              <button className="bg-primary text-primary-foreground flex items-center gap-2 px-6 py-3 rounded-xl font-bold hover:gap-3 transition-all">
                Design it <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section className="py-20 bg-secondary/30 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Explore templates</h2>
              <p className="text-muted-foreground">Customize beautiful pre-built app design templates.</p>
            </div>
            <button className="text-primary font-semibold flex items-center gap-1 hover:underline">
              View all <ArrowRight size={18} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Health Tracker', tag: 'Neo-Brutalism', icon: 'heart' },
              { title: 'Crypto Wallet', tag: 'Glassmorphism', icon: 'wallet' },
              { title: 'Pet Manager', tag: 'Playful Whimsical', icon: 'dog' },
              { title: 'Stopwatch & Timer', tag: 'Swiss Style', icon: 'timer' },
            ].map((card, i) => (
              <div key={i} className="group bg-card border border-border p-5 rounded-2xl hover:shadow-lg transition-all cursor-pointer">
                <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Layout className="text-primary w-5 h-5" />
                </div>
                <h3 className="font-bold mb-1">{card.title}</h3>
                <span className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground bg-muted px-2 py-0.5 rounded">
                  {card.tag}
                </span>
                <p className="text-sm text-muted-foreground mt-4 line-clamp-2">
                  A high-fidelity layout optimized for {card.title.toLowerCase()} use cases.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">How it works</h2>
            <p className="text-muted-foreground">Three steps to launch your dream app.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-16 relative">
            {/* Connecting lines for desktop */}
            <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-[2px] bg-border -z-10" />
            
            {[
              { 
                step: '01', 
                title: 'Describe', 
                desc: 'Type your app idea in plain English. Describe the features and the vibe you want.',
                icon: <MessageSquare className="text-primary" />
              },
              { 
                step: '02', 
                title: 'Generate', 
                desc: 'Our AI engine builds high-fidelity components and screens in seconds.',
                icon: <Zap className="text-primary" />
              },
              { 
                step: '03', 
                title: 'Refine', 
                desc: 'Fine-tune the results by chatting more or using our visual editor to perfect every pixel.',
                icon: <Sparkles className="text-primary" />
              }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-card border-4 border-background outline outline-1 outline-border rounded-full flex items-center justify-center mb-6 shadow-md relative">
                  <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center">
                    {item.step}
                  </div>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-primary/20 rounded flex items-center justify-center">
              <Sparkles className="text-primary w-4 h-4" />
            </div>
            <span className="font-bold">lovable.design</span>
          </div>
          <p className="text-muted-foreground text-sm">© 2024 Lovable AI. Purely intuitive design.</p>
          <div className="flex gap-6 text-sm font-medium">
            <a href="#" className="hover:text-primary">Twitter</a>
            <a href="#" className="hover:text-primary">LinkedIn</a>
            <a href="#" className="hover:text-primary">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;