// Formas de criar um objeto

// 1. Usando literais de objeto - {}
const pessoa = {
    nome: "Paulo",
    idade: 18
};

// 2. Usando o construtor Object
const livro = new Object();
livro.titulo = "O Pequeno Príncipe";
livro.autor = "Antoine de Saint-Exupéry";

// 3. Usando classes personalizadas
class Carro {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
}
const meuCarro = new Carro("Toyota", "Corolla");

// Manipulando objetos

// Getters e Setters
const conta = {
    _saldo: 100,
    get saldo() {
        return `Seu saldo é de: ${this._saldo}`;
    },
    set saldo(valor) {
        this._saldo = valor;
    }
};
// Chamando o método set atribuindo um valor a saldo
conta.saldo = 20;

// Definindo configurações de um objeto

const animal = {
    nome: "Duke",
    idade: 12,
    filhos: [],
    something: {
        nome: "123"
    }
};

// Alterando configuração da propriedade nome do objeto animal, deixando-a imutável
Object.defineProperty(animal, "nome", { writable: false });

// Alterando configuração para que a propriedade nome não seja enumerável
Object.defineProperty(animal, "nome", { enumerable: false });

// Alterando configuração para que a propriedade nome não seja configurável
Object.defineProperty(animal, "nome", { configurable: false });

// Métodos úteis da classe Object

// Object.keys() - Retorna um array de strings contendo todas as propriedades enumeráveis do objeto
const chaves = Object.keys(animal);
console.log("Chaves do objeto animal:", chaves);

// Object.values() - Retorna um array contendo todos os valores das propriedades enumeráveis do objeto
const valores = Object.values(animal);
console.log("Valores do objeto animal:", valores);

// Object.entries() - Retorna um array de arrays, onde cada subarray contém uma chave e um valor do objeto
const entradas = Object.entries(animal);
console.log("Entradas do objeto animal:", entradas);