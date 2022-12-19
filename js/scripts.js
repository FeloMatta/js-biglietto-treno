// Chiedi all'utente il nmero di km che vuole percorrere
let distance = prompt("Inserisci il numero di chilometri da percorrere:");
console.log("I chilometri da percorrere sono:", distance);

// Chiedi all'utente l'eta' del passeggero
let age = prompt("Inserisci l'età del passeggero:");
console.log("Gli anni del passeggero sono:", age);

// Calcola il prezzo base del biglietto in base ai km
let price = parseFloat(distance) * 0.21;

// Se il passeggero ha meno di 18 anni, applica lo sconto del 20%
if (age < 18) {
    price *= 0.8;
}

// Se il passeggero ha più di 65 anni, applica lo sconto del 40%
else if (age >= 65) {
    price *= 0.6;
}
console.log("prezzo del biglietto:€", price);

// Formatta il prezzo finale con due decimali
let formattedPrice = price.toFixed(2);

// Mostra all'utente il prezzo del biglietto
alert(`Il prezzo totale del viaggio è di ${formattedPrice} €`)