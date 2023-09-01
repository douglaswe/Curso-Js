//Break e Continue

// Continue -> pula o elemento e vai ate o final do laço
// Break -> se achar determinado elemento sai do laço (não faz mais nada)

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let nomeQualquer of numeros) {
  if (nomeQualquer === 2 || nomeQualquer === 3) {
    console.log("pulei esse numero");
    continue;
  }

  console.log(nomeQualquer);
  if (nomeQualquer === 5) {
    console.log("numero 5 encontrado, saindo do laço");
    break;
  }
}
