document.addEventListener("DOMContentLoaded", function() {
    const pokedex = document.getElementById('pokedex');
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');

    let allPokemon = []; // Store all fetched Pokémon

    const fetchPokemon = () => {
        const promises = [];
        for (let i = 1; i <= 150; i++) {
            const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
            promises.push(fetch(url).then((res) => res.json()));
        }
        Promise.all(promises).then((results) => {
            allPokemon = results.map((result) => ({
                name: result.name,
                image: result.sprites['front_default'],
                type: result.types.map((type) => type.type.name).join(', '),
                id: result.id
            }));
            displayPokemon(allPokemon);
        });
    };

    const displayPokemon = (pokemon) => {
        const pokemonHTMLString = pokemon
            .map(
                (pokeman) => `
                    <li class="card">
                        <img class="card-image" src="${pokeman.image}"/>
                        <h2 class="card-title">${pokeman.id}. ${pokeman.name}</h2>
                        <p class="card-subtitle">Type: ${pokeman.type}</p>
                    </li>
                `
            )
            .join('');
        pokedex.innerHTML = pokemonHTMLString;
    };

    const filterPokemon = (searchTerm) => {
        const filteredPokemon = allPokemon.filter((pokemon) =>
            pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        displayPokemon(filteredPokemon);
    };

    searchButton.addEventListener('click', () => {
        const searchTerm = searchInput.value.trim();
        filterPokemon(searchTerm);
    });

    // Fetch Pokémon data
    fetchPokemon();
});
