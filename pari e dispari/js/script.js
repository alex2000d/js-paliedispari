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

