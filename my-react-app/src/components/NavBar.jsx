import PropTypes from 'prop-types';

function NavBar({ pokemonList }) {
    return (
        <>
            {
                pokemonList.map(
                    (pokemon) => (
                        <button key={pokemon.name}>{pokemon.name}</button>
                    )
                )
            }
        </>
    );
}

NavBar.propTypes = {
    pokemonList: PropTypes.array.isRequired
};

export default NavBar;