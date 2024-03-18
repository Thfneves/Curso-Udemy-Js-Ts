//for
// primeira parte e criar uma variavel de controle i apos isso setamos um valor inicial o valor geralmente comeca com a primeira informacao
// precisamos de uma condicao para informar quando ira parar, dessa forma nao vira um loop infinito
// // i++ serve para sempre adcionar um numero a cada looping
// for (let i = 0; i <= 5000; i++) {
//   console.log(`lINHA ${i}`);
// }
// //indo um. pouco alem
for (let i = 0; i <= 51; i++) {
  const par = i % 2 === 0 ? "par" : `impar`;
  console.log(i, par);
}
//dessa forma podemos identificar o que é par e o que é impar.
