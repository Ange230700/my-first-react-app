const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
        name: "mew",
    },
];

function PokemonCard() {
    // for (const pokemon of pokemonList) {}
    const pokemon = pokemonList[0];
    // const pokemon = pokemonList[1];
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
    return <p>???</p>;

}

export default PokemonCard;