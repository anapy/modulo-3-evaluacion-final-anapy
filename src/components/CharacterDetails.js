import React from 'react';
import {Link} from 'react-router-dom';
import '../stylesheets/characterDetails.scss';
import PropTypes from 'prop-types';
import alive from  '../images/alive.svg';
import dead from  '../images/dead.svg';
import unknown from  '../images/unknown.svg';
import alien from  '../images/alien.svg';
import human from  '../images/human.svg';
import rocket from  '../images/rocket.svg';


const CharacterDetails = props => {
  const status = () => {
    let status = '';
    if(props.status === "Alive") {
      status = alive;
    } else if (props.status === "Dead") {
      status = dead;
    } else {
      return unknown;
    }
    return status;
  }
  return (
    <div className="detail__container">
      <article className="character__detail">
          <div className="return_btn_container">
            <Link to ="/" className="return_link" >
            <span className="return_btn">Return</span>
            </Link>
          </div>
          <div className="images_container"   >
            <Link to={`${props.previousCharacter}`} >
              <img src={rocket} alt="rocket" height="60px" className={`rocket_left  ${props.previousCharacter === undefined ? 'hidden' : ''}`} />
              </Link>
            <img src={props.imgURL} className="character__img" alt={props.name} height="150px"/>
            <Link to={`${props.nextCharacter}`} >
            <img src={rocket} alt="rocket" height="60px" className={`rocket_right  ${props.nextCharacter === undefined ? 'hidden' : ''}`}/>
            </Link>
          </div>
          <h3 className="detail_data character__detail__name">{props.name}</h3>
          <p className="detail_data character__detail__planet"><b>Planet</b>: {props.planet}</p>
          <p className="detail_data character__detail__episodes"><b>Episodes</b>: {props.episodes} </p>
          <p className="detail_data character__detail__species"><b>Specie:</b>
            <img className="character__detail__icon" src={`${props.alien ? alien : human }`} alt="status icon" height="30px"/>
          </p>
          <p className="detail_data character__detail__status"><b>Status:</b>
            <img className="character__detail__icon" src={`${status()}`} alt="status icon" height="30px"/>
          </p>
      </article>
    </div>
  )
}
CharacterDetails.propTypes = {
  name: PropTypes.string,
  imgURL: PropTypes.string,
  human: PropTypes.bool,
  planet: PropTypes.string,
  episodes: PropTypes.number,
  status: PropTypes.string,
}

export default CharacterDetails;