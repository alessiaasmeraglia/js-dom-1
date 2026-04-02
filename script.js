// Dichiaro le variabili per selezionare gli elementi del DOM
const lamp = document.querySelector('img');
const btn = document.querySelector('#btn');
const warningTitle = document.querySelector('#warning');

// Aggiungo l'evento click al bottone
btn.addEventListener("click", function () {

    // Se la lampadina è accesa, la spengo
    if (btn.innerText.includes('Spegni')) {
        lamp.src = "./img/white_lamp.png";
        lamp.alt = "Lampadina spenta";
        btn.innerText = "Accendi";
        btn.style.backgroundColor = "transparent";
        btn.className = "accendi-spegni-btn";
        warningTitle.classList.remove("active");
    } else {
        // Altrimenti accendo la lampadina
        lamp.src = "./img/yellow_lamp.png";
        lamp.alt = "Lampadina accesa";
        btn.innerText = "Spegni";
        btn.style.backgroundColor = "red";
        btn.className = "on";
        energySaving();
    }
});

// Funzione che controlla se la lampadina viene accesa di giorno
function energySaving() {
    const currentTime = new Date();
    const currentHours = currentTime.getHours();

    // Se è giorno, mostro un avviso
    if (currentHours > 6 && currentHours < 17) {
        alert("Attenzione! Non serve accendere la lampadina");
        warningTitle.classList.add("active");
    }
}