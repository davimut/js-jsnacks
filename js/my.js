const buttonVerification = document.getElementById('verifica')
const listaInputElement = document.getElementById ('lista')
const TitleElement = document.getElementById ('Titolo') 
const resultElement = document.getElementById('risultato')


buttonVerification.addEventListener('click', function (event){
 event.preventDefault();

 lista = listaInputElement.value
 
 
if ( lista === '1')  {
          TitleElement.innerText = (' L’utente inserisce due numeri in successione, con due prompt. il software stampa il maggiore.')
          let numero = parseInt(prompt('inserisci un numero !'))
          let numero2 = parseInt(prompt('inserisci un altro numero!'))

          if(numero > numero2 ){
          resultElement.innerText = (numero)
          console.log(numero2)
         }else if (numero2 > numero) {
          console.log(numero2)
          resultElement.innerText = (numero2)
         }

}else if ( lista === '2') {
         TitleElement.innerText = (' L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga. ')
         let parola = (prompt('inserisci una parola!')) 
         let parola2 = (prompt('inserisci un altra parola!'))

         console.log(parola2.length)
         console.log(parola.length)
         if (parola.length > parola2.length) {
         resultElement.innerText = (parolaì + parola2)
         console.log(parola + parola2) 
         }else if (parola2.length > parola.length) {
         console.log(parola2 + parola)
         resultElement.innerText = (parola2 + parola)
         }


}else if ( lista === '3') {
    TitleElement.innerText = (' Il software deve chiedere per 10 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. ')
}else if ( lista === '4') {
    TitleElement.innerText = ('In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli  se può partecipare o no alla festa. ')
}else if ( lista === '5') {
    TitleElement.innerText = (' Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array. Stampa l array alla fine. ')
}else if ( lista === '6') {
    TitleElement.innerText = (' Fate generare un numero random da 0 a 10 al computer, e chiedete all "utente di inserire un suo numero. Se il numero scelto dall"utente è uguale al numero del computer informate l"utente che ha vinto, altrimenti ha perso.')
}else if ( lista === '7') {
    TitleElement.innerText = (' Scrivere un programma che stampi la tabellina del 2, fino al numero 1000. Modificate poi il programma in modo che venga chiesto all"utente il numero massimo consentito, e stampare tutta la tabellina del 2 fino al numero inserito. ')
}else if ( lista === '8') {
    TitleElement.innerText = ('Fate generare un numero random da 0 a 10 al computer, e chiedete all"utente di inserire un suo numero. Se il numero scelto dall"utente è uguale al numero del computer informate l"utente che ha vinto, altrimenti ha perso. A questo punto fate giocare l"utente, fintanto che non vince la partita contro il PC ')
}else if ( lista === '10') {
    TitleElement.innerText = (' Scrivere un programma a cui venga chiesto all utente di inserire numeri uno dopo l"altro. Quando l"utente scriverà 2 volte consecutive lo stesso numero allora il programma dovrà terminare.')
}else if ( lista === '11') {
    TitleElement.innerText = (' Creare una funzione che stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente. Una volta creata la funzione chiedere allutente di inserire N con un prompt e richiamate la funzione per dare la risposta all"utente.')
}else if ( lista === '12') {
    TitleElement.innerText = (' Crea una funzione chiamata sommaNumeri che dato un array di 10 numeri definito da voi nel codice, ne calcoli la loro somma e la restituisca come risultato.Utilizzare la funzione sommaNumeri per stampare il risultato ottenuto.')
}else if ( lista === '13') {
    TitleElement.innerText = (' Crea una funzione chiamata mediaAritmetica che prende in input un array di 10 numeri e restituisca la media aritmetica dei numeri contenuti nell array.  Utilizzare la funzione sommaNumeri precedentemente creata per calcolare la media dei 10 numeri che vanno chiesti all utente attraverso dei prompt.')
}else if ( lista === '14') {
    TitleElement.innerText = ('Chiedi un numero di 4 cifre all’utente. Crea e usa una funzione che calcola la somma di tutte le cifre che compongono il numero e ritorni il risultato. Usa questa funzione per stampare poi a video il risultato ottenuto.')
}else {
    resultElement = none
}
} )