import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import '../stylesheets/characterCard.scss';

const CharacterCard = props => {
  const renderDetailsClick = (ev) => {
    const id = ev.currentTarget.id;
    props.renderDetailsClick(id);
  }

  return (
    <article className="character__card__container" id={props.id} onClick={renderDetailsClick}>
      <Link to={`/details/${props.name.toLowerCase().replace(' ', '')}`} className="character__card__link">
        <img src={props.imgURL} className="character__card__img" alt={props.name} width="174px"/>
      </Link>
      <h3 className="character__card__name">{props.name}</h3>
      <p className="character__card__species">{props.species} </p>
    </article>
  );
}

CharacterCard.propTypes = {
  name: PropTypes.string.isRequired,
  imgURL: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
}

export default CharacterCard;