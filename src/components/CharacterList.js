import React from 'react';
import CharacterCard from './CharacterCard';
import '../stylesheets/characterList.scss';

const CharacterList = props => {
  const characters = props.characters.map(character =>  {
    return (
      <li className="character" key={character.id}>
        <CharacterCard
        imgURL={character.image}
        name={character.name}
        species={character.species}
        />
      </li>
    )
  })

  return (
    <ul className="characterList">
    {characters}
    </ul>
  );
}

export default CharacterList;