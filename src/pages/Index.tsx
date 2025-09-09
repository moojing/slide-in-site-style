import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import RegionSelection from "@/components/RegionSelection";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <RegionSelection />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default Index;
