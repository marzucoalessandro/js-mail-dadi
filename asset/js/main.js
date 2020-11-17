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
    trovato = true
  }
  
}
console.log(trovato);




// in caso positivo stampiamo un msg

//4 se non è presente nella ns lista allora
// nn stampiamo il messaggio.
