import React from 'react'
import './Home.css'
import HeaderSocials from './HeaderSocials'
import ScrollDown from './ScrollDown'
import Shapes from './Shapes'



const Home = () => {
  return (

    <section className="home container" id="home">
      <div className="intro">
        <img src="/image/Picture1.png" alt="" />
        <h1 className="home__name">Rushikesh Pisole</h1>
        <span className="home__education">I am a Front-End developer  </span>


        <HeaderSocials />

        <a href="#contact" className="button">Hire me!!</a>

        <ScrollDown />
      </div>
      <Shapes />
    </section>
  )
}

export default Home
