import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';
import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <section className="contact-section">
      <p className="contact-label">GET IN TOUCH</p>
      <h2 className="contact-title">Ready to Book <span>Your Trip?</span></h2>
      <div className="contact-divider"></div>

      <div className="contact-inner">
        <div className="contact-info">
          <div className="contact-item">
            <Phone size={22} color="#f4b400" className="contact-icon" />
            <div>
              <div className="contact-item-label">Phone</div>
              <div className="contact-item-value">+27 72 511 2866</div>
            </div>
          </div>

          <div className="contact-item">
            <MessageCircle size={22} color="#f4b400" className="contact-icon" />
            <div>
              <div className="contact-item-label">WhatsApp</div>
              <div className="contact-item-value">+27 72 511 2866</div>
            </div>
          </div>

          <div className="contact-item">
            <Mail size={22} color="#f4b400" className="contact-icon" />
            <div>
              <div className="contact-item-label">Email</div>
              <div className="contact-item-value">tefelo.leohla15@gmail.com</div>
            </div>
          </div>

          <div className="contact-item">
            <MapPin size={22} color="#f4b400" className="contact-icon" />
            <div>
              <div className="contact-item-label">Location</div>
              <div className="contact-item-value">Matatiele, South Africa</div>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <div className="contact-form-title">Send Us a Message</div>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Tell us about your trip..."
            value={formData.message}
            onChange={handleChange}
          />
          <button onClick={handleSubmit}>Send Message</button>
        </div>
      </div>
    </section>
  );
}

export default Contact;