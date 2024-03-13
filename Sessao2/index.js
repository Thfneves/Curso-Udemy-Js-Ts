/* 
operadores de comparacao
> maior que
dara true quando  o valor for menor do comparado ex, 10 > (e maior ) que 9? Sim, logo da true
>= maior que ou igual a
< menor que
<= menor que ou igual a
==  igualdade (valor) 
=== igualdade extrita, 
!= diferente ( valor)
!== diferente estrito (valor e tipo)
*/
const num1 = 10; //number
const num2 = "10"; //string
const comp = num1 == num2;
console.log(comp);
// essa conta deu verdadeiro mesmo estando errada, o codigo ja deduz o que esta certo
//porem nao e bom usar esse formato, pode dar  problema com codigos robustos
/*.    OPERADORES LOGICOS
&& and  e -> todas expressoes precisam ser verdadeiras pra retornar true, ele retorna o primeiro valor caso falso.
|| or - ou -> Caso algum operador de verdadeiro ira retornar verdadeiro
! not - nao
*/
