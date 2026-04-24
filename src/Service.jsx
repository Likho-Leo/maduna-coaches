import { GraduationCap, Star, MapPin } from 'lucide-react';

function Service() {
  return (
    <section className="services">
      <p className="services-label">WHAT WE OFFER</p>
      <h2 className="services-title">Our <span>Services</span></h2>
      <div className="services-divider"></div>

      <div className="services-grid">
        <div className="service-card">
          <div className="service-card-accent"></div>
          <GraduationCap size={36} color="#f4b400" className="service-icon" />
          <h3 className="service-card-title">Scholar Transport</h3>
          <p className="service-card-text">
            Safe & reliable daily transport for students. We ensure your children arrive on time, every time.
          </p>
          <a className="service-card-link" href="#">Learn More →</a>
        </div>

        <div className="service-card">
          <div className="service-card-accent"></div>
          <Star size={36} color="#f4b400" className="service-icon" />
          <h3 className="service-card-title">Special Trips</h3>
          <p className="service-card-text">
            Private hire for events, weddings & tours. Tailored transport solutions for any occasion.
          </p>
          <a className="service-card-link" href="#">Learn More →</a>
        </div>

        <div className="service-card">
          <div className="service-card-accent"></div>
          <MapPin size={36} color="#f4b400" className="service-icon" />
          <h3 className="service-card-title">Local Transport</h3>
          <p className="service-card-text">
            Local & long distance travel across South Africa. From Matatiele to anywhere nationwide.
          </p>
          <a className="service-card-link" href="#">Learn More →</a>
        </div>
      </div>
    </section>
  );
}

export default Service;