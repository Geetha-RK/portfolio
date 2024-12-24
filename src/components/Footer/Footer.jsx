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
              <span>Credits</span>
                <p className='modal-para'>🌟<a href="https://www.flaticon.com/free-icons/linkedin" title="linkedin icons">Linkedin icons created by Sergei Kokota - Flaticon</a></p>
                <p className='modal-para'>🌟<a href="https://www.freepik.com/icon/cat_1089472#fromView=image_search_similar&page=1&position=0&uuid=fd0c4616-d7c1-4e40-8d12-cd9aea9b5193">Icon by Freepik</a></p>
                <p className='modal-para'>🌟<a href="https://www.freepik.com/icon/email_17094260#fromView=search&page=1&position=90&uuid=bc89cbdc-5dee-4c6e-a149-5c08fd94c968">Icon by Rahmat Sigit</a></p>
                <p className='modal-para'>🌟<a href="https://www.flaticon.com/uicons"> Uicons by Flaticon</a></p>
                <p className='modal-para'>🌟<a href="https://www.flaticon.com/authors/iconjam" title="Iconjam"> </a> <a href="https://www.flaticon.com/" title="Flaticon">Icons made by Iconjam from www.flaticon.com'</a></p>
              <button onClick={toggleModal} className="modal-close-btn">Close</button>
            </div>
          </div>
        )}

        </section>
    </div>
  )
}

export default Footer