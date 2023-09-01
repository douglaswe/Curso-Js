//arrays

//indice          0        1        2
const alunos = ["Luiz", "Maria", "João"];

//alunos.shift()//remove o primeiro elemento
//alunos.pop(); //remove o ultimo

//alunos.unshift("Fabio"); // adiciona no começo
//alunos.push("Douglas"); //adiciona no final

alunos.splice(1, 0, "Carlos"); //adiciona entre o elemento 0 e 1

//alunos[0] = "Jose"; //altera o primeiro indice
//console.log(alunos.slice(0,2)) fatiando elemento

console.log(alunos);
