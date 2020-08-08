import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import '../stylesheets/characterDetails.scss';
import PropTypes from 'prop-types';
import alive from  '../images/alive.svg';
import dead from  '../images/dead.svg';
import alien from  '../images/alien.svg';
import human from  '../images/human.svg';
import rocket from  '../images/rocket.svg';

const CharacterDetails = props => {
  console.log(props);
    const indexUp = () => {
    let index = 0;
    if(parseInt(props.charIndex) + 1 < props.characters.length) {
      index = props.charIndex + 1;
    } else if (props.charIndex >= props.characters.length) {
      index = 0;
    }
    return index;
  }

  const indexDown = () => {
    let index = 0;
    if(props.charIndex !== 0) {
      index = props.charIndex - 1;
    } else if ((props.charIndex === 0)){
      index =  props.characters.length - 1;
    }
    return index;
  }

  return (
    <div className="detail__container">
      <article className="character__detail">
          <div className="return_btn_container">
            <Link to ="/" style={{ textDecoration: 'none', fontFamily:'inherit', color:'inherit' }}>
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
            {props.status}
          </p>
          <p className="detail_data character__detail__status"><b>Status:</b>
            <img className="character__detail__icon" src={`${props.status ? alive : dead }`} alt="status icon" height="30px"/>
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
  status: PropTypes.bool,
}

export default CharacterDetails;