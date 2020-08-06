import React from 'react';

const Filters = props => {

  const handleSearch = (ev) => {
    props.handleSearch(ev.currentTarget.value);
  }
  return (
  <div>
    <form>
      <label htmlFor="characterSearh">
        <input id="characterSearh" name="characterSearh" type="text" onChange={handleSearch}></input>
      </label>
    </form>
  </div>
  );
}

export default Filters;
