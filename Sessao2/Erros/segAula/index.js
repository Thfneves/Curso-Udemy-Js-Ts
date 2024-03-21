// try {
//   //executada quando nao ha erros
// } catch (e) {
//   //executada quando ha erros
// } finally {
//   //executa sempre
// }
function retornaHora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError(`Esperando instancia de Date`);
  }
  if (!data) {
    data = new Date();
  }
  return data.toLocalTimeString(`pt-BR`, {
    hour12: false,
  });
}
const hora = retornaHora();
console.log(hora);
//instance é. uma variavel(data) e retorno da funcao Date
