//Mostre o valor de palavra de trás para frente.

/*function inverter (string){
    let saida = ""
    for (let i = string.length -1; i>= 0; i--) {
        saida += string[i]    
    }
    console.log(saida)
}
inverter("gambiarra") */

/*
Claro, vou explicar a lógica por trás desse código:

A função inverter recebe uma string como entrada. (a string sera gambiarra)
Uma variável chamada saida é inicializada como uma string vazia "". Esta variável será usada para armazenar a string invertida.
Um loop for é usado para iterar/ repetir sobre os caracteres da string de trás para frente. Isso é feito começando pelo índice do último caractere(gambiarra o ultimo caractere é a) (string.length - 1) e decrementando até o índice 0.
Dentro do loop, cada caractere da string original é concatenado na variável saida, na ordem inversa em relação à string original.
Após o loop, a variável saida contém a string original invertida.
Finalmente, a string invertida é exibida no console usando console.log(saida).
Em resumo, o código percorre a string de trás para frente e a reconstrói caractere por caractere, resultando na inversão da string original.
*/

const palavra = "gambiarra";
const stringInversa = palavra.split("").reverse().join("");
console.log(stringInversa);

/* split () divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array.
reverse() inverte os itens de um array. O primeiro elemento do array se torna o último e o último torna-se o primeiro.
join() junta todos os elementos de um array (ou um array-like object) em uma string e retorna esta string.

*/ 