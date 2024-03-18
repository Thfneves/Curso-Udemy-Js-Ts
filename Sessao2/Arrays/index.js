//arrays e dessestruturacao
let a = `a`; //B
let b = `b`; // c
let c = `c`; //a
//const esta servindo para desestruturar, onde  foi atribuido numeros para cada letra
//
const numeros = [b, c, a];
[a, b, c] = numeros;

console.log(a, b, c);
