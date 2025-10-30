
// Snack 1
// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.



// let numero = prompt('inserisci un numero');
// if(numero % 2 === 0){
//     console.log(numero);
// } 
// else{
//     numero++;
//     console.log(numero);
// }    

    

// ---------------------------------------------------------------------------------
// Snack 2
// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.



// let parola1 = prompt('inserisci la prima parola:');
// let parola2 = prompt('inserisci la seconda parola:');

// if(parola1.length >= parola2.length ){
//     console.log(parola1 + ' ' + parola2);
// } else
//     console.log(parola2 + ' ' + parola1);


// ---------------------------------------------------------------------------------
// Snack 3
// Crea una variabile con un numero di 4 cifre e calcola la somma di tutte le cifre che 
// compongono il numero.



// let numero = prompt('inserisci un numero da 4 cifre:');
// let somma = 0;
// if (numero.length === 4){
//     for(let i=0; i<4; i++){
//         somma = somma + parseInt(numero[i]);
//     }
//     console.log('la somma di tutte e 4 le cifre è: ' + somma);
// }
// else
//     console.log('il numero ha più o meno di 4 cifre, ricaricare la pagina e inserirne uno appropriato.');



// ---------------------------------------------------------------------------------
// Snack 4
// Stampa il cubo dei primi N numeri,
// dove N è un numero indicato dall’utente.

let numUt = prompt('inserisci quanti dei primi numeri di cui fare il cubo:');
let cubo = [];

for(let i=0; i<numUt; i++){
    cubo[i]=i+1;
}
console.log( 'i numeri scelti sono: ' + cubo );

for(let i=0; i<numUt; i++){
    cubo[i]= cubo[i] ** 3;
}
console.log('ecco i numeri scelti ma al cubo: ' + cubo);





// ---------------------------------------------------------------------------------
// Snack 5
// Generatore di “nomi cognomi” casuali: il Grande Gatsby ha una lista di nomi e una lista di 
// cognomi, e da queste vuole generare una falsa lista di 5 invitati con nome e cognome.

// const nomi = [
//   "Albert",
//   "Leonardo",
//   "Marilyn",
//   "Michael",
//   "Serena",
//   "Elon",
//   "Frida",
//   "Steve",
//   "Beyoncé",
//   "David"
// ];

// const cognomi = [
//   "Einstein",
//   "da Vinci",
//   "Monroe",
//   "Jackson",
//   "Williams",
//   "Musk",
//   "Kahlo",
//   "Jobs",
//   "Knowles",
//   "Beckham"
// ];






// ---------------------------------------------------------------------------------
// Snack 6
// Crea due array che hanno un numero di elementi diversi.  Aggiungi elementi all’array che ha 
// meno elementi fino a quando ne avrà tanti quanti l’altro.


