/*
                function criaPessoa(nome, sobrenome) {
                return {
                    nome,
                    sobrenome,
                    fala: function (
                    assunto //assunto é um parametro
                    ) {
//Dessa forma e a mais comum de atuar, usando parametros e chamando eles futuramente.
                    return `${nome} esta ${assunto}.`;
                    },
                };
                }

                const p1 = criaPessoa(`THIAGO`, `neves`);
                console.log(p1.fala(`falando sobre JS`));
*/
function criaPessoa(nome, sobrenome, a, p) {
  return {
    nome,
    sobrenome,
    //Getter
    get nomeCompleto() {
      return `${nome}, ${sobrenome}`;
    },
    fala: function (
      assunto //assunto é um parametro
    ) {
      return `${this.nome} esta ${assunto}.`;

      //this funciona para situacoes que a variavel nao esta declarada, exemplo, nome nao esta declarado la em function criaPessoa(    , sobrenome)
      //nessa situacao this e para chamar ao objeto.
    },
    altura: a,
    peso: p,
    //Getter-> funciona para obter o valor
    get imc() {
      const indice = this.peso / this.altura ** 2;
      return indice.toFixed(2);
    },
  };
}

const p1 = criaPessoa(`THIAGO`, `neves`, 1.8, 80);
console.log(p1.nomeCompleto());
