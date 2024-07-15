/* Dado um array de números, encontre o maior e o 
menor número existente no seguinte array [10, 9 , 33, 2, 12, 5, 124]. */
 /*const numeros = [10, 9 , 33, 2, 12, 5, 124]
 
 const min = Math.min(...numeros)
 const max = Math.max(...numeros)
 console.log(`O menor número é: ${min} \nE o maior número é: ${max}`) */

 const numeros = [10, 9 , 33, 2, 12, 5, 124]
 let maior = numeros[0]
 let menor = numeros[0]

 for(let i = 0; i< numeros.length; i++){
    if(numeros[i]> maior){
        maior = numeros[i]
    }else if(numeros[i] < menor){
        menor = numeros[i]
    }
 }
 console.log(`O menor número é: ${menor} \nE o maior número é: ${maior}`)
