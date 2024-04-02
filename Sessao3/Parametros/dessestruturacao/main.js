/*
        //arguentos que sustenta todos os argumentos enviados
        function funcao({ nome, sobrenome, idade }) {
        console.log(nome, sobrenome, idade);
        }
        funcao({ nome: `lUIZ`, sobrenome: `Otavio`, idade: 20 });
        //Assim dessestruturamos para cada variavel receber o argumento
*/
function funcao([valor1, valor2, valor3]) {
  console.log(valor1, valor2, valor3);
}
funcao([`thiago`, `neves`, 27]);
//Dessa. forma fazemos tambem com array
