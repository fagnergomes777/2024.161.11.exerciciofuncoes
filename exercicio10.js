const prompt = require('prompt-sync')();

// Crie uma função que receba uma string e um caractere como parâmetros
// e retorne o número de vezes que o caractere aparece na string.
// Por exemplo, contarOcorrencias("javascript", "a") deve retornar 2.

function contarOcorrencias(string, caractere) {
    return string.split(caractere).length - 1;
}

console.log(contarOcorrencias("javascript", "a"));
console.log(contarOcorrencias("banana", "a"));
console.log(contarOcorrencias("Olá", "l"));
console.log(contarOcorrencias("Curso", "o"));
console.log(contarOcorrencias("teste", "z"));
