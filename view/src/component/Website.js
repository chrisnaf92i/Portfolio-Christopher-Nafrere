import React from 'react'
import { Link } from 'react-router-dom'

export default function Website(props) {
  return (
    <Link to={`/site-web/${props.data._id}`}>
      <article className='website'>
          <img className='website__image' alt="couverture du site web" src={props.data.imageUrl}/>
          <h2 className="website__name"> {props.data.name ? props.data.name :  "Nom du site web"} </h2>
      </article>
    </Link>
  )
}
