function getDiaSemanaTexto() {
  let diaSemanaTexto;
  switch (diaSemana) {
    //a ideia e deixar o codigo mais clean.
    case 0:
      diaSemana = `Domingo`;
      //break; //e como um return, ele solicita para parar o codigo.
      return diaSemanaTexto;
    case 1:
      diaSemana = `Segunda`;
      return diaSemanaTexto;
    case 2:
      diaSemana = `Terca`;
      return diaSemanaTexto;
    case 3:
      diaSemana = `Quarta`;
      return diaSemanaTexto;
    case 4:
      diaSemana = `Quinta`;
      return diaSemanaTexto;
    case 5:
      diaSemana = `Sexta`;
      return diaSemanaTexto;
    case 6:
      diaSemana = `Sabado`;
      return diaSemanaTexto;

    default:
      diaSemanaTexto: ``;
    //e como uma informacao padrao caso nao retorne nenhum dos dias acima.
  }
  return diaSemanaTexto;
}

const data = new Date(`1987-04-21`);
const diaSemana = data.getDay();
const diaSemanaTexto = getDiaSemanaTexto(diaSemana);
//let diaSemanaTexto;
//usando switch
//case entraria como, caso for zero

// if (diaSemana === 0) {
//   diaSemanaTexto = `Domingo`;
// } else if (diaSemana === 1) {
//   diaSemana = `Segunda`;
// } else if (diaSemana === 2) {
//   diaSemana = `Terca`;
// } else if (diaSemana === 3) {
//   diaSemana = `Quarta`;
// } else if (diaSemana === 4) {
//   diaSemana = `Quinta`;
// } else if (diaSemana === 5) {
//   diaSemana = `Sexta`;
// } else if (diaSemana === 6) {
//   diaSemana = `Sabado`;
// } else {
//   diaSemana = ``;
// }
console.log(diaSemana, diaSemanaTexto);
