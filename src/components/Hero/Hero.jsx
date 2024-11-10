import React from "react";
import { assets } from "../assets";
import "./Hero.scss";
const Hero = () => {
  return (
    <div>
      <section className="box">
        <div className="nav">
          <h1 className="name">&lt; Geetha Rashinkar Kumar /&gt;</h1>
          <h1 className="name2">&lt; Geetha R K /&gt;</h1>
          <ul className="nav__list">
            <li className="nav__item">
              <a className="nav__anchor" href="">
                About
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__anchor" href="">
                Projects
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__anchor" href="">
                Resume
              </a>
            </li>
          </ul>
        </div>
        <div className="container2">
          <div className="about">
            <p>Hello,</p>
            <p className="about__para2">
              I’m a <span>Web Developer</span> passionate about creating
              innovative, user-centered solutions. With a keen eye for detail
              and a drive to solve problems, I thrive on building impactful
              digital experiences. My goal is to collaborate, learn, and craft
              solutions that make a meaningful difference. Let’s create
              something great together!
            </p>
            <p className="about__para3">
              Let's Connect:{" "}
              <a href="">
                <img className="about__img" src={assets.linkedin} alt="linkedin" />
              </a>
              <a href="">
                <img className="about__img" src={assets.github} alt="github" />
              </a>
              <a href="">
                <img className="about__img" src={assets.email} alt="email" />
              </a>
            </p>
          </div>
          <div className='profile'><img className='profile__img' src={assets.profile} alt="Geetha Rashinkar Kumar" /></div>
          
        </div>
        <div className="leaves">
          <div className="leaves__container">
            <img className="leaves__img" src={assets.leaf1} />
          </div>
          <div className="leaves__container">
            <img className="leaves__img" src={assets.leaf2} />
          </div>
          <div className="leaves__container">
            <img className="leaves__img" src={assets.leaf3} />
          </div>
          <div className="leaves__container">
            <img className="leaves__img" src={assets.leaf4} />
          </div>
          <div className="leaves__container">
            <img className="leaves__img" src={assets.leaf1} />
          </div>
          <div className="leaves__container">
            <img className="leaves__img" src={assets.leaf10} />
          </div>
          <div className="leaves__container">
            <img className="leaves__img" src={assets.leaf7} />
          </div>
          <div className="leaves__container">
            <img className="leaves__img" src={assets.leaf8} />
          </div>
          <div className="leaves__container">
            <img className="leaves__img" src={assets.leaf9} />
          </div>
          <div className="leaves__container">
            <img className="leaves__img" src={assets.cherry1} />
          </div>
        </div>
        <div className="leaves leaves2">
          <div className="leaves__container">
            <img className="leaves__img" src={assets.leaf9} />
          </div>
          <div className="leaves__container">
            <img className="leaves__img" src={assets.leaf8} />
          </div>
          <div className="leaves__container">
            <img className="leaves__img" src={assets.leaf7} />
          </div>
          <div className="leaves__container">
            <img className="leaves__img" src={assets.leaf4} />
          </div>
          <div className="leaves__container">
            <img className="leaves__img" src={assets.leaf8} />
          </div>
          <div className="leaves__container">
            <img className="leaves__img" src={assets.leaf4} />
          </div>
          <div className="leaves__container">
            <img className="leaves__img" src={assets.leaf9} />
          </div>
          <div className="leaves__container">
            <img className="leaves__img" src={assets.leaf2} />
          </div>
          <div className="leaves__container">
            <img className="leaves__img" src={assets.leaf1} />
          </div>
        </div>
        <div className="leaves leaves3">
          <div className="leaves__container">
            <img className="leaves__img" src={assets.leaf4} />
          </div>
          <div className="leaves__container">
            <img className="leaves__img" src={assets.leaf10} />
          </div>
          <div className="leaves__container">
            <img className="leaves__img" src={assets.leaf9} />
          </div>
          <div className="leaves__container">
            <img className="leaves__img" src={assets.leaf7} />
          </div>
          <div className="leaves__container">
            <img className="leaves__img" src={assets.leaf8} />
          </div>
          <div className="leaves__container">
            <img className="leaves__img" src={assets.leaf2} />
          </div>
          <div className="leaves__container">
            <img className="leaves__img" src={assets.leaf5} />
          </div>
          <div className="leaves__container">
            <img className="leaves__img" src={assets.leaf3} />
          </div>
          <div className="leaves__container">
            <img className="leaves__img" src={assets.leaf1} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
