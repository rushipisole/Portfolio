import React from 'react'

const Card = (props) => {
    return (
        <div className="timeline__item">
            <i className={props.icon}></i>
            <span className='timeline__date'>{props.year}</span>
            <h3 className="timeline__title">{props.title}</h3>
            <h3  style={{fontSize:"17px"}}className="timeline__title">{props.title2}</h3>
            <p className="timeline__text">{props.desc}</p>
        </div>
    )
}

export default Card
