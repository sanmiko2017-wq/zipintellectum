import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#usluge", label: "Usluge" },
    { href: "#o-nama", label: "O nama" },
    { href: "#kontakt", label: "Kontakt" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-soft py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className={`font-display text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300 ${
              isScrolled ? "text-primary" : "text-primary-foreground"
            }`}
          >
            ZIP <span className="text-gold">INTELLECTUM</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`font-body text-sm font-medium transition-colors duration-300 hover:text-gold ${
                  isScrolled ? "text-foreground" : "text-primary-foreground"
                }`}
              >
                {link.label}
              </button>
            ))}
            <Button
              variant={isScrolled ? "gold" : "heroSolid"}
              size="sm"
              onClick={() => scrollToSection("#kontakt")}
              className="gap-2"
            >
              <Phone className="w-4 h-4" />
              Kontaktirajte nas
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-primary-foreground"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-primary-foreground"}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col gap-4 bg-card rounded-lg p-4 shadow-elevated">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="font-body text-foreground hover:text-gold transition-colors text-left py-2"
                >
                  {link.label}
                </button>
              ))}
              <Button
                variant="gold"
                size="sm"
                onClick={() => scrollToSection("#kontakt")}
                className="w-full gap-2"
              >
                <Phone className="w-4 h-4" />
                Kontaktirajte nas
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
