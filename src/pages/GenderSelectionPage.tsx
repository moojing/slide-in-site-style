import { useParams, useNavigate } from "react-router-dom";
import { setSelectedRegion } from "@/data/profiles";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Users, ArrowRight, ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const GenderSelectionPage = () => {
  const { region } = useParams<{ region: string }>();
  const navigate = useNavigate();

  const handleGenderSelect = (gender: string) => {
    if (region) setSelectedRegion(region);
    navigate(`/profiles/${region}/${gender}`);
  };

  const handleBack = () => {
    navigate("/regions");
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
            Back to Regions
          </Button>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Select Gender
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose your preference in{" "}
            <span className="text-primary font-semibold">{region}</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <Card
            className="cursor-pointer hover:shadows-lg transition-all duration-300 hover:scale-105 bg-card border-border"
            onClick={() => handleGenderSelect("Female")}
          >
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-4 rounded-full bg-pink-500/10">
                <User className="w-12 h-12 text-pink-500" />
              </div>
              <CardTitle className="text-2xl text-card-foreground">
                Female
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-6">
                Browse female companions in {region}
              </p>
              <Button
                variant="outline"
                className="w-full group"
                onClick={(e) => {
                  e.stopPropagation();
                  handleGenderSelect("Female");
                }}
              >
                View Profiles
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>

          <Card
            className="cursor-pointer hover:shadows-lg transition-all duration-300 hover:scale-105 bg-card border-border"
            onClick={() => handleGenderSelect("Male")}
          >
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-4 rounded-full bg-blue-500/10">
                <Users className="w-12 h-12 text-blue-500" />
              </div>
              <CardTitle className="text-2xl text-card-foreground">
                Male
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-6">
                Browse male companions in {region}
              </p>
              <Button
                variant="outline"
                className="w-full group"
                onClick={(e) => {
                  e.stopPropagation();
                  handleGenderSelect("Male");
                }}
              >
                View Profiles
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GenderSelectionPage;
