//Preencha um array de 30 posições com números gerados de forma randômica.
// Depois, percorra o array e faça a soma de todos os números primos desse array.
// Obs.: Número primo é aquele que pode ser dividido por apenas dois fatores: o número um e ele mesmo.

const randomNumber = () => {
  return Math.floor(Math.random() * (100 - 1) + 1);
}; // gera um numero aleatorio

const isPrime = (num) => {
  let aux = num;
  while (aux > 2) {
    aux--;
    if (num % aux === 0 && num !== 1 && num !== 2) {
      return false;
    }
  }
  return true;
}; // retorna true se for primo e false se não for primo

const arr = [];

for (let i = 0; i < 30; i++) {
  arr.push(randomNumber());
}
console.log(arr);

const sumPrimeNumbers = arr.reduce((total, value) => {
  if (isPrime(value)) {
    total += value;
  }
  return total;
}, 0);

console.log(sumPrimeNumbers);
