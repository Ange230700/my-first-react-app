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
  }
  
  const handleClickOnNextButton = () => {
  }
  
  return (
    <>
      <PokemonCard pokemon={pokemonList[0]} />
      <div className="buttons">
        <button onClick={handleClickOnPreviousButton}>Previous</button>
        <button onClick={handleClickOnNextButton}>Next</button>
      </div>
    </>
  );
}

export default App;
