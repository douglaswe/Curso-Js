// OPERAÇÃO TERNARIA
// (condição) ? "Valor para verdadeiro" : "Valor para falso";

const pontuacaoUsuario = 500;
const nivelUsuario = pontuacaoUsuario >= 1000 ? "Usuario Vip" : "Usuario normal";   

const corUsuario = null;
const corPadrao = corUsuario || "preta";

console.log(nivelUsuario,corPadrao)



// if (pontuacaoUsuario >= 1000){
//     console.log("Usuario Vip");
// }else{
//     console.log("Usuario normal");
// }