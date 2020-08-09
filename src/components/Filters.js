import React from 'react';
import '../stylesheets/filters.scss';

const Filters = props => {
  const handleSearch = (ev) => {
    ev.preventDefault();
    const searchCharacter = ev.currentTarget.value.toLowerCase()
    props.handleSearch(searchCharacter);
  }

  //Prevents to load page when enter is push
  const inputEnterHandler = (ev) => {
    let keyCode = ev.keyCode;
    if (keyCode === 13) {
      ev.preventDefault();
    }
  }

  //Send reset instruction to App
  const handleReset = ev => {
    ev.preventDefault();
    props.handleReset();
  }

  //Sends specie selected to App
  const handleSpecies = ev => {
    props.handleSpecies(ev.currentTarget.value);
  }

  //Sends status selected to App
  const handleStatus = ev => {
    props.handleStatus(ev.currentTarget.value);
  }

  return (
  <div>
    <form className="character__form">
      <label htmlFor="characterSearh" className="character__form__fields">
        <input placeholder="Search" id="characterSearh" name="characterSearh" type="text" value={props.searchCharacter} onChange={handleSearch} onKeyDown={inputEnterHandler} className="character__form__text"></input>
      </label>
      <label htmlFor="species" className="character__form__fields">
        <select id="species" name="species" value={props.species} onChange={handleSpecies}>
          <option value="" disabled defaultValue hidden>Species</option>
          <option value="alien">Alien</option>
          <option value="human">Human</option>
        </select>
      </label>
      <label htmlFor="status" className="character__form__fields">
        <select id="status" name="status" value={props.status} onChange={handleStatus}>
          <option value="" disabled defaultValue hidden>Status</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
      </label>
      <button className="character__form__reset_btn" onClick={handleReset}>Reset search</button>
    </form>
  </div>
  );
}

export default Filters;
