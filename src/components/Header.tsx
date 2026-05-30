import { useState, useEffect } from "react";
import { Phone } from "lucide-react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#usluge", label: "Usluge" },
    { href: "#o-nama", label: "O nama" },
    { href: "#kontakt", label: "Kontakt" },
  ];

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header className={`zi-header${scrolled ? " scrolled" : ""}`}>
      <div className="zi-header-inner">
        <a href="#" className="zi-logo">
          ZIP <span>Intellectum</span>
        </a>
        <nav className="zi-nav">
          {links.map((l) => (
            <button key={l.href} className="zi-nav-link" onClick={() => scrollTo(l.href)}>
              {l.label}
            </button>
          ))}
          <button className="zi-nav-cta" onClick={() => scrollTo("#kontakt")}>
            <Phone size={15} /> Konzultacije
          </button>
        </nav>
        <button
          className={`zi-hamburger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span /><span />
        </button>
      </div>
      {menuOpen && (
        <div className="zi-mobile-nav">
          {links.map((l) => (
            <button key={l.href} className="zi-mobile-nav-link" onClick={() => scrollTo(l.href)}>
              {l.label}
            </button>
          ))}
          <button className="zi-nav-cta zi-mobile-cta" onClick={() => scrollTo("#kontakt")}>
            Konzultacije
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;