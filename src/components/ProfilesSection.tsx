import { useState, useMemo } from "react";
import { ALL_PROFILES, getRegions, Profile } from "@/data/profiles";
import ProfileCard from "./ProfileCard";
import ProfileModal from "./ProfileModal";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Filter } from "lucide-react";

const ProfilesSection = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>("all");
  const [selectedGender, setSelectedGender] = useState<string>("all");
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProfiles = useMemo(() => {
    return ALL_PROFILES.filter((profile) => {
      const regionMatch =
        selectedRegion === "all" || profile.region === selectedRegion;
      const genderMatch =
        selectedGender === "all" || profile.gender === selectedGender;
      return regionMatch && genderMatch;
    });
  }, [selectedRegion, selectedGender]);

  const handleViewDetails = (profile: Profile) => {
    setSelectedProfile(profile);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProfile(null);
  };

  return (
    <section id="profiles" className="py-12 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Browse Profiles
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find your perfect companion from our verified profiles
          </p>
        </div>

        {/* Filters */}
        <div className="bg-card p-6 rounded-lg mb-8 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-muted-foreground" />
            <h3 className="text-lg font-semibold text-card-foreground">
              Filters
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
            <div>
              <label className="text-sm font-medium text-card-foreground mb-2 block">
                <MapPin className="w-4 h-4 inline mr-1" />
                Region
              </label>
              <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                <SelectTrigger>
                  <SelectValue placeholder="Select region" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Regions</SelectItem>
                  {getRegions().map((region) => (
                    <SelectItem key={region} value={region}>
                      {region}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium text-card-foreground mb-2 block">
                <Users className="w-4 h-4 inline mr-1" />
                Gender
              </label>
              <Select value={selectedGender} onValueChange={setSelectedGender}>
                <SelectTrigger>
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="Female">Female</SelectItem>
                  <SelectItem value="Male">Male</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Badge variant="secondary">
                {filteredProfiles.length} profile
                {filteredProfiles.length !== 1 ? "s" : ""} found
              </Badge>
            </div>
          </div>
        </div>

        {/* Profiles Grid */}
        {filteredProfiles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProfiles.map((profile) => (
              <ProfileCard
                key={profile.id}
                profile={profile}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-muted-foreground text-lg">
              No profiles found matching your criteria.
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Try adjusting your filters to see more results.
            </p>
          </div>
        )}

        {/* Profile Modal */}
        <ProfileModal
          profile={selectedProfile}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </section>
  );
};

export default ProfilesSection;
