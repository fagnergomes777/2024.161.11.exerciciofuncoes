const prompt = require('prompt-sync')();

// Crie uma função que receba um número inteiro positivo e retorne o fatorial desse número.
// Não utilize recursão, apenas um loop simples (por exemplo, 5! = 5 * 4 * 3 * 2 * 1 = 120).

function fatorial(n) {
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

console.log(fatorial(5));
console.log(fatorial(7));
