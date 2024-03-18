const pessoa = {
  nome: `thiago`,
  sobrenome: `neves`,
  idade: 26,
  endereco: {
    rua: `osasco`,
    numero: 10,
  },
};
// funcoes precisamos usar chaves
const {
  endereco: { rua, numero },
  endereco,
} = pessoa;
///atribuicao via dessestruturacao, porque estamos extraindo uma informacao do objeto, no caso apenas o nome
console.log(endereco);
//criando o const com dois pontos: e passando entre chaves as inormacoes que queremos, estamos refinando mais ainda o codigo, desa forma trazemos
// as informacoes que queremos.
