//try, catch, throw e finally

function soma(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw "x e y precisam ser numeros";
  }
  return x + y;
}

try {
  console.log(soma(1, 2));
  console.log(soma(1, "2"));
} catch (e) {
  console.log("OPS,Aconteceu um erro");
}
console.log("#############");

try {
  // È executado quando não há erros
  console.log("Abri um arquivo");
  console.log("Manipulei o arquivo e gerou um erro");
  console.log("Fechei o arquivo");
} catch (e) {
  console.log("Tratando o erro");
  // È executado quando há erros
} finally {
  // Sempre
  console.log("Eu semprei sou executado");
}

console.log("#############");

function retornaHora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError("Esperando instância de Date.");
  }

  if (!data) {
    data = new Date();
  }
  return data.toLocaleTimeString("pt-BR", {
    // hour: "2-digit",
    // minute: "2-digit",
    // second: "2-digit",
    // hour12: false,
  });
}
try {
  const data = new Date();
  const hora = retornaHora();
  console.log(hora);
} catch (e) {
  //Tratar erro
}
