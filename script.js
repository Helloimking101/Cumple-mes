let attemptCount = 0;

function checkPassword() {
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');
    
    if (password === '14') {
        window.location.href = "nueva_pagina.html"; // Redirigir a la nueva página
    } else {
        attemptCount++;
        message.style.color = 'red';
        message.innerText = 'Contraseña incorrecta';
        message.classList.add('visible'); // Mostrar mensaje
        
        if (attemptCount >= 3) {
            message.innerText += ' Pista: Es el número del día que comenzamos nuestra relación.';
        }
    }
}

// Función para la cuenta regresiva
function startCountdown() {
    const countdownElement = document.getElementById('countdown');
    const specialMessage = document.getElementById('special-message');
    const targetDate = new Date('July 14, 2024 00:00:00').getTime();

    const messages = [
        {time: 23 * 60 * 60 * 1000, text: "Ola mi cielo, ya queda menos de un día, debes estar atenta a las demás horas"},
        {time: (24 * 60 * 60 * 1000) + (8 * 60 * 60 * 1000) + (20 * 60 * 1000), text: "Error 404"},
        {time: 15 * 60 * 60 * 1000, text: "Amorcitooo, quería deshirte que te amo mucho y eri muy linda tu, vuelven cuando queden 7 horas shao"},
        {time: 7 * 60 * 60 * 1000, text: "Ola soy yo otra vez actualizando el estado, te amo musho como dije hace unas horas atrás y esho, ahora regresa cuando quede 1 hora shao"},
        {time: 1 * 60 * 60 * 1000, text: "KEDAAAAA POCO, AYUDAAAA SHAO, vuelve a los 5 minutos finales"},
        {time: 30 * 60 * 1000, text: "¡Media hora restante!"},
        {time: 5 * 60 * 1000, text: "Ola ¿Estas lista? porque yo siii, akiii vamos TIIIIIIII"},
    ];

    const countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `
            <div>${days}d</div>
            <div>${hours}h</div>
            <div>${minutes}m</div>
            <div>${seconds}s</div>
        `;

        // Mostrar mensajes especiales en los tiempos especificados
        for (const message of messages) {
            if (distance <= message.time && distance > message.time - 1000) {
                specialMessage.innerText = message.text;
                specialMessage.style.display = 'block';
                break;
            }
        }

        if (distance < 0) {
            clearInterval(countdownInterval);
            countdownElement.innerHTML = "La página está desbloqueada";
            document.getElementById('password-container').style.display = 'block';
            document.querySelector('.countdown-container').style.display = 'none';
        }
    }, 1000);
}

document.addEventListener('DOMContentLoaded', (event) => {
    startCountdown();
});
