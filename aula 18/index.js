//Diferença entre var e let

const verdadeira = true;

// Let tem escopo de bloco {... bloco }
// Var só tem escopo de função

let nome = "Luiz"; // criando fora do bloco
var nome2 = "Luiz"; // criando

if (verdadeira) {
  let nome = "Otavio"; // criando dentro do bloco
  var nome2 = "Rogerio"; // Redeclarando

  if (verdadeira) {
    var nome2 = "Ronaldo"; // Redeclarada
    let nome = "Outra coisa";
  }
}

console.log(nome, nome2);

// function falaOi() {

//  if (verdadeira) {
//     let nome = "Luiz";
//     var sobrenome = "Costa";
//   }

//   console.log(sobrenome);
// }

// falaOi();

// console.log(sobrenome);
// var sobrenome = 'Costa';
