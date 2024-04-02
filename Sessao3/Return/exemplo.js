function criaMultiplicador(multiplicador) {
  //multiplicador esta nesse bloco
  function multiplicacao(n) {
    return n * multiplicacao;
    //onde n é o numero de multiplicacao
  }
}
const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(duplica(3));
console.log(duplica(4));
