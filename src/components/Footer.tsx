import { Phone, Mail } from "lucide-react";

const Footer = () => (
  <footer className="zi-footer">
    <div className="zi-footer-inner">
      <div className="zi-footer-top">
        <div>
          <a href="#" className="zi-footer-logo">ZIP <em>Intellectum</em></a>
          <p className="zi-footer-tagline">Obrt za poslovne usluge</p>
        </div>
        <div className="zi-footer-contacts">
          <a href="tel:+385992273740" className="zi-footer-link"><Phone size={13} /> +385 99 22 737 40</a>
          <a href="mailto:zipintellectum@gmail.com" className="zi-footer-link"><Mail size={13} /> zipintellectum@gmail.com</a>
        </div>
      </div>
      <div className="zi-footer-bottom">
        <p className="zi-footer-copy">© {new Date().getFullYear()} ZIP INTELLECTUM · Sva prava pridržana</p>
      </div>
    </div>
  </footer>
);

export default Footer;