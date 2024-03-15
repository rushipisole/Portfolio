import React from 'react'
import './Services.css'


const data = [
  {
    id: 1,
    image: "/src/assets/service-1.svg",
    title: "UI/UX design",
    description: "Lorem askjbasibfasdjfasd van sv asdfasdfhqsd "
  },
  {
    id: 2,
    image: "/src/assets/service-2.svg",
    title: "Web Development",
    description: "Lorem askjbasibfasdjfasd van sv asdfasdfhqsd "
  },
  {
    id: 3,
    image: "/src/assets/service-3.svg",
    title: "Photography",
    description: "Lorem askjbasibfasdjfasd van sv asdfasdfhqsd "
  }
]
const Services = () => {
  return (
    <section className="services container section" id='services'>
      <h2 className="section__title"> Services</h2>

      <div className="services__container grid">
        {data.map(({ id, image, title, description }) => {
          return (
            <div className="services__card" key={id}>
              <img src={image} alt="" className='services__img' />

              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Services
