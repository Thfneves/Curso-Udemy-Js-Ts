// Supondo que temos que lancar uma att para evitar o erro.
// usamos o cloco try para tratar o erro e alocamos para o bloco catch, para indicar o erro.
// dentro do bloco catch sinalizamos o que o sistema deve executar caso tenha algum erro
// try {
//   console.log(naoExisto);
// } catch (err) {
//   console.log(`naoexisto nao existe`);
// }
function soma(x, y) {
  if (typeof x !== `number` || typeof y !== `number`) {
    throw new ReferenceError(`x e y precisam ser numeros`);
  }
  return x + y;
}
try {
  console.log(soma(1, 2));
  console.log(soma(`1`, 2));
} catch (error) {
  console.log(`alguma coisa. mais amigavel pro usuario`);
}
