import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Profile } from "@/data/profiles";
import { Phone, MessageCircle, MapPin, User, Heart } from "lucide-react";

interface ProfileCardProps {
  profile: Profile;
  onViewDetails: (profile: Profile) => void;
}

const ProfileCard = ({ profile, onViewDetails }: ProfileCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img 
          src={profile.photos[0]} 
          alt={profile.name}
          className="w-full h-64 object-cover"
        />
        {profile.isVerified && (
          <Badge className="absolute top-2 right-2 bg-green-500 text-white">
            Verified
          </Badge>
        )}
      </div>
      
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-foreground">{profile.name}</h3>
          <span className="text-muted-foreground">{profile.age} years old</span>
        </div>
        
        <div className="flex items-center gap-1 text-muted-foreground mb-2">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{profile.city}</span>
        </div>
        
        <div className="flex items-center gap-1 text-muted-foreground mb-3">
          <User className="w-4 h-4" />
          <span className="text-sm">{profile.agency}</span>
        </div>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <span>Height: {profile.height}</span>
          <span>Body: {profile.bodyType}</span>
        </div>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {profile.likes.slice(0, 3).map((like) => (
            <Badge key={like} variant="secondary" className="text-xs">
              {like}
            </Badge>
          ))}
          {profile.likes.length > 3 && (
            <Badge variant="secondary" className="text-xs">
              +{profile.likes.length - 3} more
            </Badge>
          )}
        </div>
        
        <div className="grid grid-cols-3 gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="text-xs"
            onClick={() => onViewDetails(profile)}
          >
            <Heart className="w-3 h-3 mr-1" />
            Details
          </Button>
          
          {profile.contactInfo.phone && (
            <Button variant="outline" size="sm" className="text-xs">
              <Phone className="w-3 h-3 mr-1" />
              Call
            </Button>
          )}
          
          {profile.contactInfo.line && (
            <Button variant="outline" size="sm" className="text-xs">
              <MessageCircle className="w-3 h-3 mr-1" />
              Line
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;