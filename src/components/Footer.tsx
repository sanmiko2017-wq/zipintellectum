import { Phone, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-hero py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div>
            <a href="#" className="font-display text-2xl font-bold text-primary-foreground">
              ZIP <span className="text-gold">INTELLECTUM</span>
            </a>
            <p className="font-body text-primary-foreground/70 mt-2 text-sm">
              Obrt za poslovne usluge
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:justify-center">
            <a
              href="tel:+385992273740"
              className="flex items-center gap-2 text-primary-foreground/80 hover:text-gold transition-colors font-body text-sm"
            >
              <Phone className="w-4 h-4" />
              +385 99 22 737 40
            </a>
            <a
              href="mailto:zipintellectum@gmail.com"
              className="flex items-center gap-2 text-primary-foreground/80 hover:text-gold transition-colors font-body text-sm"
            >
              <Mail className="w-4 h-4" />
              zipintellectum@gmail.com
            </a>
          </div>

          {/* Copyright */}
          <div className="text-right">
            <p className="font-body text-primary-foreground/60 text-sm">
              © {currentYear} ZIP INTELLECTUM
            </p>
            <p className="font-body text-primary-foreground/40 text-xs mt-1">
              Sva prava pridržana
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
