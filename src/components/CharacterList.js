import React from 'react';
import CharacterCard from './CharacterCard';
import '../stylesheets/characterList.scss';

const CharacterList = props => {
  const characters = props.characters.map(character =>  {
    return (
      <li className="character" key={character.id}>
        <CharacterCard
        id={character.id}
        imgURL={character.image}
        name={character.name}
        species={character.species}
        renderDetailsClick={props.renderDetailsClick}
        errorInfo={props.errorInfo}
        searchNewIndex={props.searchNewIndex}
        />
      </li>
    )
  })

  const errorInfo = (
    <div>
      <h4 className="errorText">There is no character matching your search<span className="errorText__word">"{props.searchCharacter}"</span></h4>
      <div>
        <iframe title="sad" src="https://giphy.com/embed/RH1IFq2GT0Oau8NRWX" width="200px" frameBorder="0" allowFullScreen></iframe>
      </div>
    </div>
  )

  return (
    <ul className="characterList">
    {characters.length !== 0 ? characters : errorInfo}
    </ul>
  );
}

export default CharacterList;