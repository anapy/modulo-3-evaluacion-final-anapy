import React from 'react';
import '../stylesheets/filters.scss';

const Filters = props => {
  const handleSearch = (ev) => {
    ev.preventDefault();
    const searchCharacter = ev.currentTarget.value.toLowerCase()
    props.handleSearch(searchCharacter);
  }

  function inputEnterHandler(ev) {
    let keyCode = ev.keyCode;
    if (keyCode === 13) {
      ev.preventDefault();
    }
  }

  return (
  <div>
    <form>
      <label htmlFor="characterSearh">
        <input placeholder="Search" id="characterSearh" name="characterSearh" type="text" value={props.searchCharacter} onChange={handleSearch} onKeyDown={inputEnterHandler}></input>
      </label>
    </form>
  </div>
  );
}

export default Filters;
