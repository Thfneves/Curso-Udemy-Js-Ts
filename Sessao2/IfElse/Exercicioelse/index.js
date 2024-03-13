const form = document.querySelector(".form"); //linkando com. o form html

form.addEventListener(`submit`, function (e) {
  e.preventDefault();
  //acima  addeventlistner esta setando para a pagina nao atualizar e perder os dados que sao. preenchidos, (e) é um evento que esta sendo declarado
  //enquanto o preventDefault faz esse trabalho
  const inputPeso = e.target.querySelector(`.peso`);
  const inputAltura = e.target.querySelector(`.altura`);
  //e.target(pegar)   queryselector é para puxar as informacoes dessas classes, no html
  console.log(inputPeso);
  console.log(inputAltura);

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);
  if (!peso) {
    setResultado(`Peso invalido`, false);
    return;
  } // aqui o professor comentou um pouco sobre quano a funcao da verdadeira, ela para de rodar, aqui usando o return ele ja pede para
  // retornar em vez de rodar todo o codigo

  if (!altura) {
    setResultado(`Alturua invalida`, false);
    return;
  }
  const imc = getImc(peso, altura);
  console.log(imc);
});

function getImc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

//acima criamos um evento ao botao submit, quando clicamos ele ativa o evento preventdefault.
function criaP() {
  const p = document.createElement(`p`);
  p.classList.add(className);
  return p;
  //esse bloco de funcao cria um paragrafo tbm
}
//isvalid abaixo, ira definir a cor da resposta, se for verdadeiro ele fica verde, senao vermelho.
function setResultado(msg, isValid) {
  const resultado = document.querySelector(`.resultado`);
  resultado.innerHTML = ``;
  // const p = document.createElement(`p`);
  // p.classList.add(`paragrafo-resultado`);
  // p.innerHTML = `qualquercoisa`;
  //Essa e uma maneira de criar uma funcao para criar paragrafos e espelhar a resposta no html
  //resultado.appendChild(p);
  const p = criaP();
  p.innerHTML(msg);
  resultado.appendChild(p);
}
