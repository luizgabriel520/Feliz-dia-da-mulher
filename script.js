document.addEventListener("DOMContentLoaded", function () {
    function criarFlor() {
        const flor = document.createElement("img");
        const tipoFlor = Math.random() < 0.5 ? "Rosa.png" : "Girassol.png"; // Alterna entre rosa e girassol
        flor.src = tipoFlor;
        flor.classList.add("flor");
        document.querySelector(".chuva").appendChild(flor);

        // Define posição inicial aleatória
        flor.style.left = Math.random() * window.innerWidth + "px";
        flor.style.animationDuration = Math.random() * 3 + 2 + "s"; // Duração entre 2 e 5 segundos

        // Remove a flor após a animação
        setTimeout(() => {
            flor.remove();
        }, 5000);
    }

    // Criar flores a cada 500ms
    setInterval(criarFlor, 500);
});
