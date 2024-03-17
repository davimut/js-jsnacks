const buttonVerification = document.getElementById('verifica')
const listaInputElement = document.getElementById('lista')
const TitleElement = document.getElementById('Titolo')
const resultElement = document.getElementById('risultato')


buttonVerification.addEventListener('click', function (event) {
    event.preventDefault();

    lista = listaInputElement.value


    if (lista === '1') {
        TitleElement.innerText = (' L’utente inserisce due numeri in successione, con due prompt. il software stampa il maggiore.')
        
        let numero = parseInt(prompt('inserisci un numero !'))
        let numero2 = parseInt(prompt('inserisci un altro numero!'))
        if (numero > numero2) {
            resultElement.innerText = (numero)
            console.log(numero2)
        } else if (numero2 > numero) {
            console.log(numero2)
            resultElement.innerText = (numero2)
        }
    } else if (lista === '2') {
        TitleElement.innerText = (' L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga. ')
       
        let parola = (prompt('inserisci una parola!'))
        let parola2 = (prompt('inserisci un altra parola!'))
        console.log(parola2.length)
        console.log(parola.length)
        if (isNaN(parola) && isNaN(parola2)) {
           if (parola.length > parola2.length) {
              resultElement.innerText = (parola2 + parola)
              console.log(parola2 + parola)
         } else if (parola2.length > parola.length) {
              console.log(parola + parola2)
              resultElement.innerText = (parola + parola2)
         } 
        } else {
            resultElement.innerText = 'inserisci caratteri validi per eseguire'
        }

    } else if (lista === '3') {
        TitleElement.innerText = (' Il software deve chiedere per 10 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. ')

        n = 10
        const numeri = []
        for (i = 0; i < n; i++) {
            let numero = parseInt(prompt("inserisci numero!"))
            numeri.push(numero)
        }
        console.log(numeri)
        resultElement.innerText = risultato = numeri[0] + numeri[1] + numeri[2] + numeri[3] + numeri[4] + numeri[5] + numeri[6] + numeri[7] + numeri[8] + numeri[9]

    } else if (lista === '4') {
        TitleElement.innerText = ('In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli  se può partecipare o no alla festa. ')
        
        const nomiInvitati = ['Luca','Marco','Michele','Giovanni','Rosario']
        let nome = (prompt("inserisci nome se sei nella lista degli invitati sarai il benvenuto!"))
        if (nomiInvitati.includes(nome)) { resultElement.innerText = 'Il tuo nome si trova nella lista degli invitati '+ nome + ' goditi la festa del grande Gatsby'
     }
       else { resultElement.innerText = 'il tuo nome non compare nella lista degl invitati ci dispace!'
    }
        console.log('nome invitati! ' + nomiInvitati)
        console.log('il nome che hai iserito! '+ nome)
        

    } else if (lista === '5') {
        TitleElement.innerText = (' Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array. Stampa l array alla fine. ')

        const numeri = []
        for (let i = 0; i < 6; i++) {
            let numero = parseInt(prompt("inserisci numero!"))
            resto = numero % 2
            if (resto === 1) {
                numeri.push(numero)
                console.log(numero)
                resultElement.innerText = numeri
            }
        }

    } else if (lista === '6') {
        TitleElement.innerText = (' Fate generare un numero random da 0 a 10 al computer, e chiedete all "utente di inserire un suo numero. Se il numero scelto dall"utente è uguale al numero del computer informate l"utente che ha vinto, altrimenti ha perso.')

       let numeroCasuale = Math.floor(Math.random() * 11);
       let tentativi = 10;
       let haIndovinato = false;
       while (tentativi > 0 && !haIndovinato) {
       let numeroUtente = parseInt(prompt("Inserisci un numero da 0 a 10 (tentativi rimasti: " + tentativi + "):"));
       if (numeroUtente === numeroCasuale) {
         console.log("Hai vinto! Il numero del computer era: " + numeroCasuale);
         haIndovinato = true;
       } else {
        console.log("Tentativo fallito.");
        tentativi--;
       }
       } if (!haIndovinato) {
        console.log("Hai perso! Il numero del computer era: " + numeroCasuale);
       }

    } else if (lista === '7') {
        TitleElement.innerText = (' Scrivere un programma che stampi la tabellina del 2, fino al numero 1000. Modificate poi il programma in modo che venga chiesto all"utente il numero massimo consentito, e stampare tutta la tabellina del 2 fino al numero inserito. ')
        
        const numeri = []
        for (let i = 0; i < numero; i++) {
        let numero = parseInt(prompt("inserisci numero massimo fino a 1000"))
        console.log(numero)
        resultElement.innerText = numero
        }

    } else if (lista === '8') {
        TitleElement.innerText = ('Fate generare un numero random da 0 a 10 al computer, e chiedete all"utente di inserire un suo numero. Se il numero scelto dall"utente è uguale al numero del computer informate l"utente che ha vinto, altrimenti ha perso. A questo punto fate giocare l"utente, fintanto che non vince la partita contro il PC ')
        
       let numeroCasuale = Math.floor(Math.random() * 11);
       let haIndovinato = false;
       while (!haIndovinato) {
       let numeroUtente = parseInt(prompt("Inserisci un numero da 0 a 10"));
       if (numeroUtente === numeroCasuale) {
         console.log("Hai vinto! Il numero del computer era: " + numeroCasuale);
         resultElement.innerText = ("Hai vinto! Il numero del computer era: " + numeroCasuale);
         haIndovinato = true;
       } else { 
        resultElement.innerText = ("Tentativo fallito.");
       }
       }
      
    } else if (lista === '10') {
        TitleElement.innerText = (' Scrivere un programma a cui venga chiesto all utente di inserire numeri uno dopo l"altro. Quando l"utente scriverà 2 volte consecutive lo stesso numero allora il programma dovrà terminare.')

        const numeri = []
        for (let i = 0; i < 10; i++) {
        let numero = parseInt(prompt("inserisci numero"))
        numeri.push(numero)
        if (numeri.includes(numero)) {
            break
        }else{ resultElement.innerText = numeri  }
        
        }

    } else if (lista === '11') {
        TitleElement.innerText = (' Creare una funzione che stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente. Una volta creata la funzione chiedere allutente di inserire N con un prompt e richiamate la funzione per dare la risposta all"utente.')
    } else if (lista === '12') {
        TitleElement.innerText = (' Crea una funzione chiamata sommaNumeri che dato un array di 10 numeri definito da voi nel codice, ne calcoli la loro somma e la restituisca come risultato.Utilizzare la funzione sommaNumeri per stampare il risultato ottenuto.')
    } else if (lista === '13') {
        TitleElement.innerText = (' Crea una funzione chiamata mediaAritmetica che prende in input un array di 10 numeri e restituisca la media aritmetica dei numeri contenuti nell array.  Utilizzare la funzione sommaNumeri precedentemente creata per calcolare la media dei 10 numeri che vanno chiesti all utente attraverso dei prompt.')
    } else if (lista === '14') {
        TitleElement.innerText = ('Chiedi un numero di 4 cifre all’utente. Crea e usa una funzione che calcola la somma di tutte le cifre che compongono il numero e ritorni il risultato. Usa questa funzione per stampare poi a video il risultato ottenuto.')
    } 
})