import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import '../stylesheets/characterCard.scss';

const CharacterCard = props => {
  const { id, imgURL, name, species, renderDetailsClick } = props;
  const renderDetailsClickCard = (ev) => {
    const id = ev.currentTarget.id;
    renderDetailsClick(id);
  }

  return (
    <article className="character__card__container" id={id} onClick={renderDetailsClickCard}>
      <Link to={`/details/${name.toLowerCase().replace(' ', '')}`} className="character__card__link">
        <img src={imgURL} className="character__card__img" alt={name} width="174px"/>
      </Link>
      <h3 className="character__card__name">{name}</h3>
      <p className="character__card__species">{species} </p>
    </article>
  );
}

CharacterCard.propTypes = {
  name: PropTypes.string.isRequired,
  imgURL: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
}

export default CharacterCard;