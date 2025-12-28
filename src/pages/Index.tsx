import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { PopularRoutes } from "@/components/PopularRoutes";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <PopularRoutes />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
