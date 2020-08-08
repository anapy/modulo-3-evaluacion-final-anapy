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
  const [searchCharacter, setSearch] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  const handleSearch = (searchItem) => {
    setSearch(searchItem);
  }

  useEffect(() => {
    getApiData().then(data => {
      setCharacters(data);
    });
  }, []);

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

  const searchNewIndex = id => {
    console.log(id);
    const name = id.toLowerCase().replace(' ', '');
    const namesList = [];
    filterCharacters().map(character => namesList.push(character.name.toLowerCase().replace(' ', '')));
    const isSame = (element) => element === name;
    console.log(namesList.findIndex(isSame));
    setCharIndex(namesList.findIndex(isSame));
  }

  const fixName = name => {
    if(name !== undefined) {
      name = name.toLowerCase().replace(' ', '');
    }
    return name;
  }

  const renderDetailsClick = props => {
    if(props.match.params) {
      const characterClicked = characters.find(character => {
        const routeCharacterName = props.match.params.characterName;
        const name = character.name.toLowerCase().replace(' ', '');
        return name === routeCharacterName;
      })
      if(characterClicked) {
        const indexClicked = characters.findIndex(character => character.name === characterClicked.name);
        let previousCharacter = undefined;
        let nextCharacter = undefined;
        if(indexClicked === 0) {
          nextCharacter = characters[indexClicked + 1].name;
        } else if(indexClicked === characters.length - 1) {
          previousCharacter = characters[indexClicked - 1].name;
        } else {
          previousCharacter = characters[indexClicked - 1].name;
          nextCharacter =  characters[indexClicked + 1].name;
        }
        return (
        <CharacterDetails className="character"
          id={characterClicked.id}
          imgURL={characterClicked.image}
          name={characterClicked.name}
          alien={characterClicked.species === 'Alien' ? true : false}
          planet={characterClicked.origin.name}
          episodes={characterClicked.episode.length}
          status={characterClicked.status === 'Alive' ? true : false}
          characters={filterCharacters()}
          charIndex={charIndex}
          previousCharacter={fixName(previousCharacter)}
          nextCharacter={fixName(nextCharacter)}
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

  console.log(charIndex)
  return (
    <div>
      <header>
        <div className="headerLogo__container"><img src={logo} alt="Rick and Morty Logo" className="headerLogo"></img></div>
      </header>
      <main className="App">
        <Switch>
          <Route exact path="/">
            <Filters handleSearch={handleSearch} searchCharacter={searchCharacter} searchNewIndex={searchNewIndex}/>
            <CharacterList 
            characters={filterCharacters()}
            searchCharacter={searchCharacter}
            renderDetailsClick={renderDetailsClick}
            errorInfo={errorInfo}
            searchNewIndex={searchNewIndex}/>
          </Route>
          <Route path="/details/:characterName" render={renderDetailsClick}  />
        </Switch>
      </main>
    </div>
  );
}
export default App;
