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
                    <h3 className="about__title">200</h3>
                    <span className="about__subtitle">Cup of Coffee</span>
                </div>
            </div>
            <div className="about__box">
                <i className="about__icon icon-fire "></i>

                <div>
                    <h3 className="about__title">40</h3>
                    <span className="about__subtitle">Satisfied Clients</span>
                </div>
            </div>
            <div className="about__box">
                <i className="about__icon icon-fire"></i>

                <div>
                    <h3 className="about__title">45</h3>
                    <span className="about__subtitle">Friends</span>
                </div>
            </div>
        </div>
    )
}

export default AboutBox
