const h1 = document.querySelector(`.container h1`);
const data = new Date();
// explicacao do date na pasta ternario Date.js

function getDiaSemanaTexto(diaSemana) {
  let diaSemanaTexto;
  switch (diaSemana) {
    //a ideia e deixar o codigo mais clean.
    case 0:
      diaSemana = `Domingo`;
      //break; //e como um return, ele solicita para parar o codigo.
      return diaSemanaTexto;
    case 1:
      diaSemanaTexto = `Segunda`;
      return diaSemanaTexto;
    case 2:
      diaSemanaTexto = `Terca`;
      return diaSemanaTexto;
    case 3:
      diaSemanaTexto = `Quarta`;
      return diaSemanaTexto;
    case 4:
      diaSemanaTexto = `Quinta`;
      return diaSemanaTexto;
    case 5:
      diaSemanaTexto = `Sexta`;
      return diaSemanaTexto;
    case 6:
      diaSemanaTexto = `Sabado`;
      return diaSemanaTexto;

    default:
      diaSemanaTexto = ``;
      return diaSemanaTexto;
    //e como uma informacao padrao caso nao retorne nenhum dos dias acima.
  }
}
function getNomeMes(numeroMes) {
  let nomeMes;
  switch (numeroMes) {
    //a ideia e deixar o codigo mais clean.
    case 0:
      nomeMes = `Janeiro`;
      //break; //e como um return, ele solicita para parar o codigo.
      return nomeMes;
    case 1:
      nomeMes = `Fevereiro`;
      //break; //e como um return, ele solicita para parar o codigo.
      return nomeMes;
    case 2:
      nomeMes = `Marco`;
      //break; //e como um return, ele solicita para parar o codigo.
      return nomeMes;
    case 3:
      nomeMes = `Abril`;
      //break; //e como um return, ele solicita para parar o codigo.
      return nomeMes;
    case 4:
      nomeMes = `Maio`;
      //break; //e como um return, ele solicita para parar o codigo.
      return nomeMes;
    case 5:
      nomeMes = `Junho`;
      //break; //e como um return, ele solicita para parar o codigo.
      return nomeMes;
    case 6:
      nomeMes = `Julho`;
      //break; //e como um return, ele solicita para parar o codigo.
      return nomeMes;
    case 7:
      nomeMes = `Agosto`;
      //break; //e como um return, ele solicita para parar o codigo.
      return nomeMes;
    case 8:
      nomeMes = `Setembro`;
      //break; //e como um return, ele solicita para parar o codigo.
      return nomeMes;
    case 9:
      nomeMes = `Outubro`;
      //break; //e como um return, ele solicita para parar o codigo.
      return nomeMes;
    case 10:
      nomeMes = `Novembro`;
      //break; //e como um return, ele solicita para parar o codigo.
      return nomeMes;
    case 11:
      nomeMes = `Dezembro`;
      //break; //e como um return, ele solicita para parar o codigo.
      return nomeMes;
  }
}

function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}

function criaData(data) {
  const diaSemana = data.getDay();
  const numeroMes = data.getMonth();
  const nomeDia = getDiaSemanaTexto(diaSemana);
  const nomeMes = getNomeMes(numeroMes);
  return (
    `${nomeDia}, ${data.getDate()} de  ${nomeMes}` +
    ` de ${data.getFullYear()}` +
    ` as ${zeroAEsquerda(data.getHours())}: ${data.getMinutes()} 
  `
  );
}

h1.innerHTML = criaData(data);
