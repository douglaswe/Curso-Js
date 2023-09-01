// Herança com classes
class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }
  ligar() {
    if (this.ligado) {
      console.log(this.nome + "Já ligado");
    }
    this.ligado = true;
    return;
  }

  desligar() {
    if (!this.ligado) {
      console.log(this.nome + "Já desligado");
      return;
    }
    this.ligado = false;
  }
}

//const d1 = new DispositivoEletronico('Smartphone');
//d1.ligar();
//d1.desligar();
//console.log(d1);

class Smartphone extends DispositivoEletronico {
  constructor(nome, cor, modelo) {
    super(nome);

    this.cor = cor;
    this.modelo = modelo;
  }
}

const s1 = new Smartphone("Samsung", "Preto", "Galaxy S10");
s1.ligar();
s1.desligar();
console.log(s1);
