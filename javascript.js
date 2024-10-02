document.getElementById('yes-btn').addEventListener('click', function() {
    showOverlay("¡Genial! Estoy muy feliz de que hayas dicho 'Sí'. Hablemos pronto.");
});

document.getElementById('no-btn').addEventListener('click', function() {
    showOverlay("Lo entiendo. Respeto tu decisión. Siempre estarás en mi corazón.");
});

function showOverlay(message) {
    document.getElementById('response-message').innerText = message;
    document.getElementById('overlay').style.display = 'flex';
}

function closeOverlay() {
    document.getElementById('overlay').style.display = 'none';
}
