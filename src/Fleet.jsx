import quantum from './assets/Quantum.png';
import sprinter from './assets/Sprinter.png';
import bus from './assets/Bus.png';

function Fleet() {
  const vehicles = [
    {
      img: quantum,
      badge: 'Minibus',
      title: 'Toyota Quantum',
      capacity: 'Up to 15 passengers',
      text: 'Ideal for scholar transport and local trips. Reliable, comfortable, and perfect for smaller groups.',
    },
    {
      img: sprinter,
      badge: 'Midibus',
      title: 'Mercedes Sprinter',
      capacity: 'Up to 22 passengers',
      text: 'Perfect for special trips and events. Spacious, air-conditioned, and built for comfort on long journeys.',
    },
    {
      img: bus,
      badge: 'Luxury Bus',
      title: 'Luxury Coach',
      capacity: 'Up to 60 passengers',
      text: 'Our flagship coach for large groups and long-distance travel. Premium comfort for nationwide journeys.',
    },
  ];

  return (
    <section className="fleet-section">
      <p className="fleet-label">OUR VEHICLES</p>
      <h2 className="fleet-title">Our <span>Fleet</span></h2>
      <div className="fleet-divider"></div>

      <div className="fleet-grid">
        {vehicles.map((v) => (
          <div className="fleet-card" key={v.title}>
            <div className="fleet-img-wrap">
              <img src={v.img} alt={v.title} />
              <span className="fleet-badge">{v.badge}</span>
            </div>
            <div className="fleet-body">
              <div className="fleet-card-title">{v.title}</div>
              <div className="fleet-card-cap">{v.capacity}</div>
              <div className="fleet-card-text">{v.text}</div>
              <a className="fleet-card-link" href="#">Enquire Now →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Fleet;