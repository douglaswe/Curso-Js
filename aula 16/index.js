//Objeto Date

//const tresHoras = 60 * 60 * 3 * 1000;

//const data = new Date(2019,3); // a, m, d, h, M, s, ms
// const data = new Date('2023-12-7 20:20:59');
// console.log('Dia',data.getDate());
// console.log('Mês',data.getMonth() + 1); // Mês começa do zero
// console.log('Ano',data.getFullYear());
// console.log('Hora',data.getHours());
// console.log('Min',data.getMinutes());
// console.log('Seg',data.getSeconds());
// console.log('ms',data.getMilliseconds());
// console.log('Dia semana',data.getDay()); // 0 - Domingo , 6 - Sábado

// console.log(data.toString());

function zeroEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
  const dia = zeroEsquerda(data.getDate());
  const mes = zeroEsquerda(data.getMonth() + 1); // Mês começa do zero
  const ano = zeroEsquerda(data.getFullYear());
  const hora = zeroEsquerda(data.getHours());
  const min = zeroEsquerda(data.getMinutes());
  const seg = zeroEsquerda(data.getSeconds());

  return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}
const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);
