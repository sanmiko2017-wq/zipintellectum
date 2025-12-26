import { 
  Lightbulb, 
  BarChart3, 
  BookOpen, 
  GraduationCap, 
  Leaf, 
  Megaphone, 
  Calendar 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Lightbulb,
      title: "Poslovne strategije i savjetovanje",
      description: "Razvijamo prilagođene poslovne strategije koje vode vaš poslovanje prema održivom rastu i konkurentskoj prednosti.",
    },
    {
      icon: BarChart3,
      title: "Istraživanje tržišta i potrošača",
      description: "Dubinska analiza tržišnih trendova i ponašanja potrošača za informirane poslovne odluke.",
    },
    {
      icon: BookOpen,
      title: "Studije i društvene inovacije",
      description: "Izrada stručnih studija i implementacija inovativnih rješenja za društveni i ekonomski napredak.",
    },
    {
      icon: GraduationCap,
      title: "Edukacije i poslovne radionice",
      description: "Interaktivne edukacije i radionice za razvoj poslovnih vještina i kompetencija vašeg tima.",
    },
    {
      icon: Leaf,
      title: "Savjetovanje za OPG-ove i održivi razvoj",
      description: "Stručna podrška obiteljskim poljoprivrednim gospodarstvima u implementaciji održivih praksi.",
    },
    {
      icon: Megaphone,
      title: "Integrirani marketing i odnosi s javnošću",
      description: "Sveobuhvatne marketinške strategije, oglašavanje i upravljanje odnosima s javnošću za jačanje vašeg brenda.",
    },
    {
      icon: Calendar,
      title: "Organizacija poslovnih i sportskih događaja",
      description: "Profesionalna organizacija događaja koji ostavljaju dojam i postižu vaše ciljeve.",
    },
  ];

  return (
    <section id="usluge" className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block font-body text-gold font-semibold text-sm tracking-wider uppercase mb-4">
            Što nudimo
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Naše <span className="text-gradient-gold">Usluge</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg leading-relaxed">
            Širok spektar profesionalnih usluga prilagođenih vašim specifičnim 
            potrebama i ciljevima, podržanih akademskom stručnošću i praktičnim iskustvom.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-500 border border-border/50 hover:border-gold/30 relative overflow-hidden"
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-500">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Corner Accent */}
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gold/5 rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
