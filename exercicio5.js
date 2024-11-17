const prompt = require('prompt-sync')();

// Crie uma função que receba um número inteiro e retorne true se ele for um número primo e false
// caso contrário. Lembre-se de que um número primo é divisível apenas por 1 e por ele mesmo

function isPrimo(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrimo(2));
console.log(isPrimo(4));
console.log(isPrimo(17));
console.log(isPrimo(20));