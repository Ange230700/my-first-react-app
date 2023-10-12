import PropTypes from 'prop-types';

function NavBar({ pokemonList, setPokemonIndex }) {
    const handleClickOnPokemonButton = (arg) => {
        setPokemonIndex(arg)
    }
    return (
        <>
            {
                pokemonList.map(
                    (pokemon, index) => (
                        <button key={pokemon.name} onClick={() => {
                            handleClickOnPokemonButton(index)
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