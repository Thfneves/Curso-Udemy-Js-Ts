// //quando utilizamos um laco for sabemos o tamanho dos elementos que vamos utilizar.
// // quando usamos while ou dowhile, nao sabemos quantas vezes essa repeticao tera de ocorrer quando o laco termine.

// let i = 0;

// while (i <= 10) {
//   console.log(i);
//   i++;
//   // se nao colocarmos um laco i++ se torna um laco infinito, porque nao segue atualiazndo o i, ele nao adciona um numero e fica. no zero pra sempre
// }
// usando min e max
function random(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}
const min = 1;
const max = 50;
let rand = random(min, max);
while (rand !== 10) {
  rand = random(min, max);
  console.log(rand);
}
// laco while e usado exatamente quando nao sabemos quando vai terminar, enquanto ele nao sabe quando chega a resposta verdadeira
// do while= faca e check a condicao
do {
  rand = random(min, max);
  console.log(rand);
} while (rand !== 10);
