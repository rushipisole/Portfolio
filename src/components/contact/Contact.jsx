import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <section className="contact container section" id='contact'>
      <h2 className="section__title">Get In Touch</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's talk about everything!👋</h3>
          <p className="contact__details">Send me an mail.</p>
        </div>

        <form method="POST" action="https://formspree.io/f/xkndzarn" className="contact__form">
          <div className="contact__form-group">

            <div className="contact__form-div">
              <input type="text" className="contact__form-input" placeholder='Enter your name' name="username" required />
            </div>

            <div className="contact__form-div">
              <input type="email" className="contact__form-input" placeholder='Enter your email' name="email" required />
            </div>
          </div>

          <div className="contact__form-div">
            <input type="text" className="contact__form-input" placeholder='Enter your subject' name="subject" required />
          </div>

          <div className="contact__form-div contact__form-area">
            <textarea name="message" id="" cols="30" rows="10" className='contact__form-input ' placeholder='Write your message' required ></textarea>
          </div>

          <button className="btn">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
