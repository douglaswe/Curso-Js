/*
Operadores de comparação

> maior que
>= maior que ou igual a 
< menor que
<= menor que ou igual a 
== igualdade (valor) ******* não usar 
=== igualdade estrita (valor e tipo)
!= diferente (valor) ******* não usar 
!== diferente estrita (valor e tipo) 

*/

//console.log(10 > 5);
//console.log(10 >= 10);
//console.log(10 <= 11);
//console.log(10 < 11);

const num1 = 10; //number
const num2 = "10"; //string
const comp = num1 == num2; //compara só o valor e não o tipo
console.log(comp); // fala que e igual, mesmo não sendo (True)

const num3 = 10; //number
const num4 = "10"; //string
const comp2 = num3 === num4; //compara o valor e o tipo
console.log(comp2); // Ja fala que não e igual (False)
