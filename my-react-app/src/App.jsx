import './App.css';
import PokemonCard from './components/PokemonCard';
// import MyTitle from './components/MyTitle';
// import SayHello from './components/SayHello';
// import WeatherIcon from './components/WeatherIcon';

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

  return <PokemonCard pokemon={pokemonList[0]}/>;
    
  // return SayHello(
  //   {
  //     name: 'Wilder'
  //   }
  // );
}

export default App;
