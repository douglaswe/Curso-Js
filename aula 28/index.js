// argumentos que sustenta todos os argumentos enviados
function funcaoA(a, b, c) {
  let total = 0;
  for (let argumento of arguments) {
    total += argumento;
  }
  console.log(total, a, b, c);
}
funcaoA(11, 2, 5);

function funcaoB(a, b, c, d, e, f) {
  //Parametros
  console.log(a, b, c, d, e, f);
}
funcaoB(1, 2, 3); //Argumentos

function funcaoC(a, b = 1, c = 4) {
  console.log(a + b + c);
}
funcaoC(2, undefined, 3);
funcaoC(2, 5, 3);
funcaoC(2, 3);

function funcaoD({ nome, sobrenome, idade }) {
  console.log(nome, sobrenome, idade);
}
funcaoD({ nome: "Luiz", sobrenome: "Gomes", idade: 30 });

function conta(operador, acumulador, ...numeros) {
  for (let numero of numeros) {
    if (operador === "+") acumulador += numero;
    if (operador === "-") acumulador -= numero;
    if (operador === "/") acumulador /= numero;
    if (operador === "*") acumulador *= numero;
  }
  console.log(acumulador);
}
conta("+", 10, 20, 30, 40, 50);
conta("-", 10, 20, 30, 40, 50);
conta("/", 10, 20, 30, 40, 50);
conta("*", 10, 20, 30, 40, 50);

const contaB = function (operador, acumulador, ...numeros) {
  for (let numero of numeros) {
    if (operador === "+") acumulador += numero;
    if (operador === "-") acumulador -= numero;
    if (operador === "/") acumulador /= numero;
    if (operador === "*") acumulador *= numero;
  }
  console.log(acumulador);
};
contaB("+", 10, 20, 30, 40, 50);

const contaC = (...args) => {
  console.log(...args);
};
contaC("+", 1, 20, 30, 40, 50);
