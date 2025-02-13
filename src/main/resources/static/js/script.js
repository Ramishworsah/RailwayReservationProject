const text = "Welcome to the Railway Reservation System!";
const typewriterElement = document.getElementById("typewriter");
const typingSpeed = 100; // Time in milliseconds between each character
const pauseDuration = 2000; // Pause duration in milliseconds (2 seconds)

function typeWriter(text, index, callback) {
    if (index < text.length) {
        typewriterElement.innerHTML += text.charAt(index);
        setTimeout(() => typeWriter(text, index + 1, callback), typingSpeed);
    } else if (typeof callback === 'function') {
        setTimeout(callback, pauseDuration);
    }
}

function startTypewriter() {
    typewriterElement.innerHTML = "";
    typeWriter(text, 0, startTypewriter);
}

startTypewriter()