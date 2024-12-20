import React from 'react'
import "./About.scss";

const About = () => {
  return (
    <div className='about'>
        <section className="box1">
            <h2 className='heading'>A Little <span>about</span> me..</h2>
            {/* <div className='vs-container'>
                <div className='vs-container__vsbox'>
                    <div className='vs-container__about'>
                        <p>Hi, I'm Geetha Rashinkar Kumar! My journey into the world of technology started with a deep fascination for problem-solving and the desire to build things that truly make a difference. <br /><br />As a passionate full-stack developer, I hold a Bachelor's degree in Information Technology, and after gaining hands-on experience for over 2 years, I recently completed a Diploma in Software Engineering to further strengthen my expertise.</p>
                         <p>I have worked on multiple projects, gaining experience in a wide range of web development tasks. Throughout my journey, I've focused on creating dynamic and efficient web applications, collaborating with teams to bring ideas to life. Each project has helped me refine my problem-solving abilities, attention to detail, and ability to adapt to new challenges, ensuring the delivery of high-quality results.</p>
                     <p>Apart from coding, I love caring for plants, which brings me peace and balance. I’m also passionate about cooking, enjoying the creativity and relaxation it offers outside of my tech world.</p> 
                        <p>Hi, I'm Geetha Rashinkar Kumar! My journey into technology started with a love for problem-solving and building impactful solutions. I hold a Bachelor's in IT and, after 2+ years of experience, recently completed a Diploma in Software Engineering.</p>
                        <p>I’ve worked on various projects, focusing on creating dynamic web applications and collaborating with teams to deliver high-quality results. Each project has refined my problem-solving skills and adaptability.</p> 
                        <p>Apart from coding, I enjoy caring for plants and cooking, which help me stay grounded and creative outside of tech.</p>
                    </div>
                </div>
            </div> */}
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
                        {/* <p className='screen__content-para'>Each project has helped me refine my problem-solving abilities, attention to detail, and ability to adapt to new challenges, ensuring the delivery of high-quality results.</p> */}
                        <p className='screen__content-para'>Apart from coding, I love caring for plants, which brings me peace and balance. I’m also passionate about cooking, enjoying the creativity and relaxation it offers outside of my tech world. <br /><br />I'm always excited about new opportunities and collaborations, and I look forward to working with like-minded individuals to create innovative and impactful solutions.</p> 
                        </div>
                    </div>
            </div>
        </section>
    </div>
  )
}

export default About