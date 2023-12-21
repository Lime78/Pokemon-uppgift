    document.addEventListener("DOMContentLoaded", function() {
    const playButton = document.getElementById("start-knapp");
    const pageToHide = document.getElementById("hide-on-play");
    const vänsterBild = document.getElementById("vänster-bild");
    const mittenBild = document.getElementById("mitten-bild");
    const nedreBild = document.getElementById("nedre-bild");
    const högerBild = document.getElementById("höger-bild");
    const väljLag = document.querySelector("#välj-lag");
    const pokemonBild = document.querySelector("#pokemon-bild");
    const searchInput = document.querySelector("#searchInput")
  

    //gömmer allt för play
      playButton.addEventListener("click", function() {
      pageToHide.style.display = "none";
      vänsterBild.style.display = "none";
      mittenBild.style.display = "none";
      nedreBild.style.display = "none";
      högerBild.style.display = "none"
      playButton.style.display = "none";
      pokemonBild.style.display = "none";
      lagKnapp.style.display = "none";
    });
    const lagKnapp = document.getElementById("lag-knapp");

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

function toggleVisibility() {
    var boxarElement = document.querySelector(".boxar");
    var computedStyle = window.getComputedStyle(boxarElement);

    if (computedStyle.display === "none") {
        boxarElement.style.display = "grid";
    } else {
        boxarElement.style.display = "none";
    }
}
