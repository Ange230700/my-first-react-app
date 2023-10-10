import PropTypes from 'prop-types';

function PokemonCard(props) {
    console.log(props);

    if (props.pokemon.imgSrc) {
        return (
            <figure>
                <img
                    src={props.pokemon.imgSrc} alt={props.pokemon.name}
                />
                <figcaption>{props.pokemon.name}</figcaption>
            </figure>
        );
    }
    return <p>???</p>;
}

PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
        imgSrc: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    }).isRequired
};


export default PokemonCard;

