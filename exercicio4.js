const prompt = require('prompt-sync')();

// Crie uma função que receba uma string como parâmetro e retorne a string invertida.
// Por exemplo, ao passar "casa", a função deve retornar "asac".

function inverterString(string) {
    let resultado = '';
    for (let i = string.length - 1; i >= 0; i--) {
        resultado += string[i];
    }
    return resultado;
}

console.log(inverterString("asac"));
console.log(inverterString("casa"));
