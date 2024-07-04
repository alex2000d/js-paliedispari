// chiedo all'utente di inserire la parola
let word = prompt('inserisci la tua parola');
// divido la parola
let check_pal = word.split('').reverse().join('');
// creo una funzione
function countWords (string){
    // creo un ciclo for
    for( let i = 0; i < string.length; i++){
        // se e uguale allora è palindroma
                if(word == check_pal){
                    console.log('la stringa e palindroma')
                    // altrimenti non è palindroma
                }else {
                    console.log('la stringa non e palindroma')
                    return'la stringa non e palindroma'
               
                } 
            }
            // mostro in console il risultato
            return('la stringa non e palindroma')
    }
    // chiamo la funzione
    let wordpal = countWords(word);