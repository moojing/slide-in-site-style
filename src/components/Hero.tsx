import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Make a friend that makes your day
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          Match, Meet, Make Your Day Unforgettable.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="outline" 
            size="lg"
            className="border-white text-white hover:bg-white hover:text-background min-w-40"
          >
            Contact Us
          </Button>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground min-w-40"
          >
            Make a Friend
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;