// Reduce -> reduzindo o array

// Some todos os números (reduce)
// Retorne um array com os pares (filter)
// Retorne um array com o dobro dos valores (map)

//somando todos os números
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce(function (acumulador, valor) {
  acumulador += valor;
  return acumulador;
}, 0); // valor inicial do acumulador
console.log(total);

// somando somente os número par
const somaPar = numeros.reduce(function (acumulador, valor) {
  if (valor % 2 === 0) acumulador += valor;
  return acumulador;
}, 0); // valor inicial do acumulador
console.log(somaPar);

// usando reduce para mostra um array com os números pares, o ideal seria usar o filter
const pares = numeros.reduce(function (acumulador, valor) {
  if (valor % 2 === 0) acumulador.push(valor); //para saber se um número e pár (resto da divisao igua a 0)
  return acumulador;
}, []);

console.log(pares);

// usando reduce para mostrar um array com o dobro dos valores, o ideal seria usar o map
const dobro = numeros.reduce(function (acumulador, valor) {
  acumulador.push(valor * 2);
  return acumulador;
}, []);

console.log(dobro);

// Retorne a pessoa mais velha
const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Leticia", idade: 19 },
  { nome: "Rosana", idade: 90 },
  { nome: "Wallace", idade: 47 },
];

// const maisVelha = pessoas.reduce(function (acumulador, valor) {
//   if (acumulador.idade > valor.idade) return acumulador;
//   return valor;
// });
const maisVelha = pessoas.reduce(function (acumulador, valor) {
  if (acumulador.idade > valor.idade) return acumulador;
  return valor;
});
console.log(maisVelha);
