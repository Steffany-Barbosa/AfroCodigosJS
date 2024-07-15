/*  Desenvolva um jogo que permita que o usuário tente adivinhar um número inteiro aleatório entre 1 e 100. 
Utilize um loop do/while, o programa deve fornecer dicas como "maior" ou "menor" após cada tentativa,
 ao acertar deve informar o número adivinhado e número de tentativas realizadas para descobrir.
dica: pesquise como gerar um numero aleatório usando o Math */

// Math:
//parseInt 
/*const prompt = require("prompt-sync")();

const numeroAleatorio = Math.floor(Math.random()*100) + 1

let tentativa;
let numeroTentativas = 0
do { tentativa = parseInt(prompt("Digite um número entre 1 e 100: "))
    numeroTentativas++

    if(tentativa > numeroAleatorio){
        console.log("Digite um número menor")
    }else if (tentativa < numeroAleatorio){
        console.log("Digite um número maior")
    }else{
        console.log(`Acertou ${numeroAleatorio}`)
        console.log(`tentativas ${numeroTentativas}}`)
    }
    
} while (tentativa !== numeroAleatorio ); */

/*
Math.random(): Um número pseudo-aleatório entre 0 (inclusivo) e 1 (exclusivo).
Math.floor(): retorna o menor número inteiro dentre o número "x".
No cálculo do numeroAleatorio, a função Math.random() gera um número decimal entre 0 (inclusive) e 1 (exclusivo). 
Então, ao multiplicar por 100, você obtém um número entre 0 (inclusive) e 100 (exclusivo). Adicionando 1,
você garante que o número gerado estará entre 1 e 100(inclusive).
Dentro do loop do/while, solicitamos ao usuário que insira um palpite.
Incrementamos o número de tentativas realizadas a cada iteração do loop.
Corrigimos as condições dentro do loop para comparar a tentativa do usuário com o número aleatório gerado, não com o número 5.
*/
/*const prompt = require("prompt-sync")();

const numeroAleatorio = Math.floor(Math.random()*100) + 1

let numeroTentativas = " ";
let tentativa = parseInt(prompt("Digite um número entre 1 e 100: "))

while (tentativa === numeroAleatorio) {

    if(tentativa > numeroAleatorio){
        console.log("Digite um número menor.")
    }else if (tentativa < numeroAleatorio){
        console.log("Digite um número maior.")
    }else{
        
        console.log(`tentativas: ${numeroTentativas}`)
    }
    
} 
console.log("Parabéns vc acertou" + numeroAleatorio) */


const prompt = require("prompt-sync")();

const numeroAleatorio = Math.floor(Math.random()*100) + 1

let tentativa;
let numeroTentativas = 0;
console.log("Bem Vindo ao Jogo de Adivinhação... \n----------------------------------")
do {
    tentativa = parseInt(prompt("Digite um número entre 1 e 100: "));
    numeroTentativas++;

    if (tentativa > numeroAleatorio) {
        console.log("Digite um número menor.");
    } else if (tentativa < numeroAleatorio) {
        console.log("Digite um número maior.");
    } else {
        console.log(`PARABÉNS você certou! \nO número é ${numeroAleatorio}.`);
        console.log(`Número de tentativas: ${numeroTentativas}`);
    }
    
} while (tentativa !== numeroAleatorio);


//node .\Jogo_Adivinhação\jogo_advinhacao.js