// Prototypes

// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.nomeCompleto = () => this.nome + " " + this.sobrenome;
}

// instancia
const pessoa1 = new Pessoa("Carlos", "E."); // <- Pessoa = Função construtora
const pessoa2 = new Pessoa("Matheus", "S."); // <- Pessoa = Função construtora

console.log(pessoa1);
console.log(pessoa2);
