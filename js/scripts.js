// Chiedi all'utente il nmero di km che vuole percorrere
let distance = prompt("Inserisci il numero di chilometri da percorrere:");
console.log("I chilometri da percorrere sono:", distance);

// Chiedi all'utente l'eta' del passeggero
let age = prompt("Inserisci l'età del passeggero:");
console.log("Gli anni del passeggero sono:", age);

// Calcola il prezzo base del biglietto in base ai km
let price = parsefloat(distance) * 0.21;
