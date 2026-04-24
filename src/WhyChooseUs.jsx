import { Clock, Users, Bus, BadgeDollarSign } from 'lucide-react';

function WhyChooseUs() {
  return (
    <section className="wcu-section">
      <div className="wcu-inner">

        <div className="wcu-left">
          <p className="wcu-label">WHY CHOOSE US</p>
          <h2 className="wcu-title">Why Choose <span>Maduna Coaches?</span></h2>
          <div className="wcu-divider"></div>
          <p className="wcu-desc">
            We've been serving communities across South Africa for over a decade.
            Our commitment to safety, reliability, and comfort makes us the trusted
            choice for scholar transport, special trips, and long-distance travel.
          </p>
        </div>

        <div className="wcu-grid">
          <div className="wcu-card">
            <div className="wcu-card-accent"></div>
            <Clock size={28} color="#f4b400" className="wcu-icon" />
            <div className="wcu-card-number">10+</div>
            <div className="wcu-card-title">Years Experience</div>
            <div className="wcu-card-text">A decade of trusted transport services across South Africa.</div>
          </div>

          <div className="wcu-card">
            <div className="wcu-card-accent"></div>
            <Users size={28} color="#f4b400" className="wcu-icon" />
            <div className="wcu-card-number">100%</div>
            <div className="wcu-card-title">Professional Drivers</div>
            <div className="wcu-card-text">Licensed, trained, and dedicated to your safety.</div>
          </div>

          <div className="wcu-card">
            <div className="wcu-card-accent"></div>
            <Bus size={28} color="#f4b400" className="wcu-icon" />
            <div className="wcu-card-number">✓</div>
            <div className="wcu-card-title">Well-Maintained Vehicles</div>
            <div className="wcu-card-text">Regular inspections ensure comfort and reliability.</div>
          </div>

          <div className="wcu-card">
            <div className="wcu-card-accent"></div>
            <BadgeDollarSign size={28} color="#f4b400" className="wcu-icon" />
            <div className="wcu-card-number">R</div>
            <div className="wcu-card-title">Affordable Rates</div>
            <div className="wcu-card-text">Competitive pricing without compromising on quality.</div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;