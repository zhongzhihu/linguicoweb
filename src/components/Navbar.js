import React, { useState } from "react";
import linguicoLogo from "../linguicoLogo.png";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-mobile-section">
          <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="navbar-brand">
            <img
              src={linguicoLogo}
              alt="Linguico Logo"
              className="navbar-logo"
            />
          </div>
        </div>
        <div className={`navbar-links ${isOpen ? "active" : ""}`}>
          <a href="#home">Home</a>
          <a href="#blog">Blog</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
