// Classe abstrata
class Animal {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    emitirSom() {
        console.log("Fazendo algum som indefinido");
    }
}

// Classes herdeiras
class Cachorro extends Animal {
    constructor(nome, idade, raca) {
        super(nome, idade);
        this.raca = raca;
    }

    emitirSom() {
        console.log("Au au!");
    }
}

class Gato extends Animal {
    constructor(nome, idade, cor) {
        super(nome, idade);
        this.cor = cor;
    }

    emitirSom() {
        console.log("Miau!");
    }
}

// Criando instâncias de objetos
const animal1 = new Animal("Papagaio", 5);
const Bob = new Cachorro("Bob", 4, "Labrador");
const Zelda = new Gato("Zelda", 3, "Tricolor");

// Exibindo informações
console.log(animal1);
console.log(Bob);
console.log(Zelda);

// Chamando métodos
animal1.emitirSom();
Bob.emitirSom();
Zelda.emitirSom();