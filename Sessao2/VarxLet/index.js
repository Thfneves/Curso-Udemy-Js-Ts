let nome = `luiz`;
var nome2 = `Luiz`;
//NAO E POSSIVEL RE-DECLARAR A VARIAVEL. LET.
const verdadeira = true;
if (verdadeira) {
  let nome = `ottavio`;
  //let tem escopo de bloco ex
  // {..bloco} dentro de chaves e um bloco
  // var so tem escopo de funcao
  //  console.log(nome.nome2);
  if (verdadeira) {
    let nome = `ok`;
    console.log(nome, nome2);
  }
}
