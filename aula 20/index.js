// Atribuição via destruturação (Objetos)
const pessoa = {
  nome: "Douglas",
  sobrenome: "José",
  idade: 24,
  endereco: {
    rua: "Av Brasil",
    numero: 320,
  },
};

//const {nome, endereco:{rua,numero},endereco } = pessoa; // Atribuição via destruturação
const { nome, sobrenome, ...resto } = pessoa;
//console.log(nome, rua, numero, endereco);
console.log(nome, sobrenome, resto);
