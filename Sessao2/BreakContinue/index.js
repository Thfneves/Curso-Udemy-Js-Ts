//break e continue, isso permite que tenhamos controlede quando pular um elemento e ou quebrar um laco quando quisermos
//funciona em todos os lacos, for, for in while do while.
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {
  if (numero === 2) {
    continue;
  } // continue, define para ele pular o 2 e seguir com o codigo.
  if (numero === 7) {
    break;
  } //break para o. laco e quebra ate o numero. 6, nao chega no 7

  console.log(numero);
}
