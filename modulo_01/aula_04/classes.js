/**
 * É boa prática sempre utilizar a primeira letra do nome da classe em maiúscula.
 */
class Person {
  /**
   * Constructor é um método especial que recebe N parâmetros para a construção da classe.
   * Ele é sempre executado na instância da classe.
   */
  constructor(name, cpf, age) {
    // THIS representa a instância atual da classe.
    this.name = name;
    this.cpf = cpf;
    this.age = age;
  }

  /**
   * Este é um método criado dentro da classe, e pode ser acessado somente invocando a instância da classe.
   */
  sayHello() {
    console.log(`Hello, ${this.name}!`);
  }
}

// Criação de instâncias da classe Person.
const person = new Person('Paulo', '99999999999', 23);
const personTwo = new Person('Renata', '12345678900', 23);

// Invocação do método sayHello para cada instância.
person.sayHello();
// Note que estamos utilizando o mesmo método, porém o resultado será diferente, pois são instâncias e dados diferentes.
personTwo.sayHello();

/**
 * Extends é utilizado para herdar propriedades e métodos de outra classe.
 */
class Animal {
  constructor(name) {
    this.name = name;
  }

  /**
   * Método que simula um som feito pelo animal.
   */
  say() {
    console.log(`${this.name} says something ...`);
  }
}

/**
 * Classe Dog herda de Animal.
 */
class Dog extends Animal {
  /**
   * Método específico da classe Dog.
   */
  bark() {
    console.log(`${this.name} barked!`);
  }
}

// Criação de uma instância da classe Dog.
const dog = new Dog('Hulk');

// Invocação de métodos da classe Dog e da classe pai (Animal).
dog.say();
dog.bark();
