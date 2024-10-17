// se l'email è nella lista
// stampo positivo

// altrimenti 
// stampo negativo 


//  const email = [
//      "rosso@live.it",
//      "bianco@live.it",
//      "giallo@live.it",
//      "nero@live.it",
//      "bianco@live.it"
//    ];
//    const emailUser = prompt("Inserire Email").toLowerCase(); 
//    //.tolowercase il prompt viene scritto in minuscolo a prescindere

//    if  (email.includes(emailUser)) {
//    console.log(emailUser + " sei nella lista");
//  } else {
//    console.log(emailUser + " non è nella lista");
//  }



const email = [
    "rosso@live.it",
    "bianco@live.it",
    "giallo@live.it",
    "nero@live.it",
];
const emailUser = prompt("Inserire Email").toLowerCase();
let emailFound = false;

// Se campo email è vuoto OPPURE non contiene il simbolo @
// stampo messaggio nessuna email inserita
// altrimenti continuo il ciclo

if (emailUser === "" || !emailUser.includes("@") ) {
    alert("Errore inserimento email");
} else {

    //ciclo for per cercare ogni step l'email se è presente o meno 
    //se email è uguale a email inserita dell'user - emailfound = vero 
    //quindi stampo
    //altrimenti è negativo quindi non è nella lista

    for (let i = 0; i < email.length; i++) {
        if (email[i].toLowerCase() === emailUser) {
            emailFound = true;
        }
    }

    //continuo ciclo SE email trovata (emailFound risultato true)
    //altrimenti email non trovata

    if (emailFound) {
        console.log(`Sei nella lista, ${emailUser} puoi accedere!`);
    } else {
        console.log(`Spiacente ${emailUser}, la tua email non è nella lista.`);
    }
}




