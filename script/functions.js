


//generatore numeri
function generaNumeri(min, max) {
    for (let index = min; index <= max; index++) {
        console.log(index);
      
    }
}

// reverse di una stringa 
function reverseStringa(parola) {
    let parolaDivisa = parola.split("");
    parolaDivisa = parolaDivisa.reverse();
    parolaReverse = parolaDivisa.join('');

    return parolaReverse;

}


//numero random intero

function intRandom(min,max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;

}


//somma di due numeri 
function somma(num1, num2) {
    return num1 + num2;
}

// numero pari o dispari 

function pariDispari(num) {
    if (num % 2 == 0) {
        return "pari";
    } else {
        return "dispari";
    }

}