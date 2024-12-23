import React from 'react'
import "./Contact.scss";


export const Contact = () => {
  return (
    <div className='about'>
        <section className="box1">
        <div className='waves2'> 
        </div>
        <h2 className='heading'>Let's Connect! Get in Touch</h2>
        <div className='cent'>
        <div className='connection'>
            <p className='connection__para'>I'm excited about the possibility of collaborating and working together. <br /><br />Feel free to reach out via email. I look forward to hearing from you!</p>
            <a href="mailto:youremail@example.com" className='connection__email'>
              <button className='connection__email'>Email</button> 
            </a>
        </div>
        </div>
        </section>

        </div>
  )
}
