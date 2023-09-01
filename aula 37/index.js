// Revisão de Arrays

const nomes = ["Eduardo", "Maria", "João"];
//const nomes = new Array('Eduardo', 'Maria', 'João')
nomes[2] = "Carlos";
delete nomes[0];
console.log(nomes);

const nome2 = "Luiz Otávio Miranda";
const nomes2 = nome2.slice(" ");
console.log(nome2);

const nomes3 = ["Luiz", "Otávio", "Miranda"];

const nome3 = nomes3.join("-");
console.log(nome3);
