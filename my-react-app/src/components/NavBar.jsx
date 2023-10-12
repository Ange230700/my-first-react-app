import PropTypes from 'prop-types';

function NavBar({ pokemonList, setPokemonIndex }) {
    const handleClickOnPokemonButton = (arg) => {
        setPokemonIndex(arg)
    }
    return (
        <div className='buttons'>
            {
                pokemonList.map(
                    (pokemon, index) => (
                        <button key={pokemon.name} onClick={() => {
                            handleClickOnPokemonButton(index)
                        }}>{pokemon.name}</button>
                    )
                )
            }
        </div>
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