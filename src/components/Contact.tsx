import { Phone, Mail, Clock, Send } from "lucide-react";
import zvonimirPhoto from "@/assets/zvonimir-filipovic.png";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: Phone, label: "Telefon", value: "+385 99 22 737 40", href: "tel:+385992273740" },
  { icon: Mail, label: "Email", value: "zipintellectum@gmail.com", href: "mailto:zipintellectum@gmail.com" },
  { icon: Clock, label: "Radno vrijeme", value: "Pon – Pet: 9:00 – 17:00", href: null },
];

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Poruka poslana!", description: "Javit ćemo vam se u najkraćem mogućem roku." });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <section id="kontakt" className="zi-contact zi-section">
      <div className="zi-container">
        <div className="zi-section-header">
          <span className="zi-tag">Kontakt</span>
          <h2 className="zi-section-title">Razgovarajmo o <em>vašim ciljevima</em></h2>
          <p className="zi-section-desc">
            Spremni smo saslušati vaše potrebe i ponuditi stručna rješenja. Kontaktirajte nas za besplatne konzultacije.
          </p>
        </div>

        <div className="zi-contact-grid">
          <div>
            <div className="zi-contact-info-list">
              {contactInfo.map((item, i) => (
                <div key={i} className="zi-contact-item">
                  <div className="zi-contact-icon-wrap"><item.icon size={19} /></div>
                  <div>
                    <div className="zi-contact-label">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="zi-contact-val zi-contact-val-link">{item.value}</a>
                    ) : (
                      <div className="zi-contact-val">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="zi-consultant-card">
              <div className="zi-consultant-photo-wrap">
                <img src={zvonimirPhoto} alt="dr. sc. Zvonimir Filipović" className="zi-consultant-photo" />
              </div>
              <div>
                <div className="zi-consultant-name">dr. sc. Zvonimir Filipović</div>
                <div className="zi-consultant-role">Vlasnik i glavni konzultant</div>
                <p className="zi-consultant-quote">"Osobno vodim svaki projekt i jamčim kvalitetu usluge."</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="zi-form">
            <div className="zi-form-group">
              <label className="zi-form-label">Ime i prezime *</label>
              <input type="text" name="name" value={form.name} onChange={handleChange} required className="zi-form-input" placeholder="Vaše ime i prezime" />
            </div>
            <div className="zi-form-row">
              <div className="zi-form-group">
                <label className="zi-form-label">Email *</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} required className="zi-form-input" placeholder="vas@email.com" />
              </div>
              <div className="zi-form-group">
                <label className="zi-form-label">Telefon</label>
                <input type="tel" name="phone" value={form.phone} onChange={handleChange} className="zi-form-input" placeholder="+385 99 123 4567" />
              </div>
            </div>
            <div className="zi-form-group">
              <label className="zi-form-label">Vaša poruka *</label>
              <textarea name="message" value={form.message} onChange={handleChange} required rows={5} className="zi-form-input zi-form-textarea" placeholder="Opišite kako vam možemo pomoći..." />
            </div>
            <button type="submit" className="zi-btn-submit">
              <Send size={14} /> Pošalji upit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;