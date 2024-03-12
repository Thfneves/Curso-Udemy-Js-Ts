// const array = [1, 2, 3];
// //e possivel alterar as informacoes, porque sao valores de referencia
// array.push(4);
// array[0] = "Luis";
// console.log(array);
// //aqui alteramos o primeiro array.
// const nome01 = "luis";
// const idade01 = 25;
// const nome02 = "luis";
// const idade02 = 25;
// const nome03 = "luis";
// const idade03 = 25;
function criaPessoa(nome, sobrenome, idade) {
  // os dados dentro dos () sao parametros a serem preenchidos
  return {
    nome: nome,
    sobrenome: sobrenome,
    idade: idade,
  };
}
// abaixo em aspas sao os argumentos que serao preenchidos nos parametros.

const pessoa1 = criaPessoa("luiz", "otavio", 25);
// e possivel criar os dados infinitamente, e puxarmos no console.log
//podemos alterar a forma que elas aparecem com ( acho que innerHTML)
console.log(pessoa1);
/*
Primitivo (imutaveis) - string, number, boolean, undefined,
null ( bigint, symbol) - valor copiados

referencia (mutavel -array, object, function) passado por referencia, como abaixo.

*/
let a = [1, 2, 3];
let b = a;
console.log(a, b);
// esses dados apontam o mesmo valor na memoria, se altera algum valor, altera as duas variaveis.
a.push(4); //push inclui uma informacao
console.log(a, b);
b.pop(); //exclui uma informacao.
console.log(a, b);
/*
Aqui alteramos uma informacao, adcionando o 4 a variavel a
e tiramos uma variavel do numero b com pop
*/
const pessoa = {
  nome: "luiz",
  sobrenome: "otavio",
};

//spread, com 3 pontos espalha o valor de a dentro de b.
// mesmo espalhando o valor de a o valor de b permanece.
//nao entendi muito bem ao certo.
