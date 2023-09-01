// Estrutura de repetição (For classico)

// i - index
// incializando a variavel; criar a condiçao; incrementar ou decrementar
for (let i = 0; i <= 5; i++) {
  //i =+ 10, da pra fazer com negativo
  console.log(`linha ${i}`);
}

for (let i = 0; i <= 10; i++) {
  const par = i % 2 === 0 ? "par" : "impar";
  console.log(i, par);
}

const frutas = ["Maça", "Pêra", "Uva", "Banana", "Ameixa", "Abacate"];

for (let i = 0; i < frutas.length; i++) {
  console.log(`indice ${i}`, frutas[i]);
}
