import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/characterDetails.scss';
import PropTypes from 'prop-types';
import alive from  '../images/alive.svg';
import dead from  '../images/dead.svg';
import alien from  '../images/alien.svg';
import human from  '../images/human.svg';
import rocket from  '../images/rocket.svg';


const CharacterDetails = props => {
  console.log(props);
  const handleClick = ev => {
    console.log(ev.currentTarget);
  }

  const indexUp = () => {
    console.log(props.characters.length);
    if((props.charIndex !== 0) && (props.charIndex!== props.characters.length)) {
      return props.charIndex;
    } else if () {

    }
    // props.characters[props.charIndex - 1].name.toLowerCase().replace(' ', '')
  }

  const indexDown = () => {
    if(props.charIndex !== 0) {
      return props.charIndex;
    } else if {
      
    }
  }

  return (
    <div className="detail__container">
      <article className="character__detail">
          <div className="return_btn_container">
            <Link to ="/" style={{ textDecoration: 'none', fontFamily:'inherit', color:'inherit' }}>
            <span className="return_btn">Return</span>
            </Link>
          </div>
          <div className="images_container">
            <Link to={`${props.characters[props.charIndex - 1].name.toLowerCase().replace(' ', '')}`} >
              <img src={rocket} alt="rocket" height="60px" className="rocket_left" onClick={handleClick}/>
              </Link>
            <img src={props.imgURL} className="character__img" alt={props.name} height="150px"/>
            <Link to={`${props.characters[props.charIndex + 1].name.toLowerCase().replace(' ', '')}`}>
            <img src={rocket} alt="rocket" height="60px" className="rocket_right"/>
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