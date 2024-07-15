/*Crie um objeto chamado animal com as seguintes propriedades e valores:
    porte = grande
    especie = cachorro
    raca = golden
*/
//const animal = { porte: "grande", especie: "cachorro", raca: "golden" };
//console.log(animal)

/*Crie um objeto curso que receba as propriedades: nome, período, professora.
Em seguida, escolha qual propriedade você queira acessar.*/
const curso = {nome: "Leona",
periodo: "2",
professora: "Vanessa"};
console.log(curso.nome);

/* Crie uma lista com os seguintes itens:
Sabonete de Argila, Shampoo sólido, Máscara Capilar.
Em seguida, no console.log(),
mostre a quantidade de itens que contém
na lista criada.  */

const higienePessoal = [
  "Sabonete de Argila",
  "Shampoo sólido",
  "Máscara Capilar",
];
console.log(higienePessoal.length)

// Dado uma lista:
const listaNomes = ["Jeniffer", "Fernanda", "Amanda", "Marcela"];
listaNomes.push("Beatriz");


/*Adicione na última posição o nome Beatriz.
Em seguida, mostre no console.log
*/
console.log(listaNomes)

/*Crie um objeto curso que receba as propriedades: nome, período, professora.
Atribua valores as propriedades criadas e separadamente mostre as propriedades no console.log */
/*const curso = {
    nome: "Leona",
    periodo: "2",
    professora: "Vanessa"
  };
  
  console.log(curso.nome); 
  console.log(curso.periodo); 
  console.log(curso.professora); 



  /*Dado um array de objetos.
*/

const tarefas = [
  {
    passear: false,
    afazeres: ["Trabalhar", "Estudar", "Fazer comida", "Mercado", "Descansar"],
    reuniao: {
      faculdade: "Segunda-feira",
      amigos: "Sexta-feira",
    },
  },
];
//console.log(tarefas[0].reuniao)
/* Acesse a propriedade do objeto do terceiro item*/

/* Dado uma lista de produtos ecologicos, utilizando o FOR, 
filtre quais produtos ainda estão disponíveis. */

let produtosEcologicos = [
  { nome: "Copo de bambu", disponivel: true },
  { nome: "Sacola retornável", disponivel: false },
  { nome: "Escova de dentes de bambu", disponivel: true },
  { nome: "Canudos de metal", disponivel: true },
  { nome: "Frasco de vidro para armazenamento", disponivel: false },
];
let produtosDisponiveis = [];
for (let i = 0; i < produtosEcologicos.length; i++) {
  if (produtosEcologicos[i].disponivel) {
    produtosDisponiveis.push(produtosEcologicos[i].nome);
  }
}
//console.log(`produtosDisponiveis: ${produtosDisponiveis}`);

/* Dado uma lista de carros disponíveis, armazene somente o preço e 
nome do carro em uma nova lista e retorne somente esses valores. Utilizando o FOR,  */
/*let carros = [
    { modelo: "Toyota Corolla", ano: 2020, precoDia: 100, disponivel: true },
    { modelo: "Honda Civic", ano: 2019, precoDia: 90, disponivel: true },
    { modelo: "Ford Focus", ano: 2018, precoDia: 80, disponivel: false },
    { modelo: "Chevrolet Cruze", ano: 2019, precoDia: 85, disponivel: true },
    { modelo: "Volkswagen Golf", ano: 2020, precoDia: 95, disponivel: true }
];

let precoCarro = [];

for (let i = 0; i < carros.length; i++) {
  // Criando um objeto com o nome e preço do carro
  let carro = { modelo: carros[i].modelo, precoDia: carros[i].precoDia };
  // Adicionando o objeto à lista precoCarro
  precoCarro.push(carro);
}
console.log(precoCarro);


/* Temos uma lista com alguns Estados e cidades do Brasil, obtenha somente as cidades de São Paulo no resultado final. Utilizando o FOR.*/

let estadosCidades = [
  {
    estado: "São Paulo",
    cidades: [
      "São Paulo",
      "Guarulhos",
      "Campinas",
      "São Bernardo do Campo",
      "Santo André",
    ],
  },
  {
    estado: "Rio de Janeiro",
    cidades: [
      "Rio de Janeiro",
      "Niterói",
      "São Gonçalo",
      "Duque de Caxias",
      "Nova Iguaçu",
    ],
  },
  {
    estado: "Minas Gerais",
    cidades: [
      "Belo Horizonte",
      "Uberlândia",
      "Contagem",
      "Juiz de Fora",
      "Betim",
    ],
  },
];

let cidadesSP = []
for(let i = 0; i < estadosCidades.length; i++){
    if(estadosCidades[i].estado === "São Paulo"){
        cidadesSP = estadosCidades[i].cidades 
    }
}
//console.log(`Cidades do estado de São Paulo: ${cidadesSP}`)

/* Dado uma lista de carros com suas informações, 
calcule o preço total da locação de três dias */

let carros = [
  { modelo: "Toyota Corolla", ano: 2020, precoDia: 100, disponivel: true },
  { modelo: "Honda Civic", ano: 2019, precoDia: 90, disponivel: true },
  { modelo: "Ford Focus", ano: 2018, precoDia: 80, disponivel: false },
  { modelo: "Chevrolet Cruze", ano: 2019, precoDia: 85, disponivel: true },
  { modelo: "Volkswagen Golf", ano: 2020, precoDia: 95, disponivel: true },
];

// Calcula o preço total da locação de três dias para cada carro
for (let i = 0; i < carros.length; i++) {
  // Verifica se o carro está disponível para locação
  if (carros[i].disponivel) {
      // Calcula o preço total da locação de três dias
      let precoTotal = carros[i].precoDia * 3; // Multiplica o preço diário pelo número de dias
      // Exibe o modelo do carro e o preço total da locação
      console.log(`Modelo: ${carros[i].modelo}, Preço Total da Locação: R$${precoTotal}`);
  }
}

// Lista de carros disponíveis para locação
let carrosDisponiveis = [
  { modelo: "Toyota Corolla", ano: 2020, precoDia: 100 },
  { modelo: "Honda Civic", ano: 2019, precoDia: 90 },
  { modelo: "Ford Focus", ano: 2018, precoDia: 80 },
  { modelo: "Chevrolet Cruze", ano: 2019, precoDia: 85 },
  { modelo: "Volkswagen Golf", ano: 2020, precoDia: 95 },
];

// Lista de clientes com informações sobre a locação
let clientes = [
  { nome: "João", dias: 3 },
  { nome: "Maria", dias: 5 },
  { nome: "Carlos", dias: 2 },
];

// Calcule o preço total da locação para cada cliente utilizando o FOR.
