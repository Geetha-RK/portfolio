import React from 'react'
import { useRef } from "react";
import './MyWork.scss'
import { work } from '../assets'
import {
    motion,
    useScroll,
    useSpring,
    useTransform
  } from "framer-motion";

  function useParallax(value, distance) {
    return useTransform(value, [0, 1], [-distance, distance]);
  }
  
  function Image({ imgSrc, id }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 300);
  
    return (
      <section className='sectioncl'>
        <div className="imagediv" ref={ref}>
        <img className="work" src={imgSrc} alt={`Image ${id}`} />
        </div>
        <motion.div className="detailsdiv" style={{ y }}>{`#00${id}`}</motion.div>
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
    <div className='scrollwork'>
      {Object.keys(work).map((key, index) => (
        <Image key={key} id={key} imgSrc={work[key]} />
      ))}
      <motion.div className="progress" style={{ scaleX }} />
    </div>
  )
}

export default Parallax