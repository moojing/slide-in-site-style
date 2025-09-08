import { REGIONS } from "@/data/profiles";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const RegionSelectionPage = () => {
  const navigate = useNavigate();

  const handleRegionSelect = (region: string) => {
    navigate(`/gender/${region}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Select Your Region
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose your preferred location to find companions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {REGIONS.map((region) => (
            <Card 
              key={region} 
              className="cursor-pointer hover:shadows-lg transition-all duration-300 hover:scale-105 bg-card border-border"
              onClick={() => handleRegionSelect(region)}
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-2 p-3 rounded-full bg-primary/10">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-card-foreground">{region}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <Button 
                  variant="outline" 
                  className="w-full group"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRegionSelect(region);
                  }}
                >
                  Select Region
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RegionSelectionPage;