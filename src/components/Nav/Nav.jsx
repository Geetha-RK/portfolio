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
        <DotLottieReact
          src="https://lottie.host/b39171cb-ee7c-4ec8-9959-e4ff4719f82d/YfFikknMIm.lottie"
          width="50px"
          height="50px"
          loop
          autoplay
        />
        <div className="nav__myname">Geetha R K</div>
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
        <ul className={`navbar__list ${isMenuOpen ? "active" : ""}`}>
          <li className="navbar__item">
            <a className="navbar__link" href="#about">
              About
            </a>
          </li>
          <li className="navbar__item">
            <a className="navbar__link" href="#projects">
              Projects
            </a>
          </li>
          <li className="navbar__item">
            <a className="navbar__link" href="#experience">
              Experience
            </a>
          </li>
          <li className="navbar__item">
            <a className="navbar__link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
