const prompt = require('prompt-sync')();

// Crie uma função que receba uma string como parâmetro e retorne o número de vogais (a, e, i, o, u)
// presentes na string, independentemente de serem maiúsculas ou minúsculas.

function mostrarVogais(string) {
    let vogaisEncontradas = string.match(/[aeiouAEIOU]/g) || [];
    let quantidadeVogais = vogaisEncontradas.length;
    console.log(`${string}: ${vogaisEncontradas.join(', ')} (Total: ${quantidadeVogais})`);
}

mostrarVogais("Fagner");
mostrarVogais("Gomes");
mostrarVogais("Silva");
mostrarVogais("1234");
mostrarVogais("AEIOU");
