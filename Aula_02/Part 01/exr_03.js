// Mostre a posição em que a substring mega aparece em frase


/* indexOf()   retorna o índice da primeira ocorrência do valor fornecido.Retorna -1 se o valor não for encontrado. */
const palavra = "gambiarra";
const frase = "Num ninho de mafagafos há sete mafagafinhos.Quando a mafagafa gafa, gafam os sete mafagafinhos. "

const posicao = frase.indexOf("mega")

console.log(`A substring aparece na posicao ${posicao}`)