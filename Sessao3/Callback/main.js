//quando uma acao finaliza executamos callback para chama-la novamente
function rand(min = 1000, max = 3000) {
  const num = Math.random() * (max - min) + min;
  return Math.floor(num);
}

//setando um timeout para definir o tempo que o bloco de codigo sera executado.
function f1(callback) {
  setTimeout(function () {
    console.log(`f1`);
    //callback e para chamar a funcao, se callback for chamada nesse bloco de codigo ele retorna para o bloco de codigo
    if (callback) callback();
  }, rand());
}
function f3(callback) {
  setTimeout(function () {
    console.log(`f3`);
    if (callback) callback();
  }, rand());
}
function f2(callback) {
  setTimeout(function () {
    console.log(`f2`);
    if (callback) callback();
  }, rand());
}
f1(function () {
  f2(function () {
    f3(function () {
      console.log(`ola mundo`);
    });
  });
  //aqui criamos uma funcao dentro de oura, criando  uma ordem, primeiroo. sistema executa f1 e depois vai para f2 e assim para f3.
  //Praticamente estamos chamando callback atras de callback.
});
