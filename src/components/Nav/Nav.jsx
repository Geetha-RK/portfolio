import React, { useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { assets } from "../assets";
import "./Nav.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    
    <div className="nav">
      <div className="nav__logo">
        {/* <DotLottieReact
          src="https://lottie.host/b39171cb-ee7c-4ec8-9959-e4ff4719f82d/YfFikknMIm.lottie"
          width="50px"
          height="50px"
          loop
          autoplay
        /> */}
        <img  className="logo" src={assets.logo} alt="logo" />
        {/* <div className="nav__myname">Geetha R K</div> */}
      </div>
      <nav className="navbar">
        {/* Hamburger Icon */}
        <div className="navbar__hamburger" onClick={toggleMenu}>
          <img
            src={assets.hamberger}
            alt="Hamburger Icon"
            className="navbar__hamburger-icon"
          />
        </div>
        {/* Navbar links */}
        
    <div className="navbar__icons-box">
    <ul className={`navbar__list ${isMenuOpen ? "active" : ""}`}>
      <li className="navbar__item">
        <a className="navbar__link" href="#about">
          <img src={assets.about} alt="about" /> 
          {/* <span className="navbar__link-text">About</span> */}
        </a>
      </li>
      <li className="navbar__item">
        <a className="navbar__link" href="#projects">
          <img src={assets.projects} alt="projects" />
        </a>
      </li>
      <li className="navbar__item">
        <a className="navbar__link" href="#experience">
          <img src={assets.experience} alt="experience" />
        </a>
      </li>
      <li className="navbar__item">
        <a className="navbar__link" href="#contact">
          <img src={assets.contact} alt="contact" />
        </a>
      </li>
    </ul>
    </div>
      </nav>
    </div>
    
  );
};

export default Nav;
