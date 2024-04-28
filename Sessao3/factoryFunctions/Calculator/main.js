function criaCalculadora() {
  return {
    display: document.querySelector(`.display`),
    inicia() {
      alert(`oi`);
    },
    cliqueBotoes() {
      document.addEventListener(`click`, function (e) {});
    },
  };
}

const calculadora = criaCalculadora();
calculadora.inicia();
