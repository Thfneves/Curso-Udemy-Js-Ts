// //0 1 2 3 4 5
// //reforcando que o array comeca sempre pelo numero zero.
// const numeros = [1, 2, 3, 4, 5, 6];
// const primeironumero = numeros[0];

// const [primeiroNumero, segndoNumero, ...resto] = numeros;
// console.log(primeiroNumero, segndoNumero);
// console.log(resto);
// //dessa forma estamos trabalhando dessestruturando e trazendo as informacoesque precisamos.

// //usando o resto podeemos puxar tambem as demais informacoes, trazendo primeiro a que precisamos e depois o resto.
//
//
//Dentro de cada lista temos os indices, e dentros dos indices temos a numeracao do array
//                   0         1          2
//                0  1. 2.  0. 1. 2.   0. 1. 2
const numeros = [[1, 2, 3][(4, 5, 6)][(7, 8, 9)]];
//
//console.log(numeros[1][2]);
//dessa forma ele puxa o indice 1( o do meio, e o numero 2 que seria o numero 6)

const [lista1, lista2, lista3] = numeros;
console.log(lista3[2]);
//isso seria uma atribuicao via dessestruturacao, dessa forma transformamos os arrays em mini blocos deixando mais facil o entendimento.
