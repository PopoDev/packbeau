import Navbar from "@/components/sections/navbar";
import Hero from "@/components/sections/hero";
import Items from "@/components/sections/items";
import Bento from "@/components/sections/bento";
import CTA from "@/components/sections/cta";
import Pricing from "@/components/sections/pricing";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <Navbar />
      <Hero />
      <Items />
      <Bento />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
