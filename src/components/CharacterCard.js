import React from 'react';
import '../stylesheets/characterCard.scss';


const CharacterCard = props => {
  const handleDetailsClick = (ev) => {
    props.handleDetailsClick(ev.currentTarget.id);

  }

  return (
    <article className="character__container" id={props.name} onClick={handleDetailsClick}>
      <img src={props.imgURL} className="character__img" alt={props.name} width="174px"/>
      <h3 className="character__name">{props.name}</h3>
      <p className="character__species">{props.species} </p>
    </article>
  );
}

export default CharacterCard;