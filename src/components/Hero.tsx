import { useEffect, useRef, useState } from "react";
import { ArrowRight, Award, Users, TrendingUp } from "lucide-react";

const stats = [
  { icon: Award, target: 25, suffix: "+", label: "Godina iskustva" },
  { icon: Users, target: 100, suffix: "+", label: "Zadovoljnih klijenata" },
  { icon: TrendingUp, target: 200, suffix: "+", label: "Projekata" },
];

const CountUp = ({ target, suffix, duration = 1800 }: { target: number; suffix: string; duration?: number }) => {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            setVal(Math.round(target * eased));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{val}{suffix}</span>;
};

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
            Naše usluge <ArrowRight size={17} />
          </button>
          <button className="zi-btn-ghost" onClick={() => scrollTo("#kontakt")}>
            Kontaktirajte nas
          </button>
        </div>

        <div className="zi-hero-divider" />

        <div className="zi-hero-stats">
          {stats.map((s, i) => (
            <div key={i} className="zi-stat">
              <span className="zi-stat-val">
                <CountUp target={s.target} suffix={s.suffix} />
              </span>
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
