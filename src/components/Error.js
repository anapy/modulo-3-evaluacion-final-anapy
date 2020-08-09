import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import '../stylesheets/error.scss';

const Error = props => {
  return (
    <div>
      <h4 className="errorText">
        There is no character matching your search
        <span className="errorText__word"> {props.searchCharacter}</span>
      </h4>
      <div>
        <img src="https://media1.tenor.com/images/e620a0fbd908b1427448972e843f8b00/tenor.gif?itemid=9603354" alt="sad_gif"></img>
      </div>
      <div className={`return_btn_container ${props.searchCharacter !== '' ? 'hidden' : ''}`}>
        <Link to ="/" className="return_btn">
          <span >Return</span>
        </Link>
      </div>
    </div>
  )
}

Error.propTypes = {
  searchCharacter: PropTypes.string,
}
export default Error;

