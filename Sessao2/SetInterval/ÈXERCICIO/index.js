function getTimeFromSeconds(segundos) {
  const data = new Date(segundos * 1000);
  return data.toLocaleTimeString(`pt-BR`, {
    hour12: false,
    timeZone: `UTC`,
  });
}

const relogio = document.querySelector(`.relogio`);
const iniciar = document.querySelector(`.iniciar`);
const pausar = document.querySelector(`.pausar`);
const resetar = document.querySelector(`.resetar`);
let segundos = 0;
let timer;

function iniciaRelogio() {
  const timer = setInterval(function () {
    segundos++;
    relogio.innerHTML = getTimeFromSeconds(segundos);
  }, 1000);
}

iniciar.addEventListener(`click`, function (event) {
  relogio.classList.remove();
  clearInterval(timer);
  iniciaRelogio();
});

pausar.addEventListener(`click`, function (event) {
  clearInterval(timer);
});

resetar.addEventListener(`click`, function (event) {
  clearInterval(timer);
  relogio.innerHTML = `00:00:00`;
  segundos = 0;
});
