/*
Object.value
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
...(spread)

// Já vimos

Object.keys (retorna a chave)
Object.freeze (congela o objeto)
Object.defineProperties (define varias propiedades)
Object.defineProperty (define uma propiedade)
*/

const produto = { nome: "Caneca", preco: 1.8 };

const outraCoisa = { ...produto, material: "porcelana" }; // spread
//const outraCoisa = Object.assign({}, produto, { material: 'porcelana' });
// const outraCoisa = { nome: produto.nome, preco: produto.preco };

outraCoisa.nome = "Outro nome";
outraCoisa.preco = 2.5;

console.log(produto);
console.log(Object.keys(produto));
console.log(Object.values(produto));
console.log(Object.entries(produto));

console.log("--------------------------------------");

for (let [chave, valor] of Object.entries(produto)) {
  console.log(chave, valor);
}

console.log("--------------------------------------");

const produto2 = { nome: "Produto", preco: 2.8 };
Object.defineProperty(produto2, "nome", {
  writable: false,
  configurable: false,
});
console.log(Object.getOwnPropertyDescriptors(produto2, "nome"));
delete produto2.nome;

produto2.nome = "Outra coisa";
console.log(produto2);
