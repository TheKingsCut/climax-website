import { useState } from "react";
import { Menu, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import climaxLogo from "@/assets/climax-logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "HOME", href: "#home" },
    { label: "ABOUT", href: "#about" },
    { label: "PRODUCTS", href: "#products" },
    { label: "INDUSTRIES", href: "#industries" },
    { label: "CONTACT", href: "#contact" },
    { label: "PARTNERS", href: "#partners" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
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
          <div className="hidden lg:flex items-center space-x-6">
            <a
              href="tel:+1234567890"
              className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>(123) 456-7890</span>
            </a>
            <a
              href="mailto:info@cli-max.com"
              className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>info@cli-max.com</span>
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
                    href="tel:+1234567890"
                    className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors px-4 py-2 rounded-lg hover:bg-muted"
                  >
                    <Phone className="h-5 w-5" />
                    <span>(123) 456-7890</span>
                  </a>
                  <a
                    href="mailto:info@cli-max.com"
                    className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors px-4 py-2 rounded-lg hover:bg-muted"
                  >
                    <Mail className="h-5 w-5" />
                    <span>info@cli-max.com</span>
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