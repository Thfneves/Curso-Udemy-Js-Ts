//a ideia e um desafio basico parafaer. o usuario digitar um valor.

//.  let num1 = prompt("dIGITE UM NÚMERO");
//.  let num2 = prompt("digite numero2");
//Se trouxermos o num1+ num2 ira vir de forma string, precisamos alterar para que o resultado seja numerico
//num1 = Number(num1());
//num2 = Number(num2);
//onst resultado = num1 + num2;
//alert("o resultado foi de :", resultado);
// outro exercicio
/*
Valor de a tenha o valor de B
Valor de B tem o valor de C
valor de C tem o valor de A
*/
let varA = "A"; //b
let varB = "B"; //c
let varC = "C"; //a
let varD = "";
//Minha ideia e criar uma variavel e ir transfirindo o valor para ela.
varD = varA;
varA = varB;
varB = varC;
varC = varD;
varD = null;
console.log("varA", varA, "varb", varB, "varC", varC, varD);
//TAMBEM PODERIAMOS TER FEITO COMO O PROFESSOR
[varA, varB, varC] = [varB, varC, varA];
