import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import FindMatch from "@/components/FindMatch";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <HowItWorks />
      <FindMatch />
      <Footer />
    </div>
  );
};

export default Index;
