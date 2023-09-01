/*
Operadores Lógicos 

&& -> AND -> E -> Todas as expressões precisam ser verdadeiras para retornar true
|| -> OR -> OU -> Precisa de pelo menos uma expressão verdadeira para retornar true 
! -> NOT -> NÃO -> Nega uma expressão
*/
const expressaoAnd = true && true && true && true; // tem que ser todas verdadeira
const expressaoOr = true || false || false || true; // nao precisa ser todas verdadeira

//console.log(expressaoOr);

const usuario = "Luiz";
const senha = "123456";

const vaiLogar = usuario === "Luiz" && senha === "123456";
//console.log(vaiLogar);

//console.log(!true); // negando o true (vira false)

const a = 0;
const b = null;
const c = "false"; // somente esse e true
const d = false;
const e = NaN; // ele retorna o último valor encontrado se for todos true

console.log(a || b || c || d || e); // vai exibir o C pq o js entende que o c e true

/*Avaliações com todos os valores verdadeiros, o último valor é retornado.
Avaliações com qualquer valor falso (em qualquer posição)
o primeiro valor falso encontrado é retornado.*/
