import {
  Lightbulb, BarChart3, BookOpen,
  GraduationCap, Leaf, Megaphone, Calendar,
} from "lucide-react";

const services = [
  { icon: Lightbulb, num: "01", title: "Poslovne strategije i savjetovanje", desc: "Razvijamo prilagođene poslovne strategije koje vode vaše poslovanje prema održivom rastu i konkurentskoj prednosti." },
  { icon: BarChart3, num: "02", title: "Istraživanje tržišta i potrošača", desc: "Dubinska analiza tržišnih trendova i ponašanja potrošača za informirane poslovne odluke." },
  { icon: BookOpen, num: "03", title: "Studije i društvene inovacije", desc: "Izrada stručnih studija i implementacija inovativnih rješenja za društveni i ekonomski napredak." },
  { icon: GraduationCap, num: "04", title: "Edukacije i poslovne radionice", desc: "Interaktivne edukacije i radionice za razvoj poslovnih vještina i kompetencija vašeg tima." },
  { icon: Leaf, num: "05", title: "Savjetovanje za OPG-ove i održivi razvoj", desc: "Stručna podrška obiteljskim poljoprivrednim gospodarstvima u implementaciji održivih praksi." },
  { icon: Megaphone, num: "06", title: "Integrirani marketing i odnosi s javnošću", desc: "Sveobuhvatne marketinške strategije i upravljanje odnosima s javnošću za jačanje vašeg brenda." },
  { icon: Calendar, num: "07", title: "Organizacija poslovnih i sportskih događaja", desc: "Profesionalna organizacija događaja koji ostavljaju dojam i postižu vaše ciljeve." },
];

const Services = () => (
  <section id="usluge" className="zi-services zi-section">
    <div className="zi-container">
      <div className="zi-section-header">
        <span className="zi-tag">Što nudimo</span>
        <h2 className="zi-section-title">Naše <em>Usluge</em></h2>
        <p className="zi-section-desc">
          Širok spektar profesionalnih usluga prilagođenih vašim specifičnim potrebama, podržanih akademskom stručnošću i praktičnim iskustvom.
        </p>
      </div>
      <div className="zi-services-grid">
        {services.map((s, i) => (
          <div key={i} className="zi-service-card">
            <div className="zi-service-top">
              <span className="zi-service-num">{s.num}</span>
              <div className="zi-service-icon-wrap">
                <s.icon size={22} />
              </div>
            </div>
            <h3 className="zi-service-title">{s.title}</h3>
            <p className="zi-service-desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;