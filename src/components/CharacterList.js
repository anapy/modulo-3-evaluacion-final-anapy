import React from 'react';
import CharacterCard from './CharacterCard';
import '../stylesheets/characterList.scss';
import Error from './Error';


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
        />
      </li>
    )
  })

  const errorInfo = (
    <Error searchCharacter={props.searchCharacter} handleReset={props.handleReset}/>
  )

  return (
    <ul className="characterList">
    {characters.length !== 0 ? characters : errorInfo}
    </ul>
  );
}

export default CharacterList;