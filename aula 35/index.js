// Função construtora retorna objeto
// Função fabrica -> criaFuncao
// Construtora -> Pessoa (new)
function Pessoa(nome, sobrenome) {
  // Atributos ou métodos privados
  const ID = 123456;
  const metodoInterno = () => {};

  // Atributos ou métodos publicos
  this.nome = nome; // Pessoa.nome =
  this.sobrenome = sobrenome;

  this.metodo = () => {
    console.log(this.nome + ": Sou um metodo");
  };
}

const p1 = new Pessoa("Luiz", "Otávio");
const p2 = new Pessoa("Carlos", "Otávio");

p2.metodo();
