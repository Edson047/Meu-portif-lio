// script.js

const gear = document.getElementById("gear");

// Função para adicionar a classe de animação
function startGearAnimation() {
    gear.classList.add("spin");
}

window.onload = startGearAnimation;