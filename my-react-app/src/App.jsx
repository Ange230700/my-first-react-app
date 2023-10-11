import { useState } from 'react';
import './App.css';
import PokemonCard from './components/PokemonCard';

function App() {

  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];

  const pokemonIndex = useState(0);
  console.log(pokemonIndex);

  const handleClickOnPreviousButton = () => {
    if (pokemonIndex[0] > 0) {
      pokemonIndex[1](pokemonIndex[0] - 1); // pokemonIndex[1] is the setter function
    }
  }

  const handleClickOnNextButton = () => {
    if (pokemonIndex[0] < pokemonList.length - 1) {
      pokemonIndex[1](pokemonIndex[0] + 1);
    }
  }

  return (
    pokemonIndex[0] === 0 ? (
      <>
        <PokemonCard pokemon={pokemonList[0]} />
        <div className="buttons">
          {/* <button onClick={handleClickOnPreviousButton}>Previous</button> */}
          <button onClick={handleClickOnNextButton}>Next</button>
        </div>
      </>
    ) : (
      pokemonIndex[0] === pokemonList.length - 1 ? (
        <>
          <PokemonCard pokemon={pokemonList[1]} />
          <div className="buttons">
            <button onClick={handleClickOnPreviousButton}>Previous</button>
            {/* <button onClick={handleClickOnNextButton}>Next</button> */}
          </div>
        </>
      ) : (
        <>
          <PokemonCard pokemon={pokemonList[1]} />
          <div className="buttons">
            <button onClick={handleClickOnPreviousButton}>Previous</button>
            <button onClick={handleClickOnNextButton}>Next</button>
          </div>
        </>
      )
    )
  );
}

export default App;
