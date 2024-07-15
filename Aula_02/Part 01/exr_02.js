// Mostre frase substituindo a primeira ocorrência de a pelo caractere @

const palavra = "Gambiarra";
const frase = "Num ninho de mafagafos há sete mafagafinhos."
/* const novaFrase = frase.replace("a", "@")
console.log(novaFrase) ou 
console.log(palavra.replace("a", "@"))*/


const indice = palavra.indexOf("a");
console.log(palavra.substring(0, indice) + "@" + palavra.substring(indice+1))