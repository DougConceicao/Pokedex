const pokemonNumber = document.querySelector('.pokemon__number');
const pokemonName = document.querySelector('.pokemon__name');

const fetchPokemon = async (pokemon) -> {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await APIResponse.json();
    return data;
}

const renderPokemon = async (pokemon) -> {

    const data = await fetchPokemon(pokemon);

    pokemonNumber.innerHTML = data.id;
    pokemonName.innerHTML = data.name;


}

fetchPokemon('25');