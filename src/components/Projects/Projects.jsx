import React from 'react';

const Projects = () => {
  return (
    <div className='projects'>
      <div className="projects__gallery">
        <div className="projects__img-box">
          <div className="projects__flip-card">
            <div className="projects__flip-card-front">
              <img className="projects__img" src="../../../assets/img1.png" alt="BrainFlix" />
            </div>
            <div className="projects__flip-card-back">
              <h3>BrainFlix</h3>
            </div>
          </div>
        </div>
        
        <div className="projects__img-box">
          <div className="projects__flip-card">
            <div className="projects__flip-card-front">
              <img className="projects__img" src="../../../assets/img2.png" alt="BandSite" />
            </div>
            <div className="projects__flip-card-back">
              <h3>BandSite</h3>
            </div>
          </div>
        </div>
        
        <div className="projects__img-box">
          <div className="projects__flip-card">
            <div className="projects__flip-card-front">
              <img className="projects__img" src="../../../assets/img3.png" alt="WellnessPath" />
            </div>
            <div className="projects__flip-card-back">
              <h3>WellnessPath</h3>
            </div>
          </div>
        </div>
        
        <div className="projects__img-box">
          <div className="projects__flip-card">
            <div className="projects__flip-card-front">
              <img className="projects__img" src="../../../assets/img4.png" alt="Coffeeshop" />
            </div>
            <div className="projects__flip-card-back">
              <h3>Coffeeshop</h3>
            </div>
          </div>
        </div>
        
        <div className="projects__img-box">
          <div className="projects__flip-card">
            <div className="projects__flip-card-front">
              <img className="projects__img" src="../../../assets/img5.png" alt="Bell-n-Bytes" />
            </div>
            <div className="projects__flip-card-back">
              <h3>Bell-n-Bytes</h3>
            </div>
          </div>
        </div>
        
        <div className="projects__img-box">
          <div className="projects__flip-card">
            <div className="projects__flip-card-front">
              <img className="projects__img" src="../../../assets/img6.png" alt="Instock" />
            </div>
            <div className="projects__flip-card-back">
              <h3>Instock</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
