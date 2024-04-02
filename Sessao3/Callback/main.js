//quando uma acao finaliza executamos callback para chama-la novamente
function rand(min = 1000, max = 3000) {
  const num = Math.random() * (max - min) + min;
  return Math.floor(num);
}

//setando um timeout para definir o tempo que o bloco de codigo sera executado.
function f1(callback) {
  setTimeout(function () {
    console.log(`f1`);
  }, rand());
}
function f3(callback) {
  setTimeout(function () {
    console.log(`f3`);
  }, rand());
}
function f2(callback) {
  setTimeout(function () {
    console.log(`f2`);
  }, rand());
}
f1();
f2();
f3();
console.log(`òla mundo`);
