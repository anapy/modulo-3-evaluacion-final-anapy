import React from 'react';
import '../stylesheets/filters.scss';

const Filters = props => {
  const prevent = ev => ev.preventDefault();

  const handleSearch = (ev) => {
    const searchCharacter = ev.currentTarget.value.toLowerCase()
    props.handleSearch(searchCharacter);
  }
  return (
  <div>
    <form>
      <label htmlFor="characterSearh">
        <input id="characterSearh" name="characterSearh" type="text" value={props.searchCharacter} onChange={handleSearch} onClick={prevent}></input>
      </label>
    </form>
  </div>
  );
}

export default Filters;
