// Dichiaro le variabili per selezionare gli elementi del DOM
const lamp = document.querySelector('.lamp');
const btn = document.querySelector('#btn');
const warningTitle = document.querySelector('#warning');

// Aggiungo l'evento change allo switch
btn.addEventListener("change", function () {

    // Se lo switch è attivo, accendo la lampadina
    if (btn.checked) {
        lamp.src = "./img/yellow_lamp.png";
        lamp.alt = "Lampadina accesa";
        energySaving();
    } else {
        // Se lo switch non è attivo, spengo la lampadina
        lamp.src = "./img/white_lamp.png";
        lamp.alt = "Lampadina spenta";
        warningTitle.classList.remove("active");
    }
});

// Funzione che controlla se la lampadina viene accesa di giorno
function energySaving() {
    const currentTime = new Date();
    const currentHours = currentTime.getHours();

    // Se è giorno, mostro un avviso
    if (currentHours > 6 && currentHours < 17) {
        alert("Attenzione! Non serve accendere la lampadina, rilevata luce sufficiente.");
        warningTitle.classList.add("active");
    }
}