/* EXERCICIO 01
const prompt = require("prompt-sync")();
for (let contador = 0; contador < 10; contador++) {
  const nomeUsuario = prompt ("Qual o seu nome? ")
} */

/* const prompt = require("prompt-sync")();
const palavra = prompt("Digite uma palavra: ");

let palavraInvertida = " ";

for (let i = palavra.length - 1; i >= 0; i--) {
  palavraInvertida += palavra[i];
}
console.log(palavraInvertida); */

// tamanho de uma string: str.length
// acessando um caractere: str[index]
// i++ i+=1 i=i+1
// i-- i-=1 i=i-1


/* const prompt = require("prompt-sync")();
const numero = prompt("Digite um número: ");

while(numero !== "10"){
  console.log("Ops! ")
  numero = prompt ("Digite um número")
} 
Esse está como string e o debaixo, como numero inteiro por causa do parseInt.
*/

//node .\Aula_02\part_04\repeticao.js

/* const prompt = require("prompt-sync")();
const numero = parseInt(prompt("Digite um número: "));

while(numero !== 10){
  console.log("Ops! ")
  numero = parseInt(prompt ("Digite um número: "))
} */


/* EXERCICIO 02
 
const prompt = require("prompt-sync")();
const numero02 = parseInt(prompt("Digite um número: "));
let contador = 1;
let fatorial = 1;

while(contador <= numero02){
  fatorial *= contador
  contador++
}
console.log(`O fatorial de ${numero02} é igual à: ${fatorial}`)*/

const prompt = require("prompt-sync")();
const numero = prompt("Digite um número: ");
let fatorial = 1
for(let i = 1; i <= numero; i++){
  fatorial *= i
}
console.log(`O fatorial de ${numero} é igual à: ${fatorial}`)

/* Fatorial: O fatorial de um número é o produto de todos os números inteiros positivos de 1 até o próprio número.
 Por definição, o fatorial de 0 é 1. Ou seja, se o usuário inserir 0, o fatorial será 1. Isso é por definição matemática.

Variáveis de Controle:

fatorial: Inicializado como 1 porque, por padrão, o resultado de multiplicar qualquer número por 1 é o próprio número. 
É como um valor neutro para a multiplicação. Inicializá-lo como 0 faria com que o resultado do fatorial sempre fosse 0.
contador: Inicializado como 1 porque queremos começar a multiplicação a partir de 1. 
Começar a partir de 0 não faria sentido, pois o fatorial de 0 é 1 e não envolve multiplicação de mais nenhum número.
Essas inicializações são escolhidas de forma que o algoritmo funcione corretamente e 
produza os resultados esperados para qualquer número inteiro positivo que o usuário insira. */