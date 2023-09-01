// Funções imediatas (IIFE)
// Immediately invoked function expression

(function (idade, peso, altura) {
  const sobrenome = "Henrique";
  function criaNome(nome) {
    return nome + " " + sobrenome;
  }

  function falaNome() {
    console.log(criaNome("Luiz"));
  }

  falaNome();
  console.log(idade, peso, altura);
})(20, 80, 1.8);
