import PropTypes from 'prop-types';

function NavBar({ pokemonList, setPokemonIndex }) {
    const handleClickOnPokemonButton = (arg) => {
        setPokemonIndex(arg)
    }
    const handleClickOnPikachuButton = () => {
        setPokemonIndex(pokemonList.indexOf(pokemonList.find((pokemon) => pokemon.name === "pikachu")));
        alert("Pika pikachu!!!");
    }
    return (
        <>
            {
                pokemonList.map(
                    (pokemon, index) => (
                        <button key={pokemon.name} onClick={() => {
                            (
                                index ===
                                    pokemonList.indexOf(
                                        pokemonList.find(
                                            (pokemon) => pokemon.name === "pikachu"
                                        )
                                    )
                            )
                              ? 
                                handleClickOnPikachuButton()
                                  : 
                                handleClickOnPokemonButton(index);
                        }}>{pokemon.name}</button>
                    )
                )
            }
        </>
    );
}

NavBar.propTypes = {
    pokemonList: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            imgSrc: PropTypes.string
        })
    ),
    setPokemonIndex: PropTypes.func.isRequired
};

export default NavBar;