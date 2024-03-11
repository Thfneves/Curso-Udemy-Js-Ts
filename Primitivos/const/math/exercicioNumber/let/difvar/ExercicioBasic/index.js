const numero = Number(prompt("Digite um numero:"));
const numeroTitulo = document.getElementById("numero-titulo");
const texto = document.getElementById("texto");

numeroTitulo.innerHTML = numero;
texto.innerHTML = "";
texto.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5}. </p>`;
texto.innerHTML += `<p>${numero} é um numero inteiro:${Number.isInteger(
  numero
)} . </p>`;
texto.innerHTML += `<p>${numero} é um numero inteiro:${Number.isNaN(
  numero
)} . </p>`;
texto.innerHTML += `<p>${numero} é um numero baixo:${Math.floor(
  numero
)} . </p>`;
texto.innerHTML += `<p>${numero} é um numero cima:${Math.ceil(numero)} . </p>`;
texto.innerHTML += `<p>Com duas casas decimais ${numero.toFixed(2)} . </p>`;
