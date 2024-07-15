//Mostre quantas vezes a cadeia de caracteres afa aparece em frase.

/* const palavra = "afa";
const frase = "Num ninho de mafagafos há sete mafagafinhos.Quando a mafagafa gafa, gafam os sete mafagafinhos. "; 

let cont = 0;

for (let i = 0; i< frase.length; i++){
    if (frase.substring(i, i + palavra.length) === palavra)
    {cont++;}
};

console.log(`A palavra ${palavra} aparece ${cont} vezes na frase. `) 

Claro, vou explicar a lógica usada no código fornecido.

1. **Definição das variáveis**: Começamos definindo duas variáveis:
   - `palavra`: Esta variável contém a substring que queremos encontrar na frase.
   - `frase`: Esta variável contém a frase onde queremos buscar a substring.

2. **Inicialização do contador**: Inicializamos a variável `cont` com o valor zero. Esta variável será usada para contar o número de ocorrências da substring na frase.

3. **Loop através da frase**: Utilizamos um loop `for` para percorrer cada caractere da frase. O loop vai de `i = 0` até `i < frase.length`, ou seja, percorre todos os índices da string `frase`.

4. **Verificação da substring**: Dentro do loop, utilizamos o método `substring()` para extrair uma parte da frase começando na posição atual `i` e indo até `i + palavra.length`. Isso nos dá uma substring do mesmo tamanho que a palavra que estamos buscando.

5. **Comparação da substring com a palavra desejada**: Com a substring extraída, comparamos se ela é igual à palavra desejada. Se forem iguais, isso significa que encontramos uma ocorrência da palavra na frase, então incrementamos o contador `cont`.

6. **Exibição do resultado**: Depois de percorrer toda a frase, exibimos o número total de ocorrências da palavra na frase.

Essa é a lógica básica por trás do código. Ele percorre cada caractere da frase, extrai uma substring de tamanho igual à palavra desejada em cada posição e conta quantas vezes essa substring é igual à palavra desejada. O resultado final é o número de ocorrências da palavra na frase.

*/


//aqui começa outra
/* const palavra = "gambiarra";
const frase = "Num ninho de mafagafos há sete mafagafinhos. Quando a mafagafa gafa, gafam os sete mafagafinhos.";

// Expressão regex para encontrar todas as ocorrências da substring "afa" na frase
const regex = /afa/g;

// Use o método match() com a expressão regular para encontrar todas as correspondências
const ocorrencias = frase.match(regex);

// Conta o número de ocorrências
const numOcorrencias = ocorrencias ? ocorrencias.length : 0;

console.log(`A substring "${palavra}" aparece ${numOcorrencias} vezes na frase.`); */ 

//Outra opção
const palavra = "gambiarra";
const frase = "Num ninho de mafagafos há sete mafagafinhos. Quando a mafagafa gafa, gafam os sete mafagafinhos.";

console.log(frase.match(/afa/g))

