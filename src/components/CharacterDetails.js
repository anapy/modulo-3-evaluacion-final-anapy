import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/characterDetails.scss';


const CharacterDetails = props => {
  console.log(props)
  return (
      <article className="character_details">
        <Link to ="/" style={{ textDecoration: 'none', fontFamily:'inherit', color:'inherit' }}>
        <p>Return</p>
        </Link>
        <img src={props.imgURL} className="card__img" alt={props.name} />
        <h3 className="card__title">{props.name}</h3>
        <p className="card__description">{props.species}</p>
        <p className="card__description">{props.planet}</p>
        <p className="card__description">{props.episodes}</p>
        <p className="card__description">{props.status}</p>
      </article>
 
  )
}

export default CharacterDetails;