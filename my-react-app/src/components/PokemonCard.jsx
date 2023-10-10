import PropTypes from 'prop-types';

function PokemonCard({ pokemon }) {
    console.log(pokemon);

    if (pokemon.imgSrc) {
        return (
            <figure>
                <img
                    src={pokemon.imgSrc} alt={pokemon.name}
                />
                <figcaption>{pokemon.name}</figcaption>
            </figure>
        );
    }
}

PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
        imgSrc: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    }).isRequired
};


export default PokemonCard;

