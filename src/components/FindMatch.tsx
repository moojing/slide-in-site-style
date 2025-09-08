import { Button } from "@/components/ui/button";

const FindMatch = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-card-foreground mb-6">
          Find Your Match Tonight
        </h2>
        
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Start matching with people for your next holiday.
        </p>
        
        <Button 
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg"
        >
          View Profiles
        </Button>
      </div>
    </section>
  );
};

export default FindMatch;