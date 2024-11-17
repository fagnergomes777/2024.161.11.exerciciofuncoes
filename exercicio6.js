const prompt = require('prompt-sync')();

// Crie uma função que receba um número n e retorne a soma de todos os números de 1 até n.
// Por exemplo, para n = 5, a função deve retornar 1 + 2 + 3 + 4 + 5 = 15.

function somaDe1aN(n) {
    return (n * (n + 1)) / 2;
}

console.log(somaDe1aN(5));  // 15 (1 + 2 + 3 + 4 + 5)