/* Faça um programa recebe três angulos como entrada e determine se é:

Um triângulo equilátero (todos os lados iguais).
Um triângulo isósceles (dois lados iguais).
Um triângulo escaleno (todos os lados diferentes - a soma de dois lados qualquer deve ser maior que o terceiro lado).
Ou se não formam um triângulo. */

const angulo1 = 20;
const angulo2 = 60;
const angulo3 = 20;
// não pode ultrapassar 180

const saoAngulosIguais = angulo1 === angulo2 && angulo2 === angulo3;
const temDoisladosIguais = angulo1 === angulo2 && angulo2 === angulo3;
const saoAngulosDiferentes = angulo1 !== angulo2 && angulo2 !== angulo3;
const eTriangulo = angulo1 + angulo2 + angulo3 === 180;

if (eTriangulo && saoAngulosIguais) {
  console.log("É um triângulo equilátero !");
} else if (eTriangulo && temDoisladosIguais) {
  console.log("É um triângulo isosceles !");
} else if (
  eTriangulo &&
  saoAngulosDiferentes &&
  angulo1 + angulo2 > angulo3 &&
  angulo2 + angulo3 > angulo1 &&
  angulo3 + angulo1 > angulo2
) {
  console.log("É um triângulo escaleno !");
} else if (!eTriangulo) {
  console.log("Não é um triângulo");
}
