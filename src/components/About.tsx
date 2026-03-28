import { Award, BookOpen, Target, CheckCircle } from "lucide-react";
import zvonimirPhoto from "@/assets/zvonimir-filipovic.png";

const About = () => {
  const highlights = [
    "Doktor ekonomskih znanosti",
    "Višegodišnje praktično iskustvo",
    "Akademska izvrsnost",
    "Individualni pristup",
  ];

  return (
    <section id="o-nama" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--navy)) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Image/Visual */}
          <div className="relative">
            <div className="relative">
              {/* Main Card */}
              <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 shadow-elevated">
                <div className="text-center">
                  {/* Photo */}
                  <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden border-4 border-gold/30">
                    <img src={zvonimirPhoto} alt="dr. sc. Zvonimir Filipović" className="w-full h-full object-cover" />
                  </div>
                  
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
                    dr. sc. Zvonimir Filipović
                  </h3>
                  <p className="font-body text-primary-foreground/80 text-lg mb-6">
                    Doktor ekonomskih znanosti
                  </p>

                  {/* Credentials */}
                  <div className="flex flex-wrap justify-center gap-3">
                    <div className="flex items-center gap-2 bg-primary-foreground/10 rounded-full px-4 py-2">
                      <Award className="w-4 h-4 text-gold" />
                      <span className="text-primary-foreground/90 text-sm">Dr. sc.</span>
                    </div>
                    <div className="flex items-center gap-2 bg-primary-foreground/10 rounded-full px-4 py-2">
                      <BookOpen className="w-4 h-4 text-gold" />
                      <span className="text-primary-foreground/90 text-sm">Ekonomija</span>
                    </div>
                    <div className="flex items-center gap-2 bg-primary-foreground/10 rounded-full px-4 py-2">
                      <Target className="w-4 h-4 text-gold" />
                      <span className="text-primary-foreground/90 text-sm">Strategije</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 -right-6 bg-card rounded-xl p-4 shadow-elevated border border-border hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <div className="font-display text-xl font-bold text-foreground">25+</div>
                    <div className="font-body text-sm text-muted-foreground">Godina iskustva</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <span className="inline-block font-body text-gold font-semibold text-sm tracking-wider uppercase mb-4">
              O nama
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Stručnost i iskustvo za{" "}
              <span className="text-gradient-gold">vaš uspjeh</span>
            </h2>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-6">
              ZIP INTELLECTUM je obrt za poslovne usluge osnovan s ciljem pružanja 
              vrhunskog stručnog savjetovanja i podrške. Kombiniramo akademsko znanje 
              s praktičnim poslovnim iskustvom kako bismo vam pomogli ostvariti vaše ciljeve.
            </p>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-8">
              Pod vodstvom doktora ekonomskih znanosti Zvonimira Filipovića, 
              nudimo personalizirani pristup svakom klijentu, osiguravajući 
              rješenja koja su u potpunosti prilagođena vašim specifičnim potrebama.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="font-body text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
