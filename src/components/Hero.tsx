import { useEffect, useRef } from "react";
import { ArrowRight, Award, Users, TrendingUp } from "lucide-react";

const stats = [
  { icon: Award, value: "25+", label: "Godina iskustva" },
  { icon: Users, value: "100+", label: "Zadovoljnih klijenata" },
  { icon: TrendingUp, value: "200+", label: "Projekata" },
];

const Hero = () => {
  const glowRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const glow = glowRef.current;
    if (!section || !glow) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
    };

    const tick = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      glow.style.transform = `translate3d(${currentX - 300}px, ${currentY - 300}px, 0)`;
      raf = requestAnimationFrame(tick);
    };

    section.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      section.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="zi-hero" ref={sectionRef}>
      <div className="zi-hero-glow" ref={glowRef} />
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