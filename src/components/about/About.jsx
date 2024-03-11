import React from 'react';
import './About.css';


const About = () => {
  return (
    <section className="about container section" id='about'>
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">

        <img src="./src/assets/avatar-2.svg" alt="" className='about__img' />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              I am Rushikesh Pisole, Web Developer form Marathwada Institute of Technology, Aurangabad. my grade is 8.14
            </p>
            <a href="" className='btn'>Download CV</a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Development</h3>
                <span className="skills__number development">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentages"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">UI/UX</h3>
                <span className="skills__number development">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentages ui__design"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Photography</h3>
                <span className="skills__number development">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentages"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
