import React, { useEffect, useState } from 'react';
import '../stylesheets/App.scss';
import '../stylesheets/reset.scss';
import Filters from './Filters';
import CharacterList from './CharacterList';
import getApiData from '../services/api';

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getApiData().then(data => {
      setCharacters(data);
    });
  }, []);

  return (
  <div className="App">
    <Filters/>
    <CharacterList characters={characters}/>
  </div>
  );
}

export default App;
