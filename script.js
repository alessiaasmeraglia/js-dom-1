'use strict';

// Seleziono gli elementi del DOM
const lamp = document.querySelector('.lamp');
const btn = document.querySelector('#btn');
const warningTitle = document.querySelector('#warning');
const counterText = document.querySelector('#counter');
const statusText = document.querySelector('#status');

// Variabile che conta quante volte accendo la lampadina
let count = 0;

// Evento click del bottone
btn.addEventListener('click', function () {
    if (btn.innerText.includes('Spegni')) {
        turnOffLamp();
    } else {
        turnOnLamp();
    }
});

// Funzione per accendere la lampadina
function turnOnLamp() {
    lamp.src = './img/yellow_lamp.png';
    lamp.alt = 'Lampadina accesa';
    lamp.classList.add('on');

    btn.innerText = 'Spegni';
    btn.classList.add('on');

    statusText.innerText = 'Stato: ON';

    count++;
    counterText.innerText = `Numero di accensioni: ${count}`;

    showWarnings();
}

// Funzione per spegnere la lampadina
function turnOffLamp() {
    lamp.src = './img/white_lamp.png';
    lamp.alt = 'Lampadina spenta';
    lamp.classList.remove('on');

    btn.innerText = 'Accendi';
    btn.classList.remove('on');

    statusText.innerText = 'Stato: OFF';

    hideWarning();
}

// Funzione che decide quale warning mostrare
function showWarnings() {
    const currentTime = new Date();
    const currentHours = currentTime.getHours();

    if (count > 2) {
        warningTitle.innerText = '⚠️ Oggi hai acceso la luce più di 2 volte, cerca di risparmiare energia!';
        warningTitle.style.color = 'orange';
        warningTitle.classList.add('active');
    } else if (currentHours > 6 && currentHours < 18) {
        warningTitle.innerText = 'Attenzione! Non serve accendere la lampadina, rilevata luce sufficiente.';
        warningTitle.style.color = '#d62828';
        warningTitle.classList.add('active');
    } else {
        hideWarning();
    }
}

// Funzione per nascondere il warning
function hideWarning() {
    warningTitle.classList.remove('active');
}

