/* Desenvolva um simulador que precisa calcular a quantidade de combustível necessária para um voo. 
O programa recebe 3 dados: a distância do voo, o tipo de aeronave e a velocidade do 
vento. 
Leve em consideração 2 aeronaves: Boeing 737 (consome 900 litros por hora) 
ou Airbus A320O (consome 800 litros por hora). O programa deve: 

Calcular o tempo de voo usando a fórmula: tempo = distância / velocidade do vento.
Calcular o consumo de combustível por hora de voo de acordo com o tipo de aeronave.
Ajustar o consumo de combustível em 10% se a velocidade do vento for contra o voo (velocidade positiva). 
Ajustar o consumo de combustível em 5% se a velocidade do vento for a favor do voo  (velocidade negativa).
Calcular a quantidade total de combustivel necessária. */

//const tempo_voo = tempo = distância / velocidade do vento.
//consumo de combustivel = " "
//total_positivo = 10% se a velocidade do vento for contra o voo (velocidade positiva).
//total_negativo = 5% se a velocidade do vento for a favor do voo  (velocidade negativa).
//consumo_necesario = " "

const tipo_nave = "boeing737";
const distancia_voo = 1000;
const velocidade_vento = 10000;

const tempo_voo = distancia_voo / velocidade_vento;

let consumocombustivelPorHora = 0;

if (tipo_nave !== "boeing737" && tipo_nave !== "airbusA3200") {
  console.log("Vou calcular isso não");
} else {
  consumocombustivelPorHora = tipo_nave === "boeing737" ? 900 : 800;
}

if (velocidade_vento > 0) {
  consumocombustivelPorHora *= 1.1;
} else {
  consumocombustivelPorHora *= 0.95;
}

const combustivelTotal = tempo_voo * consumocombustivelPorHora;
console.log(`Quantidade combustivel necessária ${parseInt(combustivelTotal)} litros.`);
