/* 1 - O filter() permite remover elementos que não se encaixam em determinados critérios.
É incrivelmente útil para desmontar grandes arrays, para que possamos escolher apenas os itens que queremos.
____________________________
Imagine que queremos filtrar somente as informações da Diretora.  
Podemos usar .filter () para retornar apenas a condição que se encaixa na função correta.*/

//Dado uma lista de colaboradores, filtre somente a funcao == "Diretora".

const colaboradores =
  [{ PrimeiroNome: 'Ana', ultimoNo: 'Bouley', funcao: 'Desenvolvedora' },
  { PrimeiroNome: 'Chloe', ultimoNome: 'Alnaji', funcao: 'Desenvolvedora' },
  { PrimeiroNome: 'Jonathan', ultimoNome: 'Alves', funcao: 'Publicitário' },
  { PrimeiroNome: 'Micaela', ultimoNome: 'Herman', funcao: 'Lead Instructor' },
  { PrimeiroNome: 'Robert', ultimoNome: 'Santos', funcao: 'Desenvolvedora' },
  { PrimeiroNome: 'Wes', ultimoNome: 'Correia', funcao: 'Instrutor' },
  { PrimeiroNome: 'Hanna', ultimoNome: 'Montana', funcao: 'Diretora' }]; 

const result = colaboradores.filter(funcionarios => funcionarios.funcao === 'Diretora') // só quero acessar diretora
//console.log(result)

/* 2 - O map() funciona retornando uma nova array após a aplicação de uma função em todos os elementos da array.
Dado um array de objetos chamado produtos: */

/*Retorne uma nova array com o id do produto,
nome, tamanho e preço unitário que terá o acréscimo de 1.15 sobre o valor dos produtos.*/

let produtos = [
    { id: 123, nome: 'Camiseta', cor: 'azul', tamanho: 'P', categoria: 'Vestuário', estoque: 10, disponivel: true, precoUnitario: 15 },
    { id: 125, nome: 'Regata', cor: 'azul', tamanho: 'GG', categoria: 'Vestuário', estoque: 0, disponivel: false, precoUnitario: 20 },
    { id: 456, nome: 'Calça', cor: 'preto', tamanho: 'GG', categoria: 'Vestuário', estoque: 1, disponivel: true, precoUnitario: 15 },
    { id: 982, nome: 'Tênis', cor: 'amarelo', tamanho: '38', categoria: 'Esportes', estoque: 2, disponivel: true, precoUnitario: 125 },
  ];
 


let  produtosAtualizados = produtos.map(produto => ({
  id: produto.id,
  nome: produto.nome,
  tamanho: produto.tamanho,
  precoUnitario: produto.precoUnitario * 1.5
}))
//console.log(produtosAtualizados)


// 3 -  Criar nova array somente com profissionais da área de TI

const pessoas = [
  { nome: "Mell", area: "TI", profissao: "dev" },
  { nome: "Munique", area: "ciência", profissao: "pesquisadora"},
  { nome: "Melissa", area: "construção", profissao: "engenheira"},
  { nome: "Madalena", area: "TI", profissao: "infra" },
  { nome: "Monica", area: "medicina", profissao: "cardiologista"},
];

// expectativa:
// const profissionaisTI = [
//   { nome: "Mell", area: "TI", profissao: "dev" },
//   { nome: "Madalena", area: "TI", profissao: "infra" }
// ];

const profissionaisTI = pessoas.filter(funcionariosTi => funcionariosTi.area === "TI")

console.log(profissionaisTI)

