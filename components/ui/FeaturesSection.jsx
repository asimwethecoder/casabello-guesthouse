import { RoomsSection } from "@/components/ui/RoomsSection";
import { TestimonialsSection } from "@/components/ui/TestimonialsSection";
import { AttractionsSection } from "@/components/ui/AttractionsSection";
import { Footer } from "@/components/ui/Footer";
import { Header } from "@/components/ui/Header";
import { HeroSection } from "@/components/ui/HeroSection";
import { FeaturesSection } from "@/components/ui/FeaturesSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <RoomsSection />
        <TestimonialsSection />
        <AttractionsSection />
      </main>
      <Footer />
    </div>
  );
}
