const minimo = 1;
const massimo = 6;
const numeroCasuale =
  Math.floor(Math.random() * (massimo - minimo + 1)) + minimo;
console.log("Il numero casuale del giocatore: " + numeroCasuale);


const numeroCasualeBot =
  Math.floor(Math.random() * (massimo - minimo + 1)) + minimo;
console.log("Il numero casuale del computer: " + numeroCasualeBot);

if (numeroCasuale > numeroCasualeBot) {
    console.log("Hai vinto")
} else if (numeroCasuale < numeroCasualeBot) {
    console.log("Hai perso")
} else {
    console.log("Hai pareggiato")
}