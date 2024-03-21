function mostraHora() {
  let data = new Date();
  return data.toLocaleDateString(`pt-BR`, {
    hour12: false,
  });
}
//SETINTERVAL-> configura um intervalo de tempo para que alguma funcao seja executada em um determinado momento.
function funcaoDoInterval() {
  console.log(mostraHora());
}
// quando colocamos a funcaoDoInterval dentro de setInterval,estamos apenas passando
//a referencia, passando a referencia estamos passando a funcao sem executar ela.
setInterval(funcaoDoInterval, 1000);
//quando coocamos a virgula definimos uma nova funcao, essa nova funcao conta os milisegundos que sera executada,no total mil mili segundos.
setTimeout(function () {
  clearInterval(timer);
}, 5000);
//setTimeOut-> executa apenas uma vez, acima indicamos quando o codigo para no caso 5 mil mili segundos pra parar de executar o codigo.
