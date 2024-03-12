const numero = Number(prompt("digite um numero"));
//document e a manipulacaodo dom
const numeroTitulo = document.getElementById("numero-titulo");
//getElementByid é usado para pegar uma informacao por ID.
//Dentro dos parenteses fica a ID que desejamos selecionar.
//a variavel em questao(ID) que selecionamospelo ID no index.HTML.
const texto = document.getElementById("texto");
numeroTitulo.innerHTML = numero;
//o inner Html e alterado para numero.
texto.innerHTML = `<p>Seu numro +2 é ${numero + 2}.</p>`;
//o codigo retorna sempre um texto, mesmo que digitemos como string.
// no caso daria um resultado diferente,  precisamos converter.
//dessa forma atualizamos. o codigo na linha 1,/ const numero = Number(prompt("digite um numero"));/
//colocando o number o codigo entender que é um numero.
