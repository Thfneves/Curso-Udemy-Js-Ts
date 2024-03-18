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
  //abaixo estamos setando que peso e altura sao numeros, e value e uma chave para identificar que tem valor
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
  function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
  }
  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc);
  const msg = `Seu IMC é ${imc} (${nivelImc}).`;
  setResultado(msg, true);
});

function getNivelImc(imc) {
  const nivel = [
    `Abaixo do peso`,
    `Peso normal`,
    `Pesonormal`,
    `Sobrepeso`,
    `Obesidade grau 1`,
    `Obesidade grau 2`,
    `Obesidade grau 3`,
  ];
  if (imc >= 39.9) {
    return nivel[5];
  }
  if (imc >= 34.9) {
    return nivel[4];
  }
  if (imc >= 29.9) {
    return nivel[3];
  }
  if (imc >= 24.9) {
    return nivel[2];
  }
  if (imc >= 18.5) {
    return nivel[1];
  } else if (imc >= 18.5) {
    return nivel[0];
  }
}

//acima criamos um evento ao botao submit, quaßndo clicamos ele ativa o evento preventdefault.
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
  if (isValid) {
    p.classList.add(`paragrafo-resultado`);
  } else {
    p.classList.add(`bad`);
  }
  p.innerHTML(msg);
  resultado.appendChild(p);
}
