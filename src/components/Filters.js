import React from 'react';
import '../stylesheets/filters.scss';

const Filters = props => {
  const handleSearch = (ev) => {
    ev.preventDefault();
    const searchCharacter = ev.currentTarget.value.toLowerCase()
    props.handleSearch(searchCharacter);
  }

  const inputEnterHandler = (ev) => {
    let keyCode = ev.keyCode;
    if (keyCode === 13) {
      ev.preventDefault();
    }
  }

  const handleReset = ev => {
    ev.preventDefault();
    props.handleReset();
  }

  const handleSpecies = ev => {
    props.handleSpecies(ev.currentTarget.value);
  }
  const handleStatus = ev => {
    props.handleStatus(ev.currentTarget.value);
  }

  return (
  <div>
    <form>
      <label htmlFor="characterSearh">
        <input placeholder="Search" id="characterSearh" name="characterSearh" type="text" value={props.searchCharacter} onChange={handleSearch} onKeyDown={inputEnterHandler}></input>
      </label>
      <button className="reset_btn" onClick={handleReset}>Reset search</button>
      <label for="species">
        <select id="species" name="species" value={props.species} onChange={handleSpecies}>
          <option value="" disabled selected hidden>Species</option>
          <option value="alien">Alien</option>
          <option value="human">Human</option>
        </select>
      </label>
      <label for="status">
        <select id="status" name="status" value={props.status} onChange={handleStatus}>
          <option value="" disabled selected hidden>Status</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
        </select>
      </label>
    </form>
  </div>
  );
}

export default Filters;
