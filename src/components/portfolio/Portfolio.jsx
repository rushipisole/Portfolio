import React, { useState } from 'react'
import './Portfolio.css'
import Menu from './Menu'

const Portfolio = () => {

  const [items, setItems] = useState(Menu);
  const filterItem = (categoryItem) => {
    const updatedItem = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    });
    setItems(updatedItem)
  }

  return (
    <section className="work container section" id='portfolio'>
      <h2 className="section__title">Recent Work</h2>

      <div className="work__filters">
        <span className="work__item" onClick={() => setItems(Menu)}>Everything</span>
        <span className="work__item" onClick={() => { filterItem("Creative") }}>Creative</span>
        {/* <span className="work__item" onClick={() => { filterItem("Art") }}>Art</span> */}
        <span className="work__item" onClick={() => { filterItem("Design") }}>Design</span>
        {/* <span className="work__item" onClick={() => { filterItem("Branding") }}>Branding</span> */}
      </div>



      <div className="work__container grid">
        {items.map((elem) => {
          const { id, image, title, category, projectLink, github } = elem;
          return (
            <div className="work__card" key={id}>
              <div className="work__thumbnil">
                <img src={image} alt="" className="work__img" />
                <div className="work__mask"></div>
              </div>

              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>

              <a href={projectLink} className="work__button" target="_blank" rel="noopener noreferrer">
                <i className="icon-link work__button-icon"></i>
              </a>

              <a href={github} className="work__buttongit" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github work__button-icon"></i>
              </a>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio
