import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <h1 className="logo"><img src="/milkytea.png"/>Milky Tea Scan</h1>

      {/* Desktop menu */}
      <nav className="nav-links">
        <a href="#about">About</a>
        <a href="#join">Join Us</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Hamburger button */}
      <button
        className="hamburger"
        onClick={() => setOpen(!open)}
        aria-label="Menu"
      >
        ☰
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="mobile-menu">
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#join" onClick={() => setOpen(false)}>Join Us</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </div>
      )}
    </header>
  );
}

export default Navbar;
