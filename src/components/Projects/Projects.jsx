import React, { useEffect, useRef } from 'react';
import './Projects.scss';

const Projects = () => {
  // Use refs to target the slider and slides
  const sliderRef = useRef(null);
  const prevBtnRef = useRef(null);
  const nextBtnRef = useRef(null);

  useEffect(() => {
    const nextBtn = nextBtnRef.current;
    const prevBtn = prevBtnRef.current;
    const slider = sliderRef.current;

    // JavaScript logic for Next button
    nextBtn.addEventListener('click', () => {
      const slides = slider.querySelectorAll('.projects-container__slides');
      slider.appendChild(slides[0]); // Move the first slide to the end
    });

    // JavaScript logic for Prev button
    prevBtn.addEventListener('click', () => {
      const slides = slider.querySelectorAll('.projects-container__slides');
      slider.prepend(slides[slides.length - 1]); // Move the last slide to the front
    });

    // Cleanup the event listeners when component unmounts
    return () => {
      nextBtn.removeEventListener('click', () => {});
      prevBtn.removeEventListener('click', () => {});
    };
  }, []);

  return (
    <div className="projects-container">
      <div className="projects-container__slider" ref={sliderRef}>
        <div className="projects-container__slides" style={{ backgroundImage: 'url(../../../assets/img1.png)' }}>
          <div className="projects-container__contents"></div>
        </div>

        <div className="projects-container__slides" style={{ backgroundImage: 'url(../../../assets/img2.png)' }}>
          <div className="projects-container__contents"></div>
        </div>

        <div className="projects-container__slides" style={{ backgroundImage: 'url(../../../assets/img4.png)' }}>
          <div className="projects-container__contents"></div>
        </div>

        <div className="projects-container__slides" style={{ backgroundImage: 'url(../../../assets/img7.png)' }}>
          <div className="projects-container__contents"></div>
        </div>

        <div className="projects-container__slides" style={{ backgroundImage: 'url(../../../assets/img5.png)' }}>
          <div className="projects-container__contents"></div>
        </div>

        <div className="projects-container__slides" style={{ backgroundImage: 'url(../../../assets/img6.png)' }}>
          <div className="projects-container__contents"></div>
        </div>
      </div>

      <div className="projects-buttons">
        <span className="projects-buttons__prev" ref={prevBtnRef}></span>
        <span className="projects-buttons__next" ref={nextBtnRef}></span>
      </div>
    </div>
  );
};

export default Projects;
