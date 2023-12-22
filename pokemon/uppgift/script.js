document.addEventListener("DOMContentLoaded", function() {
    const playButton = document.getElementById("start-knapp");
    const pageToHide = document.getElementById("hide-on-play");
    const vänsterBild = document.getElementById("vänster-bild");
    const mittenBild = document.getElementById("mitten-bild");
    const nedreBild = document.getElementById("nedre-bild");
    const högerBild = document.getElementById("höger-bild");
    const pokemonBild = document.querySelector("#pokemon-bild");
    const lagKnapp = document.getElementById("lag-knapp");
    const teamPokemons = document.getElementById("team-pokemons");

    //gömmer allt för play  //gör en container för start en för team osv
        playButton.addEventListener("click", function() {
        pageToHide.style.display = "none";
        vänsterBild.style.display = "none";
        mittenBild.style.display = "none";
        nedreBild.style.display = "none";
        högerBild.style.display = "none"
        playButton.style.display = "none";
        pokemonBild.style.display = "none";
        lagKnapp.style.marginTop = "-580px";
        teamPokemons.style.display = "none";
    });

    lagKnapp.addEventListener("click", function() {
        const boxarElement = document.querySelector(".boxar");
        const pageToHide = document.getElementById("hide-on-play");
        const vänsterBild = document.getElementById("vänster-bild");
        const mittenBild = document.getElementById("mitten-bild");
        const nedreBild = document.getElementById("nedre-bild");
        const högerBild = document.getElementById("höger-bild");
        const playButton = document.getElementById("start-knapp");
        const pokemonBild = document.getElementById("pokemon-bild");
        const searchInput = document.getElementById("searchInput");
        

        // gömmer allt för myTeam
        [boxarElement, pageToHide, vänsterBild, mittenBild, nedreBild, högerBild, playButton, pokemonBild, searchInput]
            .forEach(element => element.style.display = "none");
    });
});


// sökrutan för api synlighet
function toggleVisibility() {
    var boxarElement = document.querySelector(".boxar");
    var computedStyle = window.getComputedStyle(boxarElement);

    if (computedStyle.display === "none") {
        boxarElement.style.display = "grid";
    } else {
        boxarElement.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const pokedex = document.getElementById('pokedex');
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');

    let allPokemon = []; // alla lagrade pokemons

    const fetchPokemon = (pokemonName) => {
        const promises = [];
            
        for (let i = 1; i <= 10; i++) { //lägg till ett annat api, för att få lista på alla pokemons url
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

            const lagKnappContainer = document.getElementById("lag-knapp-container");

            pokedex.addEventListener("click", function(event) {
                if (event.target.classList.contains("team-pokemons")) {
                    const selectedPokemon = event.target.closest(".card");
                    const clonedPokemon = selectedPokemon.cloneNode(true);
            
                    // Ta bort "ADD TO TEAM" -knappen från den klonade Pokémon för att förhindra oändlig rekursion
                    const addToTeamButton = clonedPokemon.querySelector(".team-pokemons");
                    addToTeamButton.remove();
            
                    if (lagKnappContainer) {
                        lagKnappContainer.appendChild(clonedPokemon);
                    } else {
                        console.error('lagKnappContainer is null');
                    }
                }
            });
        });
    };


    //mina klasser, ändra namn till pokemonList, göra en lista med dom element, creatElement, innerHtml plocka ut html genom quareselector
    const displayPokemon = (pokemon) => {
        const pokemonHTMLString = pokemon
            .map(
                (pokeman) => `
                    <li class="card">
                        <img class="card-image" src="${pokeman.image}"/>
                        <h2 class="card-title">${pokeman.id}. ${pokeman.name}</h2>
                        <button class="team-pokemons">ADD TO TEAM</button>
                    </li>
                `
            )
            .join('');
        pokedex.innerHTML = pokemonHTMLString;
    };

    // sök i api
    const searchForm = document.getElementById('searchForm');

    searchForm.addEventListener('submit', function(event) {
      event.preventDefault(); 
      const searchTerm = searchInput.value.toLowerCase();
      const filteredPokemon = allPokemon.filter(pokemon => pokemon.name.toLowerCase().includes(searchTerm));
      displayPokemon(filteredPokemon);
    });

    fetchPokemon();
    searchButton.addEventListener('click', function() {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredPokemon = allPokemon.filter(pokemon => pokemon.name.toLowerCase().includes(searchTerm));
        displayPokemon(filteredPokemon);
    });   
          
        });
    
