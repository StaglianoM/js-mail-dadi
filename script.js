const minimo = 1;
const massimo = 6;
const numeroCasuale =
  Math.floor(Math.random() * (massimo - minimo + 1)) + minimo;
console.log("Il numero casuale del giocatore 1: " + numeroCasuale);

const botMinimo = 1;
const botMassimo = 6;
const numeroCasualeBot =
  Math.floor(Math.random() * (botMassimo - botMinimo + 1)) + botMinimo;
console.log("Il numero casuale del computer è: " + numeroCasualeBot);

if (numeroCasuale > numeroCasualeBot) {
    console.log("Hai vinto")
} else if (numeroCasuale < numeroCasualeBot) {
    console.log("Hai perso")
} else {
    console.log("Hai pareggiato")
}