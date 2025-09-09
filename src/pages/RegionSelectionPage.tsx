import Navigation from "@/components/Navigation";
import RegionSelection from "@/components/RegionSelection";
import Footer from "@/components/Footer";

const RegionSelectionPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <RegionSelection />
      </div>
      <Footer />
    </div>
  );
};

export default RegionSelectionPage;