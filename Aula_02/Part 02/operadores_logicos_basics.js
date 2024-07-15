/*Operadores Lógicos Básicos:
Escreva uma expressão que seja verdadeira se a variável x for maior que 10 e a variável y for menor que 5.
Escreva uma expressão que seja verdadeira se a variável a for igual a "verdadeiro" ou a variável b for igual a "falso".
Escreva uma expressão que seja falsa se a variável c for diferente de 0 e a variável d for igual a "Olá". */


const x = 20
const y = 4
console.log(x > 10 && y < 5) 

/*if (20 > 10 && 4 < 5) {
  console.log("A expressão é verdadeira");
} else {
  console.log("A expressão é falsa.");
} */

const a = "verdadeiro"
const b = "falso"
console.log(a === "verdadeiro" || b ===   "falso")

/*if (a === "verdadeiro" || b === "falso") {
  console.log("A expressão é verdadeira");
} else {
  console.log("A expressão é falsa.");
}*/

const c = 2; 
const d = "olá"; 
console.log(!(c !== 0 && d ==="olá")) 