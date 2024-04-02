//funcoes imediatas ou funcoes auto invocadas. ( IIFE)- IMMEDIATELY INVOKED FUNCTION EXPRESSION
//
// a  ideia pratica e criar o bloco de codigo e chamar quando precisa, coisa que e sempre feita.
// function qualquerCoisa() {
//   console.log(`123`);
// }
// //IIFE, envolvemos ela em parentesses
// (function () {
//   const nome = `thiago`;
//   console.log(nome);
// })(); // dessa forma e chamada automaticamente,  e nao e preciso alguma acao. para chama-la
// const nome = `qualquer cosia`;

(function () {
  const sobrenome = `neves`;
  function CriaNome(nome) {
    return nome + `` + sobrenome;
  }
  function falaNome() {
    console.log(CriaNome(`thiago`));
  }
  falaNome();
})();
//Criando a funcao imediata conseguimos proteger o codigo para nao ser alterado por algo de fora desse bloco, no exemplo mesmo invocando const
//abaixo, nao altera a informacao que esta dentro do bloco
const nome = `qualquer coisa`;
