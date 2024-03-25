const inputTarefa = document.querySelector(`.input-tarefa`);
const btnTarefa = document.querySelector(`.btn-tarefa`);
const tarefas = document.querySelector(`.tarefas`);

function criaLi() {
  const li = document.createElement(`l1`);
  return li;
  //esse bloco de codigo cria um elemento em l1
}

inputTarefa.addEventListener(`keypress`, function (e) {
  //console.log(e)
  //Aqui estamos criando um evento, na aula em questao o professor coloca na linha 12 console.log(e), para identificar no console.log qual
  // o codigo da tecla enter.
  if (e.keyCode === 13) {
    //console.log(`pressionar`); --> ele usou esse console log para identificar se esta pegando mesmo qual botao esa sendo pressionado
    // testando e olhando no console.log/
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
    // agora que sabemos que pressionando enter qual o codigo aparece, criamos um if.
    // esse if fala para, se pressionar enter, criar tarefa ou seja,  criar inputTarefa, onde Tarefa= a classe do formulario.
  }
});
function limpaInput() {
  inputTarefa.value = ``;
  inputTarefa.focus();
  //focus ele ira focar o cursor para escrever novamente para nao ter de ficar clicando toda hora
}
function criaBotaoApagar(li) {
  li.innerText += ``;
  const criaBotaoApagar = document.createElement(`button`);
  criaBotaoApagar.innerText = `apagar`;
  criaBotaoApagar.setAttribute(`class`, `apagar`);
  //FUNCIONALIDADE-> setAtribute, cria argumentos junto, quando a funcionalidade e criada
  criaBotaoApagar.setAttribute(`title`, `Apagar. essa tarefa`);
  //da forma que fizemos ele cria alem do botao apagar, a classe quue se chama apagar e o tittle.
  li.appendChild(criaBotaoApagar);
  //Criada a funcao para apagar os LI criados e necessario chamar essa funcao em algum lugar, ela só foi criada
}

function criaTarefa(textoInput) {
  const li = criaLi();
  //essa funcao ira exibir no console.log apenas, ela guarda a informacao.
  li.innerText = textoInput;
  tarefas.appendChild(li);
  limpaInput();
  criaBotaoApagar(li);
  //precisamos salvar essa tarefa em algum lugar,  enta. criamos a funcao abaixo
  salvarTarefas();
}

btnTarefa.addEventListener(`click`, function () {
  if (!inputTarefa.value) return;
  criaTarefa(inputTarefa.value);
  //esse bloco de codigo cria um evento, onde ao cliclar no botao enviar a informacao enviada para o form e alocada no objeto CriaTarefa;
});

document.addEventListener(`click`, function (e) {
  const el = e.target;
  /* montando o bloco. dessa forma criamos um evento, nele podemos olhar no console.log a forma que esta sendo exibido, dessa forma nos auxilia
 para poder chamar. ele em algum momento*/
  //console.log(el);
  if (el.classList.contains(`apagar`)) {
    //  console.log( `apagar`)---------> aqui criamos o console.log para identificar no console.log qual o elemento que precisamos apagar,
    //apos identificar que é o LI, elemento pai, incluimos el.parenteLEMENTE.REMOVE. Dessa forma removendo.  o elemento pai.
    el.parentElement.remove();
    salvarTarefas();
  }
});

function salvarTarefas() {
  const liTarefas = tarefas.querySelectorAll(`li`);
  const listaDeTarefas = [];

  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace(`Apagar`, ``).trim();
    listaDeTarefas.push(tarefaTexto);
  }
  const tarefasJSON = JSON.stringify(listaDeTarefas);
  localStorage.setItem(`tarefas`, tarefasJSON);
}

function adicionaTarefasSalvas() {
  const tarefas = localStorage.getItem(`tarefas`);
  const listaDeTarefas = JSON.parse(tarefas);
  for (let tarefa of listaDeTarefas) {
    criaTarefa(tarefa);
  }
}
adicionaTarefasSalvas();
