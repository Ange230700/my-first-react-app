import PropTypes from 'prop-types';

function PokemonCard({ pokemon }) {
    // console.log(pokemon);
    return ( pokemon &&
        pokemon.imgSrc ? (
            <figure>
                <img src={pokemon.imgSrc} alt={pokemon.name} />
                <figcaption>{pokemon.name}</figcaption>
            </figure>
        ) : (
            <>
                <p>???</p>
                <p>{pokemon.name}</p>
            </>
        )
    );
}

PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
        imgSrc: PropTypes.string,
        name: PropTypes.string.isRequired
    }).isRequired
};


export default PokemonCard;

