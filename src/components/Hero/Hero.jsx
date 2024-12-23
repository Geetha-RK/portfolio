import React, { useState } from "react";
import { assets } from "../assets";
import "./Hero.scss";

const Hero = () => {
  return (
    <div className="bglayer">
      <section className="box">
        <div className="hero">
          <div className="intro-div">
            <h1 className="greetings">Hello!</h1>
            <p className="intro">
              I'm <span>Geetha</span>. I am a Salesforce certified Software
              Developer. <br />
              <br />
              I'm passionate about building user-centric web apps. Currently
              focused on React.js, TypeScript and Next.js, I enjoy learning new
              technologies and creating seamless, impactful digital experiences.
              😊
              <br />
              <br /> Feel free to reach out anytime. Let's connect!
            </p>
            <a href={assets.resume} target="_blank" rel="noopener noreferrer">
              <button className="resume-btn">Resume</button>
            </a>
          </div>
          <div className="hero-image">
            <img className="girl" src={assets.girl} alt="girl" />
          </div>
        </div>
        <div className="connect">
          <a
            href="https://www.linkedin.com/in/geetha-rk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              width="35px"
              height="35px"
              src={assets.linkedinpng}
              alt="linkedin"
            />
          </a>

          <a
            href="mailto:geetha2work@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img width="40px" height="40px" src={assets.emailpng} alt="email" />
          </a>
          <a
            href="https://github.com/Geetha-RK"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              width="35px"
              height="35px"
              src={assets.githubpng}
              alt="github"
            />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Hero;
