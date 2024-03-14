import React from 'react'
import './About.css'

const AboutBox = () => {
    return (
        <div className="about__boxes grid">
            <div className="about__box">
                <i className="about__icon icon-fire"></i>

                <div>
                    <h3 className="about__title">5</h3>
                    <span className="about__subtitle">Projects Completed</span>
                </div>
            </div>
            <div className="about__box">
                <i className="about__icon icon-fire"></i>

                <div>
                    <h3 className="about__title">2</h3>
                    <span className="about__subtitle">Internships</span>
                </div>
            </div>
            <div className="about__box">
                <i className="about__icon icon-fire "></i>

                <div>
                    <h3 className="about__title">5</h3>
                    <span className="about__subtitle">Skill Set</span>
                </div>
            </div>
            <div className="about__box">
                <i className="about__icon icon-fire"></i>

                <div>
                    <h3 className="about__title">3</h3>
                    <span className="about__subtitle">Certifications</span>
                </div>
            </div>
        </div>
    )
}

export default AboutBox
