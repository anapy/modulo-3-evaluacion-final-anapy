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
    setSearch(searchItem);
  }

  useEffect(() => {
    getApiData().then(data => {
      setCharacters(data);
    });
  }, []);

  //Recoge la última búsqueda que se haya quedado pendiente en la página y actualiza el estado del el personaje buscado
  useEffect(() => {
    const newSearch = JSON.parse(localStorage.getItem('searchValue'));
    if (newSearch) {
        setSearch(newSearch)
    }
  }, []);

  //almacena en el local el campo personaje buscado
  useEffect(() => {
    localStorage.setItem('searchValue', JSON.stringify(searchCharacter));
  }, [searchCharacter]);

  const filterCharacters = () => {
    sortedCharacters();
    return characters.filter(character => {
      const name = character.name.toLowerCase();
      return name.includes(searchCharacter);
    })
  }

  const sortedCharacters = () => {
    characters.sort((a, b) => (a.name > b.name) ? 1 : -1);
  }

  const errorInfo = (
    <div>
      <h4 className="errorText">No hay ningún personaje que coincida con la búsqueda<span className="errorText__word">"{searchCharacter}"</span></h4>
      <div>
        <iframe title="sad" src="https://giphy.com/embed/RH1IFq2GT0Oau8NRWX" width="200px" frameBorder="0" allowFullScreen></iframe>
      </div>
    </div>
  )

  const handleDetailsClick = props => {
    if(props.match.params) {
      const characterClicked = characters.find(character => {
        const routeCharacterName = props.match.params.characterName;
        const name = character.name.toLowerCase().replace(' ', '');
        return name.includes(routeCharacterName);
      })
      if(characterClicked) {
        return (
        <CharacterDetails className="character" key={characterClicked.id}
          imgURL={characterClicked.image}
          name={characterClicked.name}
          alien={characterClicked.species === 'Alien' ? true : false}
          planet={characterClicked.origin.name}
          episodes={characterClicked.episode.length}
          status={characterClicked.status === 'Alive' ? true : false}
          />
        );
      } else {
        return (
          <div>
            {errorInfo}
          </div>
        )
      }
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
            <CharacterList characters={filterCharacters()} searchCharacter={searchCharacter} handleDetailsClick={handleDetailsClick} errorInfo={errorInfo}/>
          </Route>
          <Route path="/details/:characterName" render={handleDetailsClick} />
        </Switch>
      </main>
    </div>
  );
}
export default App;
