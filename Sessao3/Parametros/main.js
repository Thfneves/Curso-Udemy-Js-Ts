// function funcao() {
//   // console.log(arguments);
//   //variavel argumento, puxa toda informacao que esta nos argumentos.
//   console.log(arguments[2]);
//   //podemos selecionar o argumento especifico qu iremos usar.
// }
// funcao(`valor`, 1, 2, 3, 5);
// //aqui estamos enviando um valor um argumento para o parametro da funcao
// function funcao() {
//   let total = 0;
//   for (let argumento of arguments) {
//     total += argumento;
//   }
//   console.log(total);
// }
// funcao(1, 2, 3, 4, 5, 6, 7);
// //geralmente ocorre erro se nao passarmos parametros, apenas para funcao function, ocorre essa excecao
// argumentos que sustenta todos os argumentos enviados
function funcao(a, b, c, d, e, f) {
  //variaveis
  console.log(a, b, c, d, e, f);
}
funcao(1, 2, 3); //argumentos
//quando declaramos uma variavel e nao temos valor para ela,  o sistema retorna como undefinied, em qualquer ordem.
