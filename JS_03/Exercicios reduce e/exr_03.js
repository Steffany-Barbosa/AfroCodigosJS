// Dado uma lista de empresas:
//Retorne o valor total do mercado de todas elas

let empresas = [
    {
        nome: 'InQuímica',
        descricao: 'A InQuímica é uma startup de desenvolvimento e pesquisa.',
        valorDeMercado: 100,
        CEO: 'Taynara Alves',
        anoDeCriacao: 2017,
    },
    {
        nome: 'Negras Plurais',
        descricao: 'Potencialização de negócios e carreiras de mulheres negras',
        valorDeMercado: 250,
        CEO: 'Caroline Moreira',
        anoDeCriacao: 2018
    },
    {
        nome: 'Piraporiando',
        descricao: 'Organização que trabalha para construir uma sociedade antirracista e que faz do afeto uma forma de educar.',
        valorDeMercado: 300,
        CEO: 'Janine Rodrigues',
        anoDeCriacao: 2015
    },
    {
        nome: 'Gestar',
        descricao: 'Somos uma plataforma que conecta gestantes, mães e pais a profissionais que atuam de forma humanizada na saúde materno infantil',
        valorDeMercado: 560,
        CEO: 'Lettycia Vidal',
        anoDeCriacao: 2017
    },
    {
        nome: 'AfroEsporte',
        descricao: 'Agência de criação e curadoria de conteúdo e gerenciamos carreiras especializada em atletas negros, negras e LGBTQIA+',
        valorDeMercado: 500,
        CEO: 'Mia Lopes',
        anoDeCriacao: 2015
     },
    {
        nome: 'Malalai',
        descricao: 'A Malalai é uma solução para pessoas que querem ser livres para se deslocarem sozinhas com mais segurança. · Segurança para você.',
        valorDeMercado: 300,
        CEO: 'Priscila Gama',
        anoDeCriacao: 2020
     }
];

const valorTotal = empresas.reduce((resultado, empresa) => resultado + empresa.valorDeMercado,0)
console.log(valorTotal)

/*Nesta versão, a função de callback passada para reduce() é uma arrow function. 
Ela recebe dois parâmetros: resultado (o acumulador) e empresa (o objeto representando cada empresa na lista). 
A expressão resultado + empresa.valorDeMercado é o valor que será acumulado a cada iteração. 
O reduce() é iniciado com um valor inicial de 0. */


// Dado uma lista de empresas:
//Retorne o valor total do mercado de todas elas