// Seleziono gli elementi del DOM
const lamp = document.querySelector('.lamp');
const btn = document.querySelector('#btn');
const warningTitle = document.querySelector('#warning');

// Aggiungo l'evento click al bottone
btn.addEventListener('click', function () {

    // Se il bottone contiene "Spegni", la lampadina è accesa e va spenta
    if (btn.innerText.includes('Spegni')) {
        lamp.src = './img/white_lamp.png';
        lamp.alt = 'Lampadina spenta';
        btn.innerText = 'Accendi';
        btn.classList.remove('on');
        warningTitle.classList.remove('active');
    } else {
        // Altrimenti la lampadina è spenta e va accesa
        lamp.src = './img/yellow_lamp.png';
        lamp.alt = 'Lampadina accesa';
        btn.innerText = 'Spegni';
        btn.classList.add('on');
        energySaving();
    }
});

// Funzione che controlla l'orario attuale
function energySaving() {
    const currentTime = new Date();
    const currentHours = currentTime.getHours();

    // Se è giorno, mostro un avviso
    if (currentHours > 6 && currentHours < 18) {
        alert('Attenzione! Non serve accendere la lampadina, rilevata luce sufficiente.');
        warningTitle.classList.add('active');
    }
}