// Atribuição via destruturação (Arrays)

// let a = 'A'; // B
// let b = 'B'; // C
// let c = 'C'; // A

// const letras =  [b, c, a]; // Atribuição via destruturação (Arrays)
// [a, b, c] =  letras;

// console.log(a,b,c);

// ... rest, ...spread
// const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
// const [um, dois, tres] = numeros;
// console.log(um,dois,tres);

//pulando numero
// const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
// const [um, , tres, , cinco, , sete] = numeros;
// console.log(um,tres,cinco);

//     0         1          3
//  0  1  2    0  1  2   0  1  2
const numeros = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const [lista1, lista2, lista3] = numeros;
console.log(lista3[2]);

//const [,[,,seis]] = numeros;
//console.log(seis); //6
//console.log(numeros[1][2]); // 6
