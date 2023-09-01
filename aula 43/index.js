// Filter + Map + Reduce

// Retorne o dobro de todos os pares
// -> Filtar os pares
// -> Dobrar os valores
// -> Resuzir (somar tudo)

const numeros = [5, 8, 10, 50, 6, 8, 30, 2];

const numerosPares = numeros
  .filter((valor) => valor % 2 === 0)
  .map((valor) => valor * 2)
  .reduce((acumulador, valor) => acumulador + valor);

// [8, 10, 50,   6,  8,  30, 2] pares
// [16, 20, 100, 12, 16, 60, 4 ] dobro
// 228 soma do dobro de todos os pares
console.log(numerosPares);
