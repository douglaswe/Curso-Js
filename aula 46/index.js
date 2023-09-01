// Object.defineProperty e  Object.defineProperties

function Produto(nome, preco, estoque) {
  Object.defineProperty(this, "estoque", {
    enumerable: true, // mostrar a chave
    value: estoque, // valor
    writable: false, // pode alterar
    configurable: true, // configuravel
  });

  Object.defineProperties(this, {
    nome: {
      enumerable: true, // mostrar a chave
      value: nome, // valor
      writable: false, // pode alterar
      configurable: true, // configuravel
    },
    preco: {
      enumerable: true, // mostrar a chave
      value: preco, // valor
      writable: false, // pode alterar
      configurable: true, // configuravel
    },
  });
}

const p1 = new Produto("Camiseta", 20, 3);
console.log(p1);
