import { CheckCircle } from "lucide-react";
import zvonimirPhoto from "@/assets/zvonimir-filipovic.png";

const highlights = [
  "Doktor ekonomskih znanosti",
  "Višegodišnje praktično iskustvo",
  "Akademska izvrsnost",
  "Individualni pristup klijentu",
];

const About = () => (
  <section id="o-nama" className="zi-about zi-section">
    <div className="zi-container">
      <div className="zi-about-grid">
        <div className="zi-about-img-col">
          <div className="zi-about-img-wrap">
            <img src={zvonimirPhoto} alt="dr. sc. Zvonimir Filipović" className="zi-about-photo" />
            <div className="zi-about-frame" />
          </div>
          <div className="zi-about-badge">
            <div className="zi-about-badge-num">25+</div>
            <div className="zi-about-badge-label">Godina iskustva</div>
          </div>
        </div>

        <div>
          <span className="zi-tag">O nama</span>
          <h2 className="zi-section-title" style={{ textAlign: "left", maxWidth: "none", marginBottom: "0" }}>
            Stručnost i iskustvo<br />za <em>vaš uspjeh</em>
          </h2>

          <div className="zi-about-name-block" style={{ marginTop: "26px" }}>
            <div className="zi-about-name">dr. sc. Zvonimir Filipović</div>
            <div className="zi-about-role">Vlasnik i glavni konzultant</div>
          </div>

          <p className="zi-about-text">
            ZIP INTELLECTUM je obrt za poslovne usluge osnovan s ciljem pružanja vrhunskog stručnog savjetovanja i podrške. Kombiniramo akademsko znanje s praktičnim poslovnim iskustvom kako bismo vam pomogli ostvariti vaše ciljeve.
          </p>
          <p className="zi-about-text">
            Pod vodstvom doktora ekonomskih znanosti Zvonimira Filipovića, nudimo personalizirani pristup svakom klijentu, osiguravajući rješenja koja su u potpunosti prilagođena vašim specifičnim potrebama.
          </p>

          <div className="zi-about-highlights">
            {highlights.map((h, i) => (
              <div key={i} className="zi-about-highlight">
                <CheckCircle size={18} className="zi-about-check" />
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;