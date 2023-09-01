// IEEE 754-2008
let num1 = 0.7;
let num2 = 0.1;

num1 += num2; // num1 = num1 + num2

num1 = Number(num1.toFixed(2)); // faz a conta ficar precisa

console.log(num1);
Number.isNaN(num1); //ve se da pra fazer uma conta
Number.isInteger(num1); //ve se um numero e inteiro
console.log(num1.toString() + num2); //tranforma em string temporariamente
num1 = num1.toString(); //transforma em string definitivo
console.log(num1.toString(2)); // ver o binario
console.log(num2.toFixed(2)); //arredonda e mostra o numero depois da virgula
