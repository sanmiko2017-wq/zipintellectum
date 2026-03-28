import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import zvonimirPhoto from "@/assets/zvonimir-filipovic.png";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: Phone,
      label: "Telefon",
      value: "+385 99 22 737 40",
      href: "tel:+385992273740",
    },
    {
      icon: Mail,
      label: "Email",
      value: "zipintellectum@gmail.com",
      href: "mailto:zipintellectum@gmail.com",
    },
    {
      icon: Clock,
      label: "Radno vrijeme",
      value: "Pon - Pet: 9:00 - 17:00",
      href: null,
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Poruka poslana!",
      description: "Javit ćemo vam se u najkraćem mogućem roku.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="kontakt" className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block font-body text-gold font-semibold text-sm tracking-wider uppercase mb-4">
            Kontakt
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Razgovarajmo o{" "}
            <span className="text-gradient-gold">vašim ciljevima</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg leading-relaxed">
            Spremni smo saslušati vaše potrebe i ponuditi stručna rješenja. 
            Kontaktirajte nas za besplatne konzultacije.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-8">
              Kontakt informacije
            </h3>

            <div className="space-y-6 mb-10">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-body text-sm text-muted-foreground mb-1">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-body text-lg text-foreground hover:text-gold transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="font-body text-lg text-foreground">
                        {item.value}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Owner Info Card */}
            <div className="bg-gradient-hero rounded-2xl p-6 text-primary-foreground">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gold/30">
                  <img src={zvonimirPhoto} alt="dr. sc. Zvonimir Filipović" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-display text-lg font-semibold">
                    dr. sc. Zvonimir Filipović
                  </div>
                  <div className="font-body text-primary-foreground/70 text-sm">
                    Vlasnik i glavni konzultant
                  </div>
                </div>
              </div>
              <p className="font-body text-primary-foreground/80 text-sm leading-relaxed">
                Osobno vodim svaki projekt i jamčim kvalitetu usluge. 
                Radujem se našoj suradnji.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 shadow-elevated border border-border/50">
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">
              Pošaljite upit
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block font-body text-sm text-muted-foreground mb-2">
                  Ime i prezime *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg font-body text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
                  placeholder="Vaše ime i prezime"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block font-body text-sm text-muted-foreground mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg font-body text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
                    placeholder="vas@email.com"
                  />
                </div>
                <div>
                  <label className="block font-body text-sm text-muted-foreground mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg font-body text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
                    placeholder="+385 99 123 4567"
                  />
                </div>
              </div>

              <div>
                <label className="block font-body text-sm text-muted-foreground mb-2">
                  Vaša poruka *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg font-body text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all resize-none"
                  placeholder="Opišite kako vam možemo pomoći..."
                />
              </div>

              <Button type="submit" variant="gold" size="lg" className="w-full gap-2">
                <Send className="w-4 h-4" />
                Pošalji upit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
