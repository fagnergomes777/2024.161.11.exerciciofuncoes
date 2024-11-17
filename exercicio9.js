const prompt = require('prompt-sync')();

// Crie uma função que receba uma base e um expoente e retorne o valor da base elevada ao expoente,
// sem usar o método Math.pow. Utilize apenas um loop para multiplicações sucessivas.

function potencia(base, expoente) {
    let resultado = 1;
    
    for (let i = 0; i < expoente; i++) {
        resultado *= base;
    }
    
    return resultado;
}

console.log(potencia(2, 3));
console.log(potencia(5, 4));
console.log(potencia(3, 0));
console.log(potencia(10, 2));