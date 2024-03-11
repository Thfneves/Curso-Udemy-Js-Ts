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
