import React from 'react';
import { Link } from 'react-router-dom';

const CharacterDetails = props => {
  console.log(props)
  return (
    <Link to ="/">
      <article className="character">
        <img src={props.imgURL} className="card__img" alt={props.name} />
        <h3 className="card__title">{props.name}</h3>
        <p className="card__description">{props.species} </p>
      </article>
    </Link>
  )
}

export default CharacterDetails;