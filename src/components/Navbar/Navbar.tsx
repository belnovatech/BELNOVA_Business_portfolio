import { useState } from "react";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Text Logo */}
        <a href="#home" className="logo" onClick={closeMenu}>
          <span>Belnova</span>
          <strong>Tech</strong>
        </a>

        {/* Navigation */}
        <nav className={`nav ${menuOpen ? "active" : ""}`}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#portfolio" onClick={closeMenu}>Portfolio</a>
          {/* <a href="#leadership" onClick={closeMenu}>Hire Developers</a> */}
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>

        <a href="#contact" className="quote-btn">
          Free Consultation
        </a>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={30}/> : <Menu size={30}/>}
        </button>

      </div>
    </header>
  );
}

export default Navbar;