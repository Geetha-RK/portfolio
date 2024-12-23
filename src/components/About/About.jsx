import React from 'react'
import "./About.scss";
import { assets, skillset } from '../assets';
import { img } from 'framer-motion/client';

const About = () => {
  return (
    <div className='about'>
        <section className="box1">
            <div className='waves2'> 
            </div>
            <h2 className='heading'>A Little <span>about</span> me..</h2>
            <div className="screen">
                    <div className="screen__header">
                        <div className="screen__header screen__header--left">
                            <div className="screen__header-button screen__header-button--close"></div>
                            <div className="screen__header-button screen__header-button--maximize"></div>
                            <div className="screen__header-button screen__header-button--minimize"></div>
                        </div>
                        <div className="screen__header screen__header--right">
                            <div className="screen__header-ellipsis"></div>
                            <div className="screen__header-ellipsis"></div>
                            <div className="screen__header-ellipsis"></div>
                        </div>
                    </div>
                    <div className="screen__content">
                        <div className='screen__content-left'>
                        <p className='screen__content-para'>Hi, I'm Geetha Rashinkar Kumar! My journey into technology started with a love for problem-solving and building impactful solutions. <br /><br /> I hold a Bachelor's in IT and, after 2+ years of experience, recently completed a Diploma in Software Engineering. <br /><br />I’ve gained experience across various web development projects, focusing on creating dynamic applications and collaborating with teams to deliver high-quality results.</p>
                        </div>
                        <div className='screen__content-right'>
                        <p className='screen__content-para'>Apart from coding, I love caring for plants, which brings me peace and balance. I’m also passionate about cooking, enjoying the creativity and relaxation it offers outside of my tech world. <br /><br />I'm always excited about new opportunities and collaborations, and I look forward to working with like-minded individuals to create innovative and impactful solutions.</p> 

                        </div>
                    </div>
            </div>
            <h2 className='heading'><span>Skills</span> I bring</h2>
            <div className='skillset'>
            {Object.keys(skillset).map((key, index) => (
                    <img key={index} src={skillset[key]} alt={`Skill ${index + 1}`} />
                ) 
                )}
                <br /><img className="cert" src={assets.pd1} alt="pd1" />
                <img className="cert" src={assets.admin} alt="admin" />
            </div>

        </section>
    </div>
  )
}

export default About