import React from 'react';
import CharacterCard from './CharacterCard';


const CharacterList = props => {
  const characters = props.characters.map(character =>  {
    //console.log(character)
    return (
      <li>
        <CharacterCard
        imgURL={character.image}
        name={character.name}
        species={character.species}
        />
      </li>
    )
  })

  return (
    <div>
      <ul className="">
      {characters}
      </ul>
      CharacterList
      <CharacterCard />
    </div>
  );
}

export default CharacterList;