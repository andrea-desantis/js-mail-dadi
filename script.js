// Mail
// Crea un array con delle email di chi può acedere.
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// Non è necessario provvedere alla validazione delle email.
// NON USARE INCLUDES!

// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia 
// per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?

// Consigli del giorno:
// 1. scriviamo sempre prima dei commenti in italiano per capire 
//    cosa vogliamo fare
// 2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa 
//    vogliamo fare
// 3. si ma noi cosa vogliamo fare?
// 4. torniamo a scrivere in italiano
// 5. proviamo ad immaginare le operazioni che vogliamo far 
//    svolgere al nostro programma così come lo faremmo "a mano"


// 1) MAIL---------------------------------------------

// let email = ['gmail','alice','hotmail','live','outlook','yahoo'];
// let utente = prompt('inserire la propria email');

// for(let i=0; i<6; i++){

//     if(utente.indexOf(email[i]) !== -1 ){
        
//         console.log( 'account ' + email[i] + ' supportato');
//         i=6;
//     } 
//     else if(i===5){
//         console.log('account non supportato');
//     }
        

// }

// 2) DADI----------------------------------------------
let computer = Math.floor(Math.random() * 6) + 1;
let utente = Math.floor(Math.random() * 6) + 1;
console.log('i numeri usciti sono ' + computer + '(computer) e ' + utente + '(utente)' );
if(computer > utente){
    console.log('hai perso!');
}

if(computer < utente){
    console.log('hai vinto!');
}

if(computer === utente){
    console.log('patta!');
}

