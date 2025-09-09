import { useState } from "react";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { smoothScrollTo } from "@/lib/smoothScroll";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "Search", href: "/regions" },
    { label: "Contact Us", href: "#contact" },
  ];

  const handleMenuClick = (href: string) => {
    setIsOpen(false);
    
    if (href === "#home") {
      // Navigate to home page
      navigate("/");
    } else if (href.startsWith("/")) {
      // Navigate to different page
      navigate(href);
    } else {
      // Smooth scroll to section with custom animation
      smoothScrollTo(href, 1200);
    }
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <button onClick={handleLogoClick} className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Heart className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-primary">Holiday Friend</span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleMenuClick(item.href)}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80 bg-card border-border">
            <div className="flex items-center justify-between mb-8">
              <button onClick={handleLogoClick} className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold text-primary">Holiday Friend</span>
              </button>
            </div>
            
            <div className="flex flex-col space-y-6">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleMenuClick(item.href)}
                  className="text-left text-lg text-foreground hover:text-primary transition-colors duration-200 py-2"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t border-border">
                <Button className="w-full mb-3" variant="outline">
                  Contact Us
                </Button>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Make a Friend
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navigation;