import React, { useState } from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { assets } from "../assets";
import "./Hero.scss";
import { Link } from 'react-router-dom'; 

const Hero = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="bglayer">
              <section className="box">
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
                        <ul className={`navbar__list ${isMenuOpen ? 'active' : ''}`}>
                            <li className="navbar__item">
                            <Link className="navbar__link" to="/about">About</Link> 
                            </li>
                            <li className="navbar__item">
                            <Link className="navbar__link" to="/project">Projects</Link>
                            </li>
                            <li className="navbar__item">
                            <Link className="navbar__link" to="/experience">Experience</Link>
                            </li>
                            <li className="navbar__item">
                            <Link className="navbar__link" to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <h1 className="greetings">Hello!</h1>
                    <p className="intro">My name is Geetha. I am a Software Engineer. It's such a pleasure to meet you! 😊 Feel free to reach out anytime—let's connect!</p>
                </div>
                <div className="hero-image">
                        <DotLottieReact
                                    src="https://lottie.host/406e9d7e-5cfe-4624-bccd-1bf9f73d27b0/BbwqFZ4KtT.lottie"
                                    width="25px"
                                    height="25px"
                                    color="#74579e"
                                    loop
                                    autoplay
                            />
                </div>
                
            </section>
        </div>    
    )
}

export default Hero;