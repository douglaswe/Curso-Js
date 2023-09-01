// Funções fábrica (Factory funcions)
// funçao dentro de um objeto e um metodo

function criaPessoa(nome, sobrenome, altura, peso) {
  return {
    nome,
    sobrenome,

    // Getter
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },

    set nomeCompleto(valor) {
      valor = valor.split(" ");
      this.nome = valor.shift();
      this.sobrenome = valor.join(" ");
    },

    fala: function (assunto = "falando sobre nada") {
      return `${this.nome} esta ${assunto}.`;
    },
    altura: altura,
    peso: peso,
    // Getter
    get imc() {
      const indice = this.peso / this.altura ** 2;
      return indice.toFixed(2);
    },
  };
}

const p1 = criaPessoa("Luiz", "Otavio", 1.8, 80);
p1.nomeCompleto = "Maria Oliveira Silva";
console.log(p1.nome);
console.log(p1.sobrenome);
//console.log(p1.nomeCompleto);
console.log(p1.fala());
// console.log(p1.imc);
// const p2 = criaPessoa('Taiz', 'Silva', 1.60, 42);
// console.log(p2.fala('falando sobre js'));
// console.log(p2.imc());
