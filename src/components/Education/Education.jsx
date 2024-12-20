import React from 'react'
import './Education.scss'
import { useState, useEffect } from 'react';
import { div } from 'framer-motion/client';

const Education = () => {
  // Initialize state to track the visibility of each description
  const [isVisible, setIsVisible] = useState([]);
  useEffect(() => {
    const handleScroll = () => {
      const descriptions = document.querySelectorAll('.container__description');
      const updatedVisibility = [];

      descriptions.forEach((desc) => {
        const rect = desc.getBoundingClientRect();
        // Check if the description is in view (a bit higher than 100% of the window height)
        if (rect.top < window.innerHeight / 1.6) {
          updatedVisibility.push(true);
        } else {
          updatedVisibility.push(false);
        }
      });

      setIsVisible(updatedVisibility);
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', handleScroll);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('load', handleScroll);
    };
  }, []);

  return (
    <div className='experience'>

    <section className="box1">
      <h2 className='heading'>My <span>Experience..</span></h2>
        <div className='container'>
          <div className='container__row'>
            <section className="container__empty-col"></section>
              <section className="container__line">
                <span className='container__circle'></span>
              </section>
              <section className="container__contents">
                <time className='container__time'>2009-2013</time>
                <div className={`container__description ${isVisible[0] ? 'container__show' : ''}`}>
                  <h3 className='container__title'>Bachelor's degree in Information Technology</h3>
                  <p className='container__para'>Anna University, TamilNadu, India</p>
                </div>
              </section>  
          </div>

          <div className='container__row'>
            <section className="container__empty-col"></section>
              <section className="container__line"></section>
              <section className="container__contents">
                <time className='container__time'>2009-2013</time>
                <div className={`container__description ${isVisible[1] ? 'container__show' : ''}`}>
                  <h3 className='container__title'>Bachelor's degree in Information Technology</h3>
                  <p className='container__para'>Anna University, TamilNadu, India</p>
                </div>
              </section> 
          </div>

          <div className='container__row'>
            <section className="container__empty-col"></section>
              <section className="container__line"></section>
              <section className="container__contents">
                <time className='container__time'>2009-2013</time>
                <div className={`container__description ${isVisible[2] ? 'container__show' : ''}`}>
                  <h3 className='container__title'>Bachelor's degree in Information Technology</h3>
                  <p className='container__para'>Anna University, TamilNadu, India</p>
                </div>
              </section> 
          </div>

          <div className='container__row'>
            <section className="container__empty-col"></section>
              <section className="container__line">
                  <span className='container__circle container__circle--end'></span>
              </section>
              <section className="container__contents">
                <time className='container__time'>2009-2013</time>
                <div className={`container__description ${isVisible[3] ? 'container__show' : ''}`}>
                  <h3 className='container__title'>Bachelor's degree in Information Technology</h3>
                  <p className='container__para'>Anna University, TamilNadu, India</p>
                </div>
              </section> 
          </div>
        </div>
        </section>
        </div>
  )
}

export default Education