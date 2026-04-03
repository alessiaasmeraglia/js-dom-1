# Lampadina intelligente

## Descrizione
Questo esercizio consiste nella realizzazione di una piccola interfaccia web che simula una **lampadina intelligente**.

All'avvio della pagina, la lampadina è spenta e viene mostrato un bottone con il testo **Accendi**. Facendo clic sul bottone, la lampadina si accende cambiando immagine. Con un secondo clic, la lampadina si spegne e il bottone torna allo stato iniziale.

## Obiettivi dell'esercizio
- Manipolare il **DOM** con JavaScript
- Gestire gli **eventi click**
- Modificare attributi HTML come `src` e `alt`
- Cambiare testo e classi di un bottone
- Applicare stili dinamici con CSS

## Funzionalità implementate
- Accensione e spegnimento della lampadina
- Cambio del testo del bottone tra **Accendi** e **Spegni**
- Indicatore dello stato attuale della lampadina
- Contatore del numero di accensioni
- Warning se la lampadina viene accesa durante le ore diurne
- Warning se la lampadina viene accesa più di 2 volte
- Effetto luminoso sulla lampadina quando è accesa

## Struttura del progetto
- `index.html` → struttura della pagina
- `style.css` → stile grafico dell'interfaccia
- `script.js` → logica dell'applicazione
- `img/white_lamp.png` → immagine lampadina spenta
- `img/yellow_lamp.png` → immagine lampadina accesa

## Logica JavaScript
Il file `script.js` gestisce:
- il click sul bottone
- il cambio dell'immagine della lampadina
- l'aggiornamento dello stato
- l'incremento del contatore
- la visualizzazione dei messaggi di avviso

## Come avviare il progetto
1. Scaricare o clonare il progetto
2. Aprire la cartella in Visual Studio Code
3. Avviare il file `index.html` nel browser

## Bonus aggiunti
Oltre alla consegna base, sono state aggiunte alcune funzionalità extra:
- contatore delle accensioni
- stato ON/OFF della lampadina
- warning di risparmio energetico
- effetto glow sulla lampadina accesa

## Tecnologie usate
- HTML5
- CSS3
- JavaScript
