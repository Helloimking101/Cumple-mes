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
    const targetDate = new Date('July 14, 2024 00:00:00').getTime();

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


function showWord(word) {
    alert(word);
}

