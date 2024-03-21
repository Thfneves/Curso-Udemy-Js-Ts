//escreva uma funcao que recebe um numero e retorne o seguinte:
//numero. divisivel por 3 = Fizz
//numero. divisivel por 5= Buzz
//numero. nao divisivel por 3 a 5 = Retorna o proprio numero
//checar se o numero e realmente um numero = retorna o proprio numero
//. Use a funcao com numeros de 0 a 100
function fizzBuz(numero) {
  if (typeof numero !== `number`) return numero;
  if (numero % 3 === 0 && 5 === 0) return `FizzBuzz`;
  if (numero % 3 === 0) return `Fizz`;
  if (numero % 5 === 0) return `Buzz`;

  return numero;
}
for (let i = 0; i <= 100; i++) {
  console.log(i, fizzBuz(i));
}
