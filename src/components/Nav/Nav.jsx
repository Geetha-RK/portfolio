import React, { useState } from "react";
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { assets } from "../assets";
import "./Nav.scss";
import { Link } from "react-router-dom";

const Nav = () => {
 

  return (
    
    <div className="nav">
      <div className="nav__logo">
        <img  className="logo" src={assets.logo} alt="logo" />
      </div>
      <nav className="navbar">

        
    <div className="navbar__icons-box">
    <ul className={`navbar__list`}>
      <li className="navbar__item">
        <a className="navbar__link" href="#about">
          <img src={assets.about} alt="about" /> 
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
