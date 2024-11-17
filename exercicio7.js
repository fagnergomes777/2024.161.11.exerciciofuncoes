const prompt = require('prompt-sync')();

// Crie uma função que receba um array de números e retorne um objeto contendo o valor mínimo
// e o valor máximo do array.
// Exemplo: encontrarMinMax([3, 7, 1, 9, 4]) deve retornar { min: 1, max: 9 }.

function encontrarMinMax(array) {
    let min = Math.min(...array);
    let max = Math.max(...array);
    return { min, max };
}

console.log(encontrarMinMax([3, 7, 1, 9, 4]));
console.log(encontrarMinMax([10, 20, 30, 40]));
console.log(encontrarMinMax([5]));