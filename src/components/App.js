import React, { useEffect, useState } from 'react';
import { Route, Switch} from 'react-router-dom';
import Filters from './Filters';
import CharacterList from './CharacterList';
import Error from './Error';
import CharacterDetails from './CharacterDetails';
import getApiData from '../services/api';
import logo from  '../images/Rick_and_Morty.png';
import '../stylesheets/App.scss';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [searchCharacter, setSearch] = useState('');
  const [species, setSpecies] = useState('');
  const [status, setStatus] = useState('');

  //Receives the searched item and saves it on state
  const handleSearch = (searchItem) => {
    setSearch(searchItem);
  }

  useEffect(() => {
    getApiData().then(data => {
      setCharacters(data);
    });
  }, []);

  //Saves in local the searchCharacter
  useEffect(() => {
    localStorage.setItem('searchValue', JSON.stringify(searchCharacter));
  }, [searchCharacter]);

  //Pick the last search saved on localStorage and updates the searchCharacter
  useEffect(() => {
    const newSearch = JSON.parse(localStorage.getItem('searchValue'));
    if (newSearch) {
        setSearch(newSearch)
    }
  }, []);

//Filters the characters by name, status and species
  const filterCharacters = () => {
    sortedCharacters();
    return characters
    .filter(character => {
      const name = character.name.toLowerCase();
      return name.includes(searchCharacter);
    })
    .filter(character => {
      return character.status.toLowerCase().includes(status);
    })
    .filter(character => {
      return character.species.toLowerCase().includes(species);
    })
  }

  //Sort characters in alphabetical order
  const sortedCharacters = () => {
    characters.sort((a, b) => (a.name > b.name) ? 1 : -1);
  }

  //Clean from spaces the string and transform it to lower case
  const fixName = name => {
    if(name !== undefined) {
      name = name.toLowerCase().replace(' ', '');
    }
    return name;
  }

  //Reset all filters to empty status
  const handleReset = () => {
    setSearch('');
    setSpecies('');
    setStatus('');
  }

  //Set species with given species
  const handleSpecies = specie => {
    setSpecies(specie);
  }

  //Set status with given status
  const handleStatus = status => {
    setStatus(status);
  }

  //Sends the information to detailsClickComponent depending the character clicked
  const renderDetailsClick = props => {
    //First checks is there's a parameter and return the matching characters
    if(props.match.params) {
      const characterClicked = characters.find(character => {
        const routeCharacterName = props.match.params.characterName;
        const name = fixName(character.name);
        return name === routeCharacterName;
      })
      //Generates previous and next characters for surfing
      if(characterClicked) {
        const indexClicked = filterCharacters().findIndex(character => character.name === characterClicked.name);
        let previousCharacter = undefined;
        let nextCharacter = undefined;
        if(indexClicked === 0 && indexClicked === filterCharacters().length -1) {
          previousCharacter = undefined;
          nextCharacter = undefined;
        } else if(indexClicked === 0) {
          nextCharacter = filterCharacters()[indexClicked + 1].name;
        } else if(indexClicked === filterCharacters().length - 1) {
          previousCharacter = filterCharacters()[indexClicked - 1].name;
        } else {
          previousCharacter = filterCharacters()[indexClicked - 1].name;
          nextCharacter =  filterCharacters()[indexClicked + 1].name;
        }
        return (
        <CharacterDetails className="character"
          id={characterClicked.id}
          imgURL={characterClicked.image}
          name={characterClicked.name}
          alien={characterClicked.species === 'Alien' ? true : false}
          planet={characterClicked.origin.name}
          episodes={characterClicked.episode.length}
          status={characterClicked.status}
          characters={filterCharacters()}
          previousCharacter={fixName(previousCharacter)}
          nextCharacter={fixName(nextCharacter)}
          />
        );
      } else {
        return (
          <div>
            <Error searchCharacter={searchCharacter} />
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
            <Filters handleSearch={handleSearch}
            searchCharacter={searchCharacter}
            handleReset={handleReset}
            handleSpecies={handleSpecies}
            handleStatus={handleStatus}
            species={species}
            status={status} />
            <CharacterList
            characters={filterCharacters()}
            searchCharacter={searchCharacter}
            renderDetailsClick={renderDetailsClick}
            handleReset={handleReset}
            />
          </Route>
          <Route path="/details/:characterName" render={renderDetailsClick}  />
        </Switch>
      </main>
    </div>
  );
}
export default App;
