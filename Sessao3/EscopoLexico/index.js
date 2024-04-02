//escopo. lexico e quando a funcao conhece o local que foi declarada e os vizinhos, o que seria, vizinhos. o grupo de codigos que tem no java.
//exemplo. obloco de codigo falanome esta montado no comeco do codigo, porem so e chamado no final do codigoo. Quando chamamos a funcao
// ela vai procurando em cada bloco ate encontrar seu bloco de codigos.

const nome = `Luiz`;
function falaNome() {
  console.log(nome);
}
falaNome();

function usaFalaNome() {
  falaNome();
}
usaFalaNome();
