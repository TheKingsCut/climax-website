import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl lg:text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Cli-Max
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-primary smooth-transition font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Contact Info */}
          <div className="hidden lg:flex items-center space-x-6">
            <a
              href="tel:+1234567890"
              className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary smooth-transition"
            >
              <Phone className="h-4 w-4" />
              <span>(123) 456-7890</span>
            </a>
            <a
              href="mailto:info@cli-max.com"
              className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary smooth-transition"
            >
              <Mail className="h-4 w-4" />
              <span>info@cli-max.com</span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="touch-target">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 glass">
              <div className="flex flex-col space-y-6 mt-8">
                {/* Mobile Logo */}
                <div className="text-center">
                  <h2 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    Cli-Max
                  </h2>
                </div>

                {/* Mobile Navigation */}
                <nav className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => scrollToSection(item.href)}
                      className="text-left text-lg font-medium text-foreground hover:text-primary smooth-transition touch-target px-4 py-2 rounded-lg hover:bg-muted"
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>

                {/* Mobile Contact Info */}
                <div className="flex flex-col space-y-4 pt-6 border-t border-border">
                  <a
                    href="tel:+1234567890"
                    className="flex items-center space-x-3 text-muted-foreground hover:text-primary smooth-transition touch-target px-4 py-2 rounded-lg hover:bg-muted"
                  >
                    <Phone className="h-5 w-5" />
                    <span>(123) 456-7890</span>
                  </a>
                  <a
                    href="mailto:info@cli-max.com"
                    className="flex items-center space-x-3 text-muted-foreground hover:text-primary smooth-transition touch-target px-4 py-2 rounded-lg hover:bg-muted"
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