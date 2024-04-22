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
      return `${this.nome}, ${this.sobrenome}`;
    },

    //Setter
    set nomeCompleto(valor) {
      valor = valor.split(``);
      this.nome = valor.shift();
      this.sobrenome = valor.join(``);
      console.log(valor);
    },
    fala: function (
      assunto = `seila` //assunto é um parametro
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
console.log(p1.nomeCompleto);
console.log(p1.imc);
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.fala());
