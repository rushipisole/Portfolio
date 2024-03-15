import React from 'react';
import './About.css';
import AboutBox from './AboutBox';


const About = () => {
  const downloadPdf = () => {
    const link = document.createElement('a');
    link.href = "./src/assets/Rushikesh_Pisole.pdf";
    link.download = 'Rushikesh_Pisole.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <section className="about container section" id='about'>
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">

        <img className='about__img' src="/src/assets/aboutImage3.jpg" alt=""  />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              I am Rushikesh Pisole, Web Developer form Marathwada Institute of Technology, Aurangabad. my grade is 8.14
            </p>
            <a onClick={downloadPdf} className='btn'>Download CV</a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Development</h3>
                <span className="skills__number">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentages development"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">UI/UX</h3>
                <span className="skills__number">40%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentages ui__design"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Editing</h3>
                <span className="skills__number">80%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentages photography"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutBox />
    </section>
  )
}

export default About
