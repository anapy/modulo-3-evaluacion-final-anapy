import React from 'react';
import '../stylesheets/App.scss';
import '../stylesheets/reset.scss';
import Filters from './Filters';
import CharacterList from './CharacterList';


const App = () => {
  return (
  <div className="App">
    <div class="ouija_container">
      <Filters/>
      <CharacterList />
    </div>
  </div>
  );
}

export default App;
