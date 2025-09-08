import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Profile } from "@/data/profiles";
import { Phone, MessageCircle, MapPin, User, Calendar, Ruler, Languages, Heart } from "lucide-react";

interface ProfileModalProps {
  profile: Profile | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProfileModal = ({ profile, isOpen, onClose }: ProfileModalProps) => {
  if (!profile) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <span>{profile.name}</span>
            {profile.isVerified && (
              <Badge className="bg-green-500 text-white">Verified</Badge>
            )}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Photos */}
          <div className="grid grid-cols-2 gap-4">
            {profile.photos.map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`${profile.name} photo ${index + 1}`}
                className="w-full h-48 object-cover rounded-lg"
              />
            ))}
          </div>
          
          {/* Basic Info */}
          <div className="bg-card p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Basic Information</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground">City:</span>
                <span>{profile.city}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground">Agency:</span>
                <span>{profile.agency}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground">Age:</span>
                <span>{profile.age} years old</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Ruler className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground">Height:</span>
                <span>{profile.height}</span>
              </div>
            </div>
            
            <div className="mt-3 flex items-center gap-2">
              <span className="text-muted-foreground text-sm">Body Type:</span>
              <Badge variant="secondary">{profile.bodyType}</Badge>
            </div>
            
            {profile.measurements && (
              <div className="mt-2 flex items-center gap-2">
                <span className="text-muted-foreground text-sm">Measurements:</span>
                <span className="font-medium">{profile.measurements}</span>
              </div>
            )}
          </div>
          
          {/* Languages */}
          <div className="bg-card p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Languages className="w-5 h-5" />
              Languages
            </h3>
            <div className="flex flex-wrap gap-2">
              {profile.languages.map((language) => (
                <Badge key={language} variant="outline">
                  {language}
                </Badge>
              ))}
            </div>
          </div>
          
          {/* Likes */}
          <div className="bg-card p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Heart className="w-5 h-5" />
              Services
            </h3>
            <div className="flex flex-wrap gap-2">
              {profile.likes.map((like) => (
                <Badge key={like} variant="secondary">
                  {like}
                </Badge>
              ))}
            </div>
          </div>
          
          {/* Contact */}
          <div className="bg-card p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Contact Information</h3>
            <div className="space-y-3">
              {profile.contactInfo.phone && (
                <Button className="w-full" variant="outline">
                  <Phone className="w-4 h-4 mr-2" />
                  {profile.contactInfo.phone}
                </Button>
              )}
              
              {profile.contactInfo.line && (
                <Button className="w-full" variant="outline">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Line ID: {profile.contactInfo.line}
                </Button>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileModal;