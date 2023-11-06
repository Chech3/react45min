import React from 'react'
import "./Card.css";
import { Link } from 'react-router-dom';
function Card({title = "Titulo por defecto", description="Informacion por defecto"}) {
  return (

    <div className='card'>
      <Link to={title}>
        <h2>{title}</h2>
      </Link>
        <p>{description}</p>
    </div>
  )
}

export default Card