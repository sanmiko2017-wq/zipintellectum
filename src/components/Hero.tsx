import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, TrendingUp } from "lucide-react";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const stats = [
    { icon: Award, value: "15+", label: "Godina iskustva" },
    { icon: Users, value: "100+", label: "Zadovoljnih klijenata" },
    { icon: TrendingUp, value: "200+", label: "Projekata" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--gold) / 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--gold) / 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-8 animate-fade-up opacity-0">
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            <span className="text-primary-foreground/90 text-sm font-body">
              Obrt za poslovne usluge
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up opacity-0 delay-100">
            ZIP{" "}
            <span className="text-gradient-gold">INTELLECTUM</span>
          </h1>

          {/* Subtitle */}
          <p className="font-body text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8 leading-relaxed animate-fade-up opacity-0 delay-200">
            Strateško savjetovanje i poslovne usluge za vaš uspjeh. 
            Kombiniramo akademsku izvrsnost s praktičnim poslovnim iskustvom.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up opacity-0 delay-300">
            <Button
              variant="heroSolid"
              size="xl"
              onClick={() => scrollToSection("#usluge")}
              className="group"
            >
              Naše usluge
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="hero"
              size="xl"
              onClick={() => scrollToSection("#kontakt")}
            >
              Kontaktirajte nas
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 animate-fade-up opacity-0 delay-400">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-xl p-6 hover:bg-primary-foreground/10 transition-all duration-300"
              >
                <stat.icon className="w-8 h-8 text-gold mx-auto mb-3" />
                <div className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-1">
                  {stat.value}
                </div>
                <div className="font-body text-sm text-primary-foreground/70">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-gold rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
