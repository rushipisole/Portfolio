import React from 'react'
import './Home.css'



const HeaderSocials = () => {
    return (
        <div className="home__socials">
            <a href="" className='home__social-link' target='_blank'>
                <i className="fab fa-github work__button-icon"></i>
            </a>

            <a href="/image/Rushikesh_Pisole.pdf" className='home__social-link' target='_blank'>
                <i className="fa-solid fa-file"></i>
            </a>

            <a href="https://www.instagram.com/rishii_pisole/" className='home__social-link' target='_blank'>
                <i className="fa-brands fa-instagram"></i>
            </a>

            <a href="https://wa.me/+919011630711" className='home__social-link' target='_blank'>
                <i className="fa-brands fa-whatsapp"></i>
            </a>


            <a href="https://www.linkedin.com/in/rushikesh-pisole/" className='home__social-link' target='_blank'>
                <i className="fa-brands fa-linkedin"></i>
            </a>

        </div>
    )
}

export default HeaderSocials
