import React, { useEffect, useState } from 'react';
import '../stylesheets/App.scss';
import '../stylesheets/reset.scss';
import Filters from './Filters';
import CharacterList from './CharacterList';
import getApiData from '../services/api';
import logo from  '../images/Rick_and_Morty.png'

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [searchCharacter , setSearch] = useState('');

  const handleSearch = (searchItem) => {
    console.log(searchItem);
    setSearch(searchItem);
  }

  useEffect(() => {
    getApiData().then(data => {
      setCharacters(data);
    });
  }, []);

  const filterCharacters = () => {
    return characters.filter(character => {
      const name = character.name.toLowerCase();
      return name.includes(searchCharacter);
    })
  }

  console.log(filterCharacters());

  return (
    <div>
      <header>
        <div className="headerLogo__container"><img src={logo} alt="Rick and Morty Logo" className="headerLogo"></img></div>
      </header>
      <main className="App">
        <Filters handleSearch={handleSearch}/>
        <CharacterList characters={filterCharacters()} searchCharacter={searchCharacter}/>
      </main>
    </div>

  );
}

export default App;
