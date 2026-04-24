import { Phone, Mail, MapPin } from 'lucide-react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-accent"></div>

      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-brand-name">MADUNA</div>
          <div className="footer-brand-sub">COACHES</div>
          <p className="footer-brand-desc">
            Providing professional taxi and bus hire services across South Africa.
            Based in Matatiele — travelling nationwide.
          </p>
        </div>

        <div>
          <div className="footer-col-title">Quick Links</div>
          <ul className="footer-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Our Fleet</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <div className="footer-col-title">Contact</div>
          <div className="footer-contact-item">
            <Phone size={16} color="#f4b400" className="footer-contact-icon" />
            <span className="footer-contact-text">+27 72 511 2866</span>
          </div>
          <div className="footer-contact-item">
            <Mail size={16} color="#f4b400" className="footer-contact-icon" />
            <span className="footer-contact-text">tefelo.leohla15@gmail.com</span>
          </div>
          <div className="footer-contact-item">
            <MapPin size={16} color="#f4b400" className="footer-contact-icon" />
            <span className="footer-contact-text">Matatiele, South Africa</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} <span>Maduna Coaches</span>. All rights reserved.
        </p>
        <p className="footer-tagline">Safe. Reliable. Comfortable.</p>
      </div>
    </footer>
  );
}

export default Footer;