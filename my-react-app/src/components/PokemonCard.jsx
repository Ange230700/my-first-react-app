import PropTypes from 'prop-types';


function PokemonCard(props) {
    return (
        props.pokemon.imgSrc ? (
            <figure>
                <img src={props.pokemon.imgSrc} alt={props.pokemon.name} />
                <figcaption>{props.pokemon.name}</figcaption>
            </figure>
        ) : (
            <>
                <p>???</p>
                <p>{props.pokemon.name}</p>
            </>
        )
    );
}

PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
        imgSrc: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    }).isRequired
};


export default PokemonCard;

