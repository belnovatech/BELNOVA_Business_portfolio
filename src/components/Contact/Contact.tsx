import "./Contact.css";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  Send,
  ExternalLink,
} from "lucide-react";

function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="contact-glow glow-one"></div>
      <div className="contact-glow glow-two"></div>

      <div className="section-title">

        <span>CONTACT US</span>

        <h2>
          Let's Build
          <span> Together</span>
        </h2>

        <p>
          Whether you're launching a startup, scaling an enterprise,
          or building your next digital product, our experts are here
          to help turn your vision into reality.
        </p>

      </div>

      <div className="contact-grid">

        {/* ================= FORM ================= */}

        <div className="contact-form glass">

          <h3>Send us a Message</h3>

          <div className="input-group">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
            />
          </div>

          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="john@example.com"
            />
          </div>

          <div className="input-group">
            <label>Company Name</label>
            <input
              type="text"
              placeholder="Your Company"
            />
          </div>

          <div className="input-group">
            <label>Project Details</label>
            <textarea
              rows={6}
              placeholder="Tell us about your project..."
            />
          </div>

          <button className="send-btn">
            Send Message
            <Send size={18} />
          </button>

        </div>

        {/* ================= RIGHT SIDE ================= */}

        <div className="contact-info">

          {/* Office */}

          <div className="glass info-card">

            <MapPin size={28} />

            <h3>Belnova Technologies</h3>

            <p>
              4th & 5th Floor,
              <br />
              Plot No. 4,
              <br />
              Doc Bhavan,
              <br />
              2-91/12/4/NR,
              <br />
              Kondapur,
              <br />
              Hyderabad,
              Telangana 500081
            </p>

            <a
              href="https://www.google.com/maps/search/?api=1&query=4th%20%26%205th%20Floor%20Plot%20No%204%20Doc%20Bhavan%20Kondapur%20Hyderabad%20500081"
              target="_blank"
              rel="noreferrer"
              className="map-link"
            >
              Open in Google Maps
              <ExternalLink size={16} />
            </a>

          </div>

          {/* Email */}

          <div className="glass info-card">

            <Mail size={28} />

            <h3>Email</h3>

            <a
              href="mailto:info@belnovatech.com"
              className="contact-link"
            >
              info@belnovatech.com
            </a>

          </div>

          {/* Phone */}

          <div className="glass info-card">

            <Phone size={28} />

            <h3>Phone</h3>

            <a
              href="tel:+917382405380"
              className="contact-link"
            >
              +91 73824 05380
            </a>

          </div>

          {/* Working Hours */}

          <div className="glass info-card">

            <Clock size={28} />

            <h3>Working Hours</h3>

            <p>
              Monday - Friday
              <br />
              9:00 AM - 6:00 PM
            </p>

          </div>

          {/* Buttons */}

          <div className="contact-buttons">

            <a
              href="https://wa.me/917382405380"
              target="_blank"
              rel="noreferrer"
              className="whatsapp-btn"
            >
              WhatsApp Us
            </a>

            <a
              href="mailto:info@belnovatech.com"
              className="meeting-btn"
            >
              Book Meeting
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;