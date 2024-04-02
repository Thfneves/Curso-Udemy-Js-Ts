//relacionado ao escopo lexico
function RetornaFuncao() {
  const nome = `Luiz`;
  return function () {
    return nome;
  };
}
const funcao = RetornaFuncao(`thiago`);
const funcao2 = RetornaFuncao(`joao`);
console.log(funcao(), funcao2());

//closures e a habilidade de ativar a funcao do escopo lexico, ele acessa a. outra funcao.
