//retorno das funcoes
//return termina a funcao e retorna um valor
//function soma(a, b) {
// return a + b;
// }
// console.log(soma(5, 2));
//professor comentou sobre funcoes que nao usam valor, nao retornam valor.
/*
function criaPessoa(nome, sobrenome) {
  return { nome, sobrenome };
}
const p1 = criaPessoa(`luiz`, `neves`);
const p2 = {
  nome: `thiago`,
  sobrenome: `neves`,
};
console.log(typeof p1);
console.log(typeof p2);
*/
//Dessa duas formas podemos criar objetos, tanto p1 como p2.

function falaFrase(comeco) {
  function falaResto(resto) {
    return comeco + `` + resto;
  }
  return falaResto;
}
const OlaMundo = falaFrase(`Ola`);
console.log(OlaMundo);
//nao entendi muito bem essa aula, professor tem uma boa didatica porem mesmo re assistindo as aulas nao entendi o conceito que ele quis passar.
