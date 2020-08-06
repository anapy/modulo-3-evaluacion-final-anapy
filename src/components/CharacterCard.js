import React from 'react';
import '../stylesheets/characterCard.scss';


const CharacterCard = props => {
  return (
    <article className="character__container"> 
      <img src={props.imgURL} className="character__img" alt={props.name} width="174px"/>
      <h3 className="character__name">{props.name}</h3>
      <p className="character__species">{props.species} </p>
    </article>
  );
}

export default CharacterCard;