//outraforma de montar o codigo.
const h1 = document.querySelector(`.container h1`);
const data = new Date();
const opcoes = {
  datestyle: `full`,
  timeStyle: `short`,
};
h1.innerHTML = data.toLocaleDateString(`pt-BR`, opcoes);
//versao mais pratica do professor, reduzindo muitas linhas. O mesmo. reforcou sobre olhar documentacao
//ok
