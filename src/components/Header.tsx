import { useState } from "react";
import { Menu, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import climaxLogo from "@/assets/climax-logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "HOME", href: "#home" },
    { label: "PRODUCTS", href: "#products" },
    { label: "INDUSTRIES", href: "#industries" },
    { label: "CONTACT", href: "#contact" },
    { label: "PARTNERSHIPS", href: "#partner-with-cli-max" },
    { label: "WARRANTIES", href: "#services" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      // Use consistent offset like the product navigation
      const offset = 200; // Account for sticky header and potential product nav
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={climaxLogo} alt="Cli-Max Logo" className="h-10 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Contact */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="https://wa.me/27647576648"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-xs text-muted-foreground hover:text-primary transition-colors whitespace-nowrap"
            >
              <Phone className="h-3 w-3" />
              <span>+27 (64) 757 6648</span>
            </a>
            <a
              href="mailto:hello@cli-max.co.za"
              className="flex items-center space-x-1 text-xs text-muted-foreground hover:text-primary transition-colors whitespace-nowrap"
            >
              <Mail className="h-3 w-3" />
              <span>hello@cli-max.co.za</span>
            </a>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-6 mt-8">
                <div className="text-center">
                  <img src={climaxLogo} alt="Cli-Max Logo" className="h-8 w-auto mx-auto" />
                </div>
                
                <nav className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => scrollToSection(item.href)}
                      className="text-left text-lg font-medium text-foreground hover:text-primary transition-colors px-4 py-2 rounded-lg hover:bg-muted"
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>

                <div className="flex flex-col space-y-4 pt-6 border-t border-border">
                  <a
                    href="https://wa.me/27647576648"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors px-4 py-2 rounded-lg hover:bg-muted"
                  >
                    <Phone className="h-5 w-5" />
                    <span>+27 (64) 757 6648</span>
                  </a>
                  <a
                    href="mailto:hello@cli-max.co.za"
                    className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors px-4 py-2 rounded-lg hover:bg-muted"
                  >
                    <Mail className="h-5 w-5" />
                    <span>hello@cli-max.co.za</span>
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;