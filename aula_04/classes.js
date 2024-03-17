// É boa pratica sempre utilizar a primeira letra do nome da classe MAIUSCULA
class Person {
    // Contructor é um metodo que recebe N parametros para a contrucao da classe, e ele é sempre executado na instancia da classe.
    constructor(name, cpf, age) {

        // THIS representa tudo o que voce tem dentro do escopo em que voce esta.
        this.name = name
        this.cpf = cpf
        this.age = age
    }

    // Este aqui é um metodo criado DENTRO da classe, e pode ser acessado somente invocando a instancia da classe
    sayHello() {
        console.log(`Hello, ${this.name}!`)
    }
}


const person = new Person('Paulo', '99999999999', 23)
const personTwo = new Person('Renata', 'CPF', 23)

person.sayHello()
// Note que estamos utilizando o mesmo metodo, porem o resultado sera diferente, pois sao instancias e dados diferentes.
personTwo.sayHello()


// Extends - E utilizado para extender tudo de uma outra classe

class Animal {
    constructor(name){
        this.name = name
    }

    say() {
        console.log(`${this.name} say something ...`)
    }
}

class Dog extends Animal {
    bark() {
        console.log(`${this.name} barked!`)
    }
}

const dog = new Dog('Hulk')

dog.say()
dog.bark()
