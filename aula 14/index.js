/*
entre 0 - 11 - Bom dia 
entre 12 - 17 - Boa tarde 
entre 18 e 23 - Boa noite 
*/

//if pode ser usado sozinho
//Sempre que utilizo a palavra else,preciso de um if antes
//Eu posso ter varios else ifs na checahem
//So posso ter um else na checagem
//Podemos usar condiçoes sem else if, utilizando apenas if e else

const hora = 50;

if (hora >= 0 && hora <= 11) {
  // se isso for verdadeiro ele da bom dia
  console.log("Bom dia");
} else if (hora >= 12 && hora <= 17) {
  console.log("Boa tarde");
} else if (hora >= 17 && hora <= 23) {
  console.log("Boa noite");
} else {
  console.log("Ola");
}

const tenhoGrana = true;

if (tenhoGrana) {
  console.log("vou sair de casa");
} else {
  console.log("nao vou sair de casa");
}

const numero = 10;

if (numero < 11){ // if independente (Verdadeira)
  console.log('O número é menor que 11.')
}


if (numero >= 0 && numero <= 5) {
  console.log("O número está entre 0 e 5.");
} else if (numero >= 6 && numero <= 8) {
  console.log("O número está entre 6 e 8.");
} else if (1 === 1) { //Verdadeira
  console.log("LITERAL");
} else if (numero >= 9 && numero <= 11) { //Verdadeira NÂO SERA EXIBIDO
  console.log("O número esta entre 9 e 11.");
} else {
  console.log("O número NÂO esta entre 0 e 11. ");
}
/* A engine do js para quando acha uma condição verdadeira no mesmo bloco 
ou seja nao sera exibido a segunda condição verdadeira, para mudar isso
eu crio um if independente fora do bloco */ 