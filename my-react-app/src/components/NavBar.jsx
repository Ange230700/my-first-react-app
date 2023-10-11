import PropTypes from 'prop-types';

function NavBar({ pokemonIndex, pokemonList, setPokemonIndex }) {


    const handleClickOnPreviousButton = () => {
        if (pokemonIndex > 0) {
            setPokemonIndex(pokemonIndex - 1); // pokemonIndex[1] is the setter function
        }
    }

    const handleClickOnNextButton = () => {
        if (pokemonIndex < pokemonList.length - 1) {
            setPokemonIndex(pokemonIndex + 1);
        }
    }

    return (
        <>
            {
                pokemonIndex === 0 ? (
                    <div className="buttons">
                        {/* <button onClick={handleClickOnPreviousButton}>Previous</button> */}
                        <button onClick={handleClickOnNextButton}>Next</button>
                    </div>
                ) : (
                    pokemonIndex === pokemonList.length - 1 ? (
                        <div className="buttons">
                            <button onClick={handleClickOnPreviousButton}>Previous</button>
                            {/* <button onClick={handleClickOnNextButton}>Next</button> */}
                        </div>
                    ) : (
                        <div className="buttons">
                            <button onClick={handleClickOnPreviousButton}>Previous</button>
                            <button onClick={handleClickOnNextButton}>Next</button>
                        </div>
                    )
                )
            }
        </>
    );
}

NavBar.propTypes = {
    pokemonIndex: PropTypes.number.isRequired,
    pokemonList: PropTypes.array.isRequired,
    setPokemonIndex: PropTypes.func.isRequired,
};

export default NavBar;