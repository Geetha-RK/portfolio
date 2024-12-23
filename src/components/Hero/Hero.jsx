import React, { useState } from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { assets } from "../assets";
import "./Hero.scss";
import { Link } from 'react-router-dom'; 

const Hero = () => {

    return (
        <div className="bglayer">
              <section className="box">
              {/* <div className="leaves leaves2">
           <div className="leaves__container">
             <img className="leaves__img" src={assets.blobs1} />
           </div>
           <div className="leaves__container">
                 <img className="leaves__img" src={assets.blobs3} />
           </div>
           <div className="leaves__container">
                <img className="leaves__img" src={assets.blobs2} />
           </div>
           <div className="leaves__container">
                <img className="leaves__img" src={assets.blobs4} />
         </div>
          <div className="leaves__container">
                <img className="leaves__img" src={assets.blobs5} />
          </div>
            </div> */}
                <div className="hero">
                    <div className="intro-div">
                        <h1 className="greetings">Hello!</h1>
                        <p className="intro">I'm <span >Geetha</span>. I am a Software Developer. <br/><br/>I'm passionate about building user-centric web apps. Currently focused on React.js, TypeScript and Next.js, I enjoy learning new technologies and creating seamless, impactful digital experiences. 😊<br /><br /> Feel free to reach out anytime. Let's connect!</p>
                        <a href={assets.resume} target="_blank" rel="noopener noreferrer">
                            <button className="resume-btn">Resume</button>
                        </a>
                    </div>
                    <div className="hero-image">
                            {/* <DotLottieReact
                                        // src="https://lottie.host/406e9d7e-5cfe-4624-bccd-1bf9f73d27b0/BbwqFZ4KtT.lottie"
                                        src="https://lottie.host/baacc200-a03b-4766-94a7-e3013d812e92/1DkAAel6Ew.lottie"
                                        width="25px"
                                        height="25px"
                                        color="#74579e"
                                        loop
                                        autoplay
                                /> */}
                                <img className="girl" src={assets.girl} alt="girl" />
                    </div>
                   
                </div>
                <div className="connect">
                    <a href="https://www.linkedin.com/in/geetha-rk/" target="_blank" rel="noopener noreferrer">
                         <img width="35px" height="35px" src={assets.linkedinpng} alt="linkedin" />
                    </a>
                    
                    <a href="mailto:geetha2work@gmail.com" target="_blank" rel="noopener noreferrer">
                        <img width="40px" height="40px" src={assets.emailpng} alt="email" />
                    </a>
                    <a href="https://github.com/Geetha-RK" target="_blank" rel="noopener noreferrer">
                         <img width="35px" height="35px" src={assets.githubpng} alt="github" />
                    </a>
                    </div>
            </section>
        </div>    
    )
}

export default Hero;