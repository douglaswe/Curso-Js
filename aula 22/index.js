// For in -> lê os indeces ou chaves (string, arrays ou objetos)
// For classico -> Retorna o indice ou chave (string, arrays ou objetos)
// For of -> Retorna o valor em si (iteraveis, arrays ou strings)

//                0        1       2
const nomes = ["Luiz", "Otavio", "Carlos"];

console.log("### For Classico ####");

for (let i = 0; i < nomes.length; i++) {
  console.log(nomes[i]);
}

console.log("### For in ####");

for (let indice in nomes) {
  console.log(nomes[indice]);
}

console.log("### For of ####");

for (let valor of nomes) {
  console.log(valor);
}
console.log("### ForEach ####");

nomes.forEach(function (valor, indice, array) {
  console.log(valor, indice, array);
});

const pessoa = {
  nome: "Douglas",
  sobrenome: "Jose",
  idade: 27,
};

// For of não funciona em obj
// for (let chave of pessoa) {
//   console.log(chave, pessoa[chave]);
// }

for (let chave in pessoa) {
  console.log(chave, pessoa[chave]);
}
