import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  // Create interspersed grid of images for background
  const images = [
    "/lovable-uploads/026a2032-4f2f-453d-9d4e-da108e10d1f6.png",
    "/lovable-uploads/ae3f5fcd-f6e8-40a2-9903-224517228703.png", 
    "/lovable-uploads/2e61fad2-de0e-4225-a7d4-ddb66aba82b7.png",
    "/lovable-uploads/2e61fad2-de0e-4225-a7d4-ddb66aba82b7.png",
    "/lovable-uploads/026a2032-4f2f-453d-9d4e-da108e10d1f6.png",
    "/lovable-uploads/ae3f5fcd-f6e8-40a2-9903-224517228703.png",
    "/lovable-uploads/ae3f5fcd-f6e8-40a2-9903-224517228703.png",
    "/lovable-uploads/2e61fad2-de0e-4225-a7d4-ddb66aba82b7.png",
    "/lovable-uploads/026a2032-4f2f-453d-9d4e-da108e10d1f6.png"
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="grid grid-cols-3 grid-rows-3 gap-2 w-1/2 h-1/2 opacity-30">
          {images.map((image, index) => (
            <div
              key={index}
              className="w-full h-full bg-cover bg-center blur-sm rounded-lg"
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        </div>
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Premium Dating Experience
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          Connect with verified companions across Thailand
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="outline" 
            size="lg"
            className="border-white text-white hover:bg-white hover:text-background min-w-40"
            onClick={() => navigate('/regions')}
          >
            Browse Profiles
          </Button>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground min-w-40"
            onClick={() => navigate('/regions')}
          >
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;