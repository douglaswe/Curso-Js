// Revisão de objetos

const pessoa = {
  nome: "Carlos",
  sobrenome: "Otavio",
};
console.log(pessoa.nome);

const pessoa1 = new Object();
pessoa1.nome = "Luiz";
pessoa1.sobrenome = "Eduardo";
pessoa1.idade = 24;
//delete pessoa1.nome
console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);

pessoa1.falarNome = function () {
  return `Meu nome é ${this.nome}`; // metodos dentro de um obj
};
pessoa1.getDataNascimento = function () {
  const dataAtual = new Date();
  return dataAtual.getFullYear() - this.idade;
};
console.log(pessoa1.getDataNascimento());

for (let chave in pessoa1) {
  console.log(chave);
  console.log(pessoa1[chave]);
}

// Factory function

function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
    nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
  };
}

const p1 = criaPessoa("Carlos", "Eduardo");
console.log(p1.nomeCompleto());

// Constructor function

// this atrela a um novo obj
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  Object.freeze(this);
}

const p2 = new Pessoa("Carlos", "Eduardo");
//Object.freeze(p2); // trava o obj (para não trocar o valor)
p2.nome = "alguma coisa";
delete p2.nome;
const p3 = new Pessoa("Lucas", "Santos");

console.log(p2);
console.log(p3);
