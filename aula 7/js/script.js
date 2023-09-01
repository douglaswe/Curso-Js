const numero = Number(prompt("digite um número"));
const numeroTitulo = document.getElementById("numero-titulo"); //seleciona o id na pagina html
const texto = document.getElementById("texto");

numeroTitulo.innerHTML = numero;

texto.innerHTML += `<h3>Raiz quadrada: ${numero ** 0.5} </h3>`;
texto.innerHTML += `<h3> ${numero} é inteiro: ${Number.isInteger(numero)} </h3>`;
texto.innerHTML += `<h3>Não e possivel fazer uma conta com isso? ${Number.isNaN(numero)} </h3>`;
texto.innerHTML += `<h3>Arredonda para baixo: ${Math.floor(numero)} </h3>`;
texto.innerHTML += `<h3>Arredonda para cima: ${Math.ceil(numero)} </h3>`;
texto.innerHTML += `<h3>Com duas casas decimais: ${numero.toFixed(2)} </h3>`;
