//Closures é a habilidade que a função tem de acessar seu escopo léxico

function retornaFuncao(nome) {
  return function () {
    return nome;
  };
}

const funcao = retornaFuncao("Luiz");
const funcao2 = retornaFuncao("Joao");
console.log(funcao());
console.log(funcao2());
