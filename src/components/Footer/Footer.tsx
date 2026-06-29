import "./Footer.css";
import {
  MapPin,
  Phone,
  Mail,
  // Linkedin,
  // Facebook,
  // Instagram,
} from "lucide-react";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Company */}
        <div className="footer-column company">

          <h2>Belnova Tech</h2>

          <p>
            Empowering businesses with innovative software,
            cloud solutions, AI, web development and digital
            transformation services.
          </p>

        </div>

        {/* Quick Links */}
        <div className="footer-column">

          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>

        </div>

        {/* Services */}
        <div className="footer-column">

          <h3>Our Services</h3>

          <span>Web Development</span>
          <span>Mobile Apps</span>
          <span>Cloud Solutions</span>
          <span>AI Solutions</span>
          <span>UI/UX Design</span>

        </div>

        {/* Contact */}
        <div className="footer-column">

          <h3>Contact</h3>

          <div className="footer-contact">
            <MapPin size={18}/>
            <span>India</span>
          </div>

          <div className="footer-contact">
            <Phone size={18}/>
            <span>+91 73824 05380</span>
          </div>

          <div className="footer-contact">
            <Mail size={18}/>
            <span>info@belnovatech.com</span>
          </div>

          <div className="footer-social">

            <a href="#">
              {/* <Linkedin size={20}/> */}
            </a>

            <a href="#">
              {/* <Facebook size={20}/> */}
            </a>

            <a href="#">
              {/* <Instagram size={20}/> */}
            </a>

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 <strong>Belnova Tech</strong>. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;