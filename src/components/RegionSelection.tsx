import type { RegionGroup } from "@/data/profiles";
import {
  REGION_GROUPS,
  getRegions,
  getSelectedRegion,
  setSelectedRegion as setSelectedRegionLS,
} from "@/data/profiles";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";

const RegionSelection = () => {
  const navigate = useNavigate();
  const [selectedRegion, setSelectedRegion] = useState<string>(
    getSelectedRegion() || ""
  );
  const [availableRegions] = useState<string[]>(() => getRegions());

  const regionGroups = useMemo<RegionGroup[]>(() => {
    const regionSet = new Set(availableRegions);
    const used = new Set<string>();

    const baseGroups = REGION_GROUPS.map((group) => {
      const cities = group.cities.filter((city) => {
        if (regionSet.has(city)) {
          used.add(city);
          return true;
        }
        return false;
      });
      return { country: group.country, cities };
    }).filter((group) => group.cities.length > 0);

    const unmatched = availableRegions.filter((city) => !used.has(city));
    if (unmatched.length > 0) {
      baseGroups.push({ country: "Other Regions", cities: unmatched });
    }

    return baseGroups;
  }, [availableRegions]);

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
            Explore Asia by City
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pick a country and discover popular cities to meet your next companion
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
              <SelectValue placeholder="Select a city" />
            </SelectTrigger>
            <SelectContent>
              {regionGroups.map((group, index) => (
                <SelectGroup key={group.country}>
                  <SelectLabel className="flex items-center gap-2 py-3 pl-6 pr-4 text-base font-semibold text-muted-foreground">
                    {group.country}
                  </SelectLabel>
                  {group.cities.map((city) => (
                    <SelectItem key={city} value={city} className="pl-8 text-base">
                      {city}
                    </SelectItem>
                  ))}
                  {index < regionGroups.length - 1 && <SelectSeparator />}
                </SelectGroup>
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
