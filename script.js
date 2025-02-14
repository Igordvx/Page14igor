const heartContainer = document.getElementById("heart-container");
const mensaje = document.getElementById("mensaje");

function crearCorazon() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    // Posición y tamaño aleatorio
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";
    heart.style.color = ["red", "pink", "#ff66b2"][Math.floor(Math.random() * 3)];
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";

    // Al hacer clic, cambia el mensaje y explota
    heart.addEventListener("click", () => {
        mensaje.innerText = "❤️ Te amo Daira🫶🏻 ❤️";
        heart.classList.add("explota");
        setTimeout(() => heart.remove(), 500);
    });

    heartContainer.appendChild(heart);

    // Elimina el corazón después de 5s
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Genera corazones cada 400ms
setInterval(crearCorazon, 400);