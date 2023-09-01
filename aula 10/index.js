//objeto

//criando objeto usando funcao
// function criaPessoa(nome, sobrenome, idade) {
//   return { nome, sobrenome, idade };
// }

// const pessoa1 = criaPessoa("Luiz", "Otavio", 25);
// const pessoa2 = criaPessoa("Carlos", "Henrique", 23);
// const pessoa3 = criaPessoa("Matheus", "Silva", 22);
// const pessoa4 = criaPessoa("Daniel", "Santos", 29);

// console.log(pessoa1);

//criando objeto usando variavel,e funcao
const pessoa1 = {
  nome: "Luiz",
  sobrenome: "Miranda",
  idade: 25,

  fala() {
    console.log(`A minha idade e ${this.idade}.`);
    //console.log(`${this.nome} ${this.sobrenome} está falando oi...`);//somente nesse contexto, dentro do objeto
  }, // this representa esse obj
  incrementaIdade() {
    this.idade++;
  },
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
