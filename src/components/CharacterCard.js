import React from 'react';
import '../stylesheets/characterCard.scss';
import { Link} from 'react-router-dom';



const CharacterCard = props => {
  const handleDetailsClick = (ev) => {
    props.handleDetailsClick(ev.currentTarget.id);

  }

  return (
    <article className="character__container" id={props.name} onClick={handleDetailsClick}>
      <Link to={`/character/${props.name.toLowerCase().replace(' ', '')}`} className="details_link">
      <img src={props.imgURL} className="character__img" alt={props.name} width="174px"/>
      </Link>
      <h3 className="character__name">{props.name}</h3>
      <p className="character__species">{props.species} </p>
    </article>
  );
}

export default CharacterCard;