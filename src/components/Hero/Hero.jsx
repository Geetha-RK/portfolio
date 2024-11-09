import React from 'react'
import { assets } from "../assets"
import "./Hero.scss"
const Hero = () => {
  return (
    <div>
        <section className='box'>
            <div className='nav'>
                <h1 className='name'>Geetha Rashinkar Kumar</h1>
                <h1 className='name2'>Geetha R K</h1>
                <ul className='nav__list'>
                    <li className='nav__item'><a className="nav__anchor" href="">About</a></li>
                    <li className='nav__item'><a className="nav__anchor" href="">Projects</a></li>
                    <li className='nav__item'><a className="nav__anchor" href="">Resume</a></li>
                </ul>
            </div>

            <div className="leaves">
                <div className='leaves__container'><img className="leaves__img" src={assets.leaf1} /></div>
                <div className='leaves__container'><img className="leaves__img" src={assets.leaf2} /></div>
                <div className='leaves__container'><img className="leaves__img" src={assets.leaf3} /></div>
                <div className='leaves__container'><img className="leaves__img" src={assets.leaf4} /></div>
                <div className='leaves__container'><img className="leaves__img" src={assets.leaf1} /></div>
                <div className='leaves__container'><img className="leaves__img" src={assets.leaf10} /></div>
                <div className='leaves__container'><img className="leaves__img" src={assets.leaf7} /></div>
                <div className='leaves__container'><img className="leaves__img" src={assets.leaf8} /></div>
                <div className='leaves__container'><img className="leaves__img" src={assets.leaf9} /></div>
            </div>
            <div className="leaves leaves2">
                <div className='leaves__container'><img className="leaves__img" src={assets.leaf9} /></div>
                <div className='leaves__container'><img className="leaves__img" src={assets.leaf8} /></div>
                <div className='leaves__container'><img className="leaves__img" src={assets.leaf7} /></div>
                <div className='leaves__container'><img className="leaves__img" src={assets.leaf4} /></div>
                <div className='leaves__container'><img className="leaves__img" src={assets.leaf8} /></div>
                <div className='leaves__container'><img className="leaves__img" src={assets.leaf4} /></div>
                <div className='leaves__container'><img className="leaves__img" src={assets.leaf9} /></div>
                <div className='leaves__container'><img className="leaves__img" src={assets.leaf2} /></div>
                <div className='leaves__container'><img className="leaves__img" src={assets.leaf1} /></div>
            </div>
            <div className="leaves leaves3">
                <div className='leaves__container'><img className="leaves__img" src={assets.leaf4} /></div>
                <div className='leaves__container'><img className="leaves__img" src={assets.leaf10} /></div>
                <div className='leaves__container'><img className="leaves__img" src={assets.leaf9} /></div>
                <div className='leaves__container'><img className="leaves__img" src={assets.leaf7} /></div>
                <div className='leaves__container'><img className="leaves__img" src={assets.leaf8} /></div>
                <div className='leaves__container'><img className="leaves__img" src={assets.leaf2} /></div>
                <div className='leaves__container'><img className="leaves__img" src={assets.leaf5} /></div>
                <div className='leaves__container'><img className="leaves__img" src={assets.leaf3} /></div>
                <div className='leaves__container'><img className="leaves__img" src={assets.leaf1} /></div>
            </div>
        </section>
    </div>
  )
}

export default Hero