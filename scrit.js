const messages = [
  "Te amo muchísimo ❤️",
  "Gracias por estar en mi vida 🌟",
  "Mi vida, te amo con todo mi corazón ❤️",
  "Gracias por hacerme tan feliz cada día 🌟",
  "Eres lo más bonito que me ha pasado 💕",
  "Contigo todo tiene sentido 🤗",
  "Mi corazón late por ti 💘",
  "Cada momento a tu lado es único ✨",
  "No dejo de pensar en ti ni un segundo 💭",
  "Eres mi alegría diaria 😍",
  "Siempre quiero cuidarte y mimarte 🫶🏻",
  "Juntos somos invencibles 💞",
  "Tú eres mi mundo entero 🌎❤️",
  "Mi felicidad eres tú 🥰",
  "Quiero hacerte sonreír siempre 😘",
  "Mi amor por ti no tiene límites 💗",
  "Eres mi sueño hecho realidad 💫"

];

function createTextBubble() {
    const bubble = document.createElement("div");
    bubble.className = "text-bubble";
    bubble.innerText = messages[Math.floor(Math.random() * messages.length)];

    const left = Math.random() * 80 + 10;
    const top = Math.random() * 80 + 10;

    bubble.style.position = "absolute";
    bubble.style.left = left + "vw";
    bubble.style.top = top + "vh";

    const container = document.getElementById("bubbles-text");
    container.appendChild(bubble);

    // Ajustar posición si se sale de la pantalla
    setTimeout(() => {
        const rect = bubble.getBoundingClientRect();

        if (rect.right > window.innerWidth) {
            const newLeft = window.innerWidth - rect.width - 10;
            bubble.style.left = `${newLeft}px`;
        }

        if (rect.bottom > window.innerHeight) {
            const newTop = window.innerHeight - rect.height - 10;
            bubble.style.top = `${newTop}px`;
        }

        if (rect.left < 0) {
            bubble.style.left = "10px";
        }

        if (rect.top < 0) {
            bubble.style.top = "10px";
        }
    }, 10);

    // Hacer que desaparezca después de 5 segundos
    setTimeout(() => {
        bubble.remove();
    }, 8000);
}
setInterval(createTextBubble, 500);

