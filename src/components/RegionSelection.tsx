import {
  getRegions,
  getSelectedRegion,
  setSelectedRegion as setSelectedRegionLS,
} from "@/data/profiles";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const RegionSelection = () => {
  const navigate = useNavigate();
  const [selectedRegion, setSelectedRegion] = useState<string>(
    getSelectedRegion() || ""
  );

  const handleRegionSelect = (region: string) => {
    setSelectedRegion(region);
    setSelectedRegionLS(region);
  };

  const handleContinue = () => {
    if (selectedRegion) {
      setSelectedRegionLS(selectedRegion);
      navigate(`/gender/${selectedRegion}`);
    }
  };

  return (
    <section id="region-selection" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Select Your Region
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose your preferred location to find companions
          </p>
        </div>

        <div className="max-w-md mx-auto space-y-6">
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 rounded-full bg-primary/10">
              <MapPin className="w-8 h-8 text-primary" />
            </div>
          </div>

          <Select onValueChange={handleRegionSelect} value={selectedRegion}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a region" />
            </SelectTrigger>
            <SelectContent>
              {getRegions().map((region) => (
                <SelectItem key={region} value={region}>
                  {region}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button
            onClick={handleContinue}
            disabled={!selectedRegion}
            className="w-full"
            size="lg"
          >
            Continue
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RegionSelection;
