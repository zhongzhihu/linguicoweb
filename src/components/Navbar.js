import React from "react";
import linguicoLogo from "../linguicoLogo.png"; // Import your custom logo
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <img src={linguicoLogo} alt="Linguico Logo" className="navbar-logo" />
        </div>
        <div className="navbar-links">
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
