import React from 'react'
import './Services.css'


const data = [
  {
    id: 2,
    image: "/image/service-2.svg",
    title: "Web Development",
    description: "Expertise in web development with HTML, CSS, JavaScript, ReactJS, and Bootstrap for frontend, alongside Django and core Java for backend. Experienced with Git/GitHub and AWS. Capable of developing dynamic web applications with a focus on user experience."
  },
  {
    id: 3,
    image: "/image/service-3.svg",
    title: "Editing",
    description:
      "Experienced in video editing, shooting, and graphic editing. Capable of producing engaging visual content tailored to project requirements."


  },
  {
    id: 1,
    image: "/image/service-1.svg",
    title: "UI/UX design",
    description:
      "Currently learning UI/UX with a strong foundation in its fundamentals. Committed to developing skills in creating intuitive and user-friendly digital experiences."
  },
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
