import { Bus, Phone } from 'lucide-react';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Bus size={32} color="#f4b400" />
        <div className="logo-text">
          <span className="logo-main">MADUNA</span>
          <span className="logo-sub">COACHES</span>
        </div>
      </div>

      <nav className="nav">
        <a href="#" className="nav-link active">HOME</a>
        <a href="#" className="nav-link">SERVICES</a>
        <a href="#" className="nav-link">OUR FLEET</a>
        <a href="#" className="nav-link">ABOUT US</a>
        <a href="#" className="nav-link">CONTACT US</a>
      </nav>

      <div className="call-us">
        <Phone size={18} color="#f4b400" />
        <div>
          <small>CALL US</small>
          <strong>+27 72 511 2866</strong>
        </div>
      </div>
    </header>
  );
}

export default Header;