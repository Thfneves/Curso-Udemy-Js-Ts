function meuEscopo() {
  const form = document.querySelector(".form");
  const resultado = document.querySelector("resultado");

  const pessoas = [];
  function recebeEventoForm(evento) {
    evento.preventDefault();
    //aqui usamos o form acima na linha 2 para acessar o dom e especificamos que queremos o .form
    //abaixo estamos especificando quais elementos do form queremos, puxando eles pela classe.

    const nome = form.querySelector(".nome");
    const sobrenome = form.querySelector(".sobrenome");
    const peso = form.querySelector(".peso");
    const altura = form.querySelector(".altura");
    const resultado = [nome, sobrenome, peso, altura, resultado];
    console.log[nome];
  }

  //para que apareca no console.loge preciso usarmos o value no console.log dessa forma o site salva a informacao.

  form.addEventListener("submit", recebeEventoForm);
}
meuEscopo();
