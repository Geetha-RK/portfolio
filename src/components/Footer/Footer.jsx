import React from 'react'
import './Footer.scss'
import { assets } from "../assets";

const Footer = () => {
  return (
    <div className='footer'>
        <section className="box1">
        <div className='waves3'> 
            <div className='footer__content'>
            <div className="footer__logo">
                    <img  className="footer__img" src={assets.logo} alt="logo" />
            </div>
            <div className='footer__credits'>
                <button className='footer__button'>Credits</button>
            </div>
            </div>
        </div>
        
        </section>
    </div>
  )
}

export default Footer