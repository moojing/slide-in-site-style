import { useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PROFILES, Profile } from "@/data/profiles";
import ProfileCard from "@/components/ProfileCard";
import ProfileModal from "@/components/ProfileModal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ProfilesPage = () => {
  const { region, gender } = useParams<{ region: string; gender: string }>();
  const navigate = useNavigate();
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProfiles = useMemo(() => {
    return PROFILES.filter((profile) => {
      const regionMatch = profile.region === region;
      const genderMatch = profile.gender === gender;
      return regionMatch && genderMatch;
    });
  }, [region, gender]);

  const handleViewDetails = (profile: Profile) => {
    setSelectedProfile(profile);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProfile(null);
  };

  const handleBack = () => {
    navigate(`/gender/${region}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <Button 
            variant="ghost" 
            onClick={handleBack}
            className="mb-8 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Gender Selection
          </Button>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {gender} Profiles in {region}
          </h1>
          
          <div className="flex items-center justify-center gap-4 mb-6">
            <Badge variant="secondary" className="text-base px-4 py-2">
              <MapPin className="w-4 h-4 mr-2" />
              {region}
            </Badge>
            <Badge variant="secondary" className="text-base px-4 py-2">
              <Users className="w-4 h-4 mr-2" />
              {gender}
            </Badge>
          </div>
          
          <p className="text-xl text-muted-foreground">
            {filteredProfiles.length} profile{filteredProfiles.length !== 1 ? 's' : ''} found
          </p>
        </div>

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
              No {gender.toLowerCase()} profiles found in {region}.
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Try selecting a different region or gender.
            </p>
            <Button 
              variant="outline" 
              onClick={() => navigate('/regions')}
              className="mt-6"
            >
              Browse Other Regions
            </Button>
          </div>
        )}

        <ProfileModal
          profile={selectedProfile}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </main>

      <Footer />
    </div>
  );
};

export default ProfilesPage;