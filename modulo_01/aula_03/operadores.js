// Operadores aritméticos
let soma = 10 + 5;
let subtracao = 10 - 5;
let multiplicacao = 10 * 5;
let divisao = 10 / 5;

let restoDaDisivao = 10 % 5;
let potenciacao = 10 ** 5;

console.log("Soma: " + soma);
console.log("Subtração: " + subtracao);
console.log("Multiplicacao: " + multiplicacao);
console.log("Divisão: " + divisao);
console.log("Resto da Divisão: " + restoDaDisivao);
console.log("Potenciação: " + potenciacao);

// Operadores de Atribuição
let x = 10;
x += 5; // Atribuição de soma
console.log("Atribuição de Soma: " + x);

x -= 5; // Atribuiçåo de subtração
console.log("Atribuição de Subtração: " + x);

// Operadores de Comparação - Operadores de Comparação resultar em Booleano
const igualdade = 10 == "10";
const exatamenteIgual = 10 === "10";
const diferenca = 10 != 10;
const maiorQue = 10 > 10;
const menorQue = 10 < 10;
const menorOuIgual = 10 <= 10;
const maiorOuIgual = 10 >= 10;

console.log("10 é igual a '10'? ", igualdade);
console.log("10 é exatamente igual a '10'? ", exatamenteIgual);
console.log("10 é diferente de 10? ", diferenca);
console.log("10 é maior que 10? ", maiorQue);
console.log("10 é menor que 10? ", menorQue);
console.log("10 é menor ou igual a 10? ", menorOuIgual);
console.log("10 é maior ou igual a 10? ", maiorOuIgual);

// Operadores Lógicos - Utiliza as premissas da Lógica de Programação e resultam SEMPRE em Booleano

// || - [OU - OR]
// && - [E - AND]
// ! - [NOT - Negação]
// !! - [NOT NOT - Negação da Negação]

let verdadeiro = true;
let falso = false;
let falsy = "";
let truthy = "texto qualquer";

console.log("Operador ||: ", verdadeiro || falso);
console.log("Operador &&: ", verdadeiro && falso);
console.log("Operador !: ", !verdadeiro, !falso);
console.log("Operador !!: ", !!falsy, !!truthy);
