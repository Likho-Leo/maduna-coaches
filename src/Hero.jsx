import { Shield, User, Bus, MapPin, Calendar } from 'lucide-react';

function Hero() {
  return (
    <div className="hero">
      <div className="overlay"></div>

      <div className="hero-content">
        <p className="tagline">SAFE. RELIABLE. COMFORTABLE.</p>

        <h1>
          TRANSPORT YOU CAN <br />
          <span>TRUST, EVERY TIME.</span>
        </h1>

        <p className="subtext">
          Providing professional taxi &amp; bus hire services across South Africa.
          <br />
          Based in <strong>Matatiele</strong> – travelling nationwide.
        </p>

        <div className="features">
          <div className="feature-item">
            <Shield size={24} color="#f4b400" />
            <span>Safe &amp; Reliable Service</span>
          </div>
          <div className="feature-item">
            <User size={24} color="#f4b400" />
            <span>Experienced Drivers</span>
          </div>
          <div className="feature-item">
            <Bus size={24} color="#f4b400" />
            <span>Well-Maintained Vehicles</span>
          </div>
          <div className="feature-item">
            <MapPin size={24} color="#f4b400" />
            <span>Nationwide Travel</span>
          </div>
        </div>

        <button className="cta">
          <Calendar size={22} color="#0d1b2a" />
          <div>
            <strong>BOOK YOUR TRIP TODAY</strong>
            <small>Scholar Transport • Special Trips • Local Transport</small>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Hero;