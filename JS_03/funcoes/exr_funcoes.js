/*Crie uma função que receba nome, sobrenome, endereço e retorne as informações a seguir: *

  const endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
  };

  A {nome} {Sobrenome} mora em São Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros" com
  nº 1293.
  O retorno deverá ser template string */

    

let endereco = {
  rua: "Rua dos pinheiros",
  numero: 1293,
  bairro: "Centro",
  cidade: "São Paulo",
  uf: "SP",
};

/*function localizaAi(nome, sobrenome, endereco) {
  return `O nome dela(e) é: ${nome} ${sobrenome} e reside em: ${endereco.cidade}`
}; */

//console.log(localizaAi ("Steh", "Barbosa", endereco))

//Arrow function: const arrow = () => {};

const localizaBb = (nome, sobrenome,endereco) => `O nome dela(e) é: ${nome} ${sobrenome} e reside em: ${endereco.cidade}`

//console.log(localizaBb("Steh", "Barbosa", endereco))

// Definindo o objeto mulher com nome e descrição
const mulher = { 
nome: "Mulheres, raça e classe",
descrição:"Da mesma forma que gênero é a maneira como a raça é vivida."
};

// Arrow function 
//Na função retornarBiografia, não há necessidade de passar parâmetros, pois ela simplesmente retorna o objeto mulher diretamente. 
//A ausência de parâmetros dentro dos parênteses da função indica que ela não espera nenhum argumento ao ser chamada.

const retornarBiografia = () => ({
  nome: mulher.nome, // Acessando a propriedade nome do objeto mulher
  descrição: mulher.descrição // Acessando a propriedade descricao do objeto mulher
})
//console.log(retornarBiografia())



const nomesAleatorios = {
  nome: "Steffany",
  id:12
}

const getUser = () => ({
  id: nomesAleatorios.id,
  nome: nomesAleatorios.nome
}) 
console.log(getUser())