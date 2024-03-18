//operador condicional (ternário) é o único operador JavaScript que possui três operandos. Este operador é frequentemente usado como um atalho para a instrução if.
const pontuacaoUsuario = 999;
// if (pontuacaoUsuario >= 1000) {
//   console.log(`usuario vip`);
// } else {
//   console.log(`usuario normal`);
// }
//ABAIXO VAMOS USAR UMA OPERACAO TERNARIA
const nivelUsuario =
  pontuacaoUsuario >= 1000 ? `Usuario vip` : `Usuario normal`;
//Essa unica linha de codigo quer dizer a mesma coisa que o codigo la em cimia, e uma maneira mais resumida de trabalhar mais clean.
corUsuario = null;
const corPadrao = corUsuario || `Preta`;
console.log(nivelUsuario, corPadrao);
//aqui o professor comentou sobre alteracao ternaria e alteracao de cor tambem.
