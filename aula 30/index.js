// Escopo léxico
const nome = "Luiz";

function falaNome() {
  const nome = "Carlos";
  console.log(nome);
}

function usaFalaNome() {
  falaNome();
}
usaFalaNome();
