import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProfilesSection from "@/components/ProfilesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <ProfilesSection />
      <Footer />
    </div>
  );
};

export default Index;
