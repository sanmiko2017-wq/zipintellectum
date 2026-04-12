import { ArrowRight, Award, Users, TrendingUp } from "lucide-react";

const stats = [
  { icon: Award, value: "25+", label: "Godina iskustva" },
  { icon: Users, value: "100+", label: "Zadovoljnih klijenata" },
  { icon: TrendingUp, value: "200+", label: "Projekata" },
];

const Hero = () => {
  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="zi-hero">
      <div className="zi-hero-grid" />
      <div className="zi-hero-vignette" />

      <div className="zi-hero-inner">
        <div className="zi-hero-eyebrow">
          <span className="zi-hero-dot" />
          Obrt za poslovne usluge · Hrvatska
        </div>

        <h1 className="zi-hero-title">
          ZIP
          <br />
          <em>Intellectum</em>
        </h1>

        <p className="zi-hero-sub">
          Strateško savjetovanje i poslovne usluge za vaš uspjeh.
          <br />
          Akademska izvrsnost u službi poslovnog rasta.
        </p>

        <div className="zi-hero-actions">
          <button className="zi-btn-solid" onClick={() => scrollTo("#usluge")}>
            Naše usluge <ArrowRight size={15} />
          </button>
          <button className="zi-btn-ghost" onClick={() => scrollTo("#kontakt")}>
            Kontaktirajte nas
          </button>
        </div>

        <div className="zi-hero-divider" />

        <div className="zi-hero-stats">
          {stats.map((s, i) => (
            <div key={i} className="zi-stat">
              <span className="zi-stat-val">{s.value}</span>
              <span className="zi-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="zi-scroll-cue">
        <div className="zi-scroll-line" />
      </div>
    </section>
  );
};

export default Hero;