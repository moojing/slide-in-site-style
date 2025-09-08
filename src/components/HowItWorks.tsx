const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Browse",
      description: "Look through profiles of people who match your preferences"
    },
    {
      number: "2", 
      title: "Book",
      description: "Book a date and we will help arrange the rest."
    },
    {
      number: "3",
      title: "Meet", 
      description: "Meet your match in person, enjoy holiday together."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
          How It Works
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.number} className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground mx-auto mb-6">
                {step.number}
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;