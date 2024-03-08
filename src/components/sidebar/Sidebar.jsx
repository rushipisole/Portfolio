import React from 'react'
import './Sidebar.css'

const sidebar = () => {
  return (
    <aside className='aside'>
      <a href="#home" className="nav__logo"></a>
      <img src="./src/assets/logo.svg" alt="" />

      <nav className="nav">
        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <i className="icon-home"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="icon-user-following"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="services" className="nav__link">
                <i className="icon-briefcase"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#resume" className="nav__link">
                <i className="icon-graduation"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#resume" className="nav__link">
                <i className="icon-layers"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#blogs" className="nav__link">
                <i className="icon-note"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="icon-bubble"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>


      <div className="nav__footer">
        <span className='copyright'>&copy; Rushi Pisole.</span>
      </div>

    </aside>
  )
}

export default sidebar
