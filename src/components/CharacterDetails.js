import React from 'react';

const CharacterDetails = props => {
  console.log(props)
  return (
    <article className="character">
    <img src={props.imgURL} className="card__img" alt={props.name} />
    <h3 className="card__title">{props.name}</h3>
    <p className="card__description">{props.species} </p>
    </article>
  )
}

export default CharacterDetails;