import React, { useState } from 'react'
import './Footer.scss'
import { assets } from "../assets";

const Footer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false); 

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
      };

  return (
    <div className='footer'>
        <section className="box1">
        <div className='waves3'> 
            <div className='footer__content'>
            <div className="footer__logo">
                    <img  className="footer__img" src={assets.logo} alt="logo" />
            </div>
            <div className='footer__credits'>
                <button className='footer__button'  onClick={toggleModal}>Credits</button>
            </div>
            </div>
            <div className='footer__para'>This project was created with love by Geetha Rashinkar Kumar ❤️❤️❤️</div>
        </div>
        
        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h2>Credits</h2>
              <p>This project was created with love by [Your Name].</p>
              <button onClick={toggleModal} className="modal-close-btn">Close</button>
            </div>
          </div>
        )}
        
        </section>
    </div>
  )
}

export default Footer