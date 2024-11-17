const prompt = require('prompt-sync')();

// Crie uma função que receba dois números como parâmetros
// e retorne true se o primeiro número for divisível pelo segundo, e false caso contrário.
// A função deve usar o operador de módulo (%).

const num1 = 10;
const num2 = 2;

const resultado = num1 % num2 === 0;

console.log(resultado);
