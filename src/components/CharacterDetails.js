import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import alive from  '../images/alive.svg';
import dead from  '../images/dead.svg';
import unknown from  '../images/unknown.svg';
import alienIMG from  '../images/alien.svg';
import human from  '../images/human.svg';
import rocket from  '../images/rocket.svg';
import '../stylesheets/characterDetails.scss';


const CharacterDetails = props => {
  const {id, imgURL, name, alien, planet, episodes, status, previousCharacter, nextCharacter} = props;

  //checks status and sends img URL
  const detailsStatus = () => {
    let detailsStatus = '';
    if(status === "Alive") {
      detailsStatus = alive;
    } else if (status === "Dead") {
      detailsStatus = dead;
    } else {
      return unknown;
    }
    return detailsStatus;
  }
  return (
    <div className="character__detail__container">
      <article className={`character__detail ${id}`}>
          <div className="return__btn__container">
            <Link to ="/" className="return_link" >
            <span className="return_btn">Return</span>
            </Link>
          </div>
          <div className="images_container"   >
            <Link to={`${previousCharacter}`} >
              <img src={rocket} alt="rocketLeft" height="60px" className={`rocket_left  ${previousCharacter === undefined ? 'hidden' : ''}`} />
              </Link>
            <img src={imgURL} className="character__img" alt={name} height="150px"/>
            <Link to={`${nextCharacter}`} >
            <img src={rocket} alt="rocketRight" height="60px" className={`rocket_right  ${nextCharacter === undefined ? 'hidden' : ''}`}/>
            </Link>
          </div>
          <h3 className="character__detail_data name">{name}</h3>
          <p className="character__detail_data planet"><b>Planet</b>: {planet}</p>
          <p className="character__detail_data episodes"><b>Episodes</b>: {episodes} </p>
          <p className="character__detail_data species"><b>Specie:</b>
            <img className="character__detail__icon" src={`${alien ? alienIMG : human }`} alt="specie icon" height="30px"/>
          </p>
          <p className="character__detail_data character__detail__status"><b>Status:</b>
            <img className="character__detail__icon" src={detailsStatus()} alt="status icon" height="30px"/>
          </p>
      </article>
    </div>
  )
}
CharacterDetails.propTypes = {
  name: PropTypes.string.isRequired,
  imgURL: PropTypes.string.isRequired,
  alien: PropTypes.bool.isRequired,
  planet: PropTypes.string.isRequired,
  episodes: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
}

export default CharacterDetails;