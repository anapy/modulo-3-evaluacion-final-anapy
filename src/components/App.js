import React, { useEffect, useState } from 'react';
import '../stylesheets/App.scss';
import Filters from './Filters';
import CharacterList from './CharacterList';
import CharacterDetails from './CharacterDetails';
import getApiData from '../services/api';
import logo from  '../images/Rick_and_Morty.png';
import { Route, Switch, Link } from 'react-router-dom';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [searchCharacter, setSearch] = useState('');

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
      <h4 className="errorText">No hay ningún personaje que coincida con la búsqueda
        <span className="errorText__word">{searchCharacter}</span>

      </h4>
      <div>
        <iframe title="sad" src="https://giphy.com/embed/RH1IFq2GT0Oau8NRWX" frameBorder="0"></iframe>
      </div>
      <div className="return_btn_container">
      <Link to ="/" style={{ textDecoration: 'none', fontFamily:'inherit', color:'inherit' }}>
        <span className="return_btn">Return</span>
      </Link>
      </div>
    </div>
  )

  const fixName = name => {
    if(name !== undefined) {
      name = name.toLowerCase().replace(' ', '');
    }
    return name;
  }

  const handleReset = () => {
    setSearch('');
  }

  const renderDetailsClick = props => {
    if(props.match.params) {
      const characterClicked = characters.find(character => {
        const routeCharacterName = props.match.params.characterName;
        const name = character.name.toLowerCase().replace(' ', '');
        return name === routeCharacterName;
      })
      if(characterClicked) {
        const indexClicked = filterCharacters().findIndex(character => character.name === characterClicked.name);
        let previousCharacter = undefined;
        let nextCharacter = undefined;
        if(indexClicked === 0) {
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
          status={characterClicked.status === 'Alive' ? true : false}
          characters={filterCharacters()}
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

  return (
    <div>
      <header>
        <div className="headerLogo__container"><img src={logo} alt="Rick and Morty Logo" className="headerLogo"></img></div>
      </header>
      <main className="App">
        <Switch>
          <Route exact path="/">
            <Filters handleSearch={handleSearch} searchCharacter={searchCharacter} handleReset={handleReset}/>
            <CharacterList 
            characters={filterCharacters()}
            searchCharacter={searchCharacter}
            renderDetailsClick={renderDetailsClick}
            errorInfo={errorInfo}
            />
          </Route>
          <Route path="/details/:characterName" render={renderDetailsClick}  />
        </Switch>
      </main>
    </div>
  );
}
export default App;
