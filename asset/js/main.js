//Mail
//Chiedi all’utente la sua email,
//controlla che sia nella lista di chi può accedere,
//stampa un messaggio appropriato sull’esito del controllo.

//1 creiamo una var con un prompt per chiedere il nome della persona
var domanda = prompt("quale è la tua mail?");
console.log(domanda);
//controlliamo nella console il prompt


//2 creiamo un array con una lista di email
var listamail = ["alessandro@gmail.com", "luca@gmail.com", "matteo@gmail.com"];
console.log(listamail);

//3 creiamo un ciclo for per vedere se il nome scritto è presente nell'array:
console.log(listamail[0]);
console.log(listamail[1]);
console.log(listamail[2]);
var trovato = false;
for (var i = 0; i < listamail.length; i++) {
  if (listamail[i] == domanda) {
    trovato = true;
    trovato = domanda;
    // in caso positivo stampiamo un msg
    document.getElementById('nomeutente').innerHTML = "ciao " + domanda;
  }
}

console.log(trovato);

//4 se non è presente nella ns lista allora
//  stampiamo un altro messaggio.

if (trovato !== domanda) {
  document.getElementById('nomeutente').innerHTML = "spiacente " + domanda + " la tua mail non è sulla lista";
}


// gioco dei dadi

//Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
//Stabilire il vincitore, in base a chi fa il punteggio più alto.

//1 creiamo due variabili per i giocatori;

var giocatore
var computer



//ogni variabile genera un numero casuale compreso tra 1 e 6

giocatore = Math.floor(Math.random() * 6) + 1;
computer = Math.floor(Math.random() * 6) + 1;

//mostriamo i due numeri generati a video
document.getElementById('player').innerHTML = giocatore;
document.getElementById('comp').innerHTML = computer;
//a questo punto dobbiamo stabilire chi vince con varie ipotesi;
if (giocatore > computer) {
  document.getElementById('risultato').innerHTML = "vince il giocatore";
  console.log("vince il giocatore");
} else if (giocatore < computer) {
  document.getElementById('risultato').innerHTML = "vince il computer";
  console.log("vince il computer");
} else if (giocatore == computer) {
  document.getElementById('risultato').innerHTML = "parità";
  console.log("parità");
}
