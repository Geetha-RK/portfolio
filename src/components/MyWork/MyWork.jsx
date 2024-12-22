import React from 'react'
import { useRef } from "react";
import './MyWork.scss'
import { proj } from '../assets'
import {
    motion,
    useScroll,
    useSpring,
    useTransform
  } from "framer-motion";

  function useParallax(value, distance) {
    return useTransform(value, [0, 1], [-distance, distance]);
  }
  
  function Image({ imgSrc, title, description, id }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 300);
  
    return (
      <section className='sectioncl'>
        <div className="imagediv" ref={ref}>
        <img className="work" src={imgSrc} alt={`Image ${id}`} />
        </div>
        <motion.div className="detailsdiv" style={{ y }}>
                  <div className="mywork">
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
                    <div className="mywork__content"> 
                      {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis id animi, qui doloremque culpa aspernatur laborum temporibus. Corporis, pariatur earum!</p>
                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, suscipit.</p>
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, recusandae?</p> */}
                      <h3>{title}</h3>
                      <p>{description}</p>
                    </div>
                    </div>
        </motion.div>
      </section>
    );
  }

const Parallax = () => {
    const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  

  return (
    <div className='experience'>
        <section className="box1">
        <div className='waves2'> 
                
                </div>
          <h2 className='proj'><span>Projects </span>+++</h2>
    <div className='scrollwork'>
      {Object.keys(proj).map((key, index) => {
        const { imgSrc, title, description } = proj[key];
        return(
        // <Image key={key} id={key} imgSrc={proj[key]} />
        <Image
                key={key}
                id={key}
                imgSrc={imgSrc}
                title={title}
                description={description}
              />
        );
      })}
      <motion.div className="progress" style={{ scaleX }} />
    </div>
    </section>
    </div>
  )
}

export default Parallax