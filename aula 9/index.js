//funcões

// function saudacao(nome) {//parametro

//   return `bom dia ${nome}!`;
// }

// const variavel = saudacao("Luiz"); //passando o valor do parametro e chamando a funcao
// console.log(variavel); // exibindo o valor da variavel

// function soma(x =1 , y = 1) { //recebe dois valores definindo um valor padrao
//     const resultado = x + y ;
//     return resultado;
// }
// console.log(soma())
//console.log(soma(2,9)) //funcao que faz a soma

//funcao anonima
// const raiz = function (n) {
//     return n ** 0.5;
// };//precisa do ponto e virgula

// console.log(raiz(16))

// arrow function
const raiz = (n) => n ** 0.5; //so uma linha na funcao pode simplificar

console.log(raiz(16));
