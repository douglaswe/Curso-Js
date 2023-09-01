//Método Splice

//                -3        -2      -1
//                 0         1       2
const nomes = ["Eduardo", "Maria", "João"];

// nomes.slice(indice atual, delete, elem1, elem2);
const removidos = nomes.splice(1, 1);
const removidos2 = nomes.splice(1, 0, "Carlos");
//const removidos = nomes.splice(-3,1);
//const removidos = nomes.splice(-3,Number.MAX_VALUE);

console.log(nomes);
console.log(removidos);
