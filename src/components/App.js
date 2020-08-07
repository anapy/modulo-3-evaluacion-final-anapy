import React, { useEffect, useState } from 'react';
import '../stylesheets/App.scss';
import '../stylesheets/reset.scss';
import Filters from './Filters';
import CharacterList from './CharacterList';
import CharacterDetails from './CharacterDetails';
import getApiData from '../services/api';
import logo from  '../images/Rick_and_Morty.png';
import { Route, Switch } from 'react-router-dom';


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

  const handleDetailsClick = props => {
    const routeCharacterName = props.match().input.toLowerCase().replace(' ', '');
    const characterClicked = characters.find(character => {
      const name = character.name.toLowerCase().replace(' ', '');
      return name.includes(routeCharacterName);
    })
    console.log(routeCharacterName);
    if(characterClicked) {
      return (
      <CharacterDetails className="character" key={characterClicked.id}
        name={characterClicked.name}
        species={characterClicked.species}
        planet={characterClicked.origin.name}
        episode={characterClicked.episode.lenght}
        status={characterClicked.status}
        />
      );
    } else {
      return (
      <li>No hay ningún personaje que coincida con la búsqueda</li>
      )
    }
  }

  return (
    <div>
      <header>
        <div className="headerLogo__container"><img src={logo} alt="Rick and Morty Logo" className="headerLogo"></img></div>
      </header>
      <main className="App">
        <Switch>
          <Route exact path="/">
            <Filters handleSearch={handleSearch} searchCharacter={searchCharacter}/>
            <CharacterList characters={filterCharacters()} searchCharacter={searchCharacter} handleDetailsClick={handleDetailsClick}/>
          </Route>
          <Route path="/details/:characterName" render={handleDetailsClick} />
        </Switch>
      </main>
    </div>
  );
}
export default App;
