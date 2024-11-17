const prompt = require('prompt-sync')();

//Crie uma função que receba três números como parâmetros e retorne o maior deles.
//Não use funções prontas como Math.max, apenas comparações lógicas.

const a = 5;
const b = 10;
const c = 15;

if (a > b && a > c) {
    console.log(a);
} else if (b > a && b > c) {
    console.log(b);
} else {
    console.log(c);
}
