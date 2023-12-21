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
  
      playButton.addEventListener("click", function() {
      pageToHide.style.display = "none";
      vänsterBild.style.display = "none";
      mittenBild.style.display = "none";
      nedreBild.style.display = "none";
      högerBild.style.display = "none"
      playButton.style.display = "none";
      pokemonBild.style.display = "none";
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

