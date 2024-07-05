// creo una funzione che generi un numero randomico
function generaterandomnumber() {
    return Math.floor(Math.random() * 5 + 1);
}
// creo una funzione che fa la somma è pari o dispari
function checkevenorodd(sum) {
    // verifico se è pari o dispari 
    if (sum % 2 === 0){
        return 'e pari';
    }
     return 'e dispari';
    
    
}

// creo un promt per inserire la parola pari o dispari
let even_or_odd = prompt('insersci pari o dispari');


// creo un promt per inserire un numero da uno a cinque
let number = parseInt(prompt('inserisci un numero da 1 a 5'));

