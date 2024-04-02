//falar um pouco mais sobre funcoes.

function falaOi() {
  //Declaracao de funcao que so fala oi
  console.log(`oi`);
  //functioon hoisting-> quando executamos essa funcao
}
const souumDado = function () {
  //Function express-> quando uma constante recebe uma funcao, e podemos chamar essa funcao em qualquer momento.
  //First-class objects-> Objetos de primeira classe.
  console.log(`sou um dado`);
};
souumDado();

//arrow function
const funcaoArrow = () => {
  console.log(`sou uma. arrow function`);
};
funcaoArrow();
//Dentro de um objeto
const obj = {
  falar: function () {
    console.log(`estou falando`);
  },
};
obj.falar();
