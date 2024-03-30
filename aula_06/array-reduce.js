// O método .reduce() é utilizado para reduzir um array a um único valor.
// Ele executa uma função de redução (fornecida por você) para cada elemento do array,
// resultando em um único valor de saída.

// Exemplo 1: Soma dos números de um array usando .reduce()
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, target) => {
    acc += target; // Soma o valor atual ao acumulador.
    return acc; // Retorna o novo valor do acumulador para a próxima iteração.
}, 0); // O valor inicial do acumulador é 0.
console.log("Soma:", sum); // Saída: Soma: 15

// Exemplo 2: Contagem de ocorrências de frutas usando .reduce()
const fruits = ["maçã", "banana", "maçã", "laranja", "banana", "uva", "laranja"];
const counters = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1; // Incrementa o contador para a fruta atual.
    return acc; // Retorna o objeto acumulador atualizado.
}, {}); // O valor inicial do acumulador é um objeto vazio.
console.log("Contagem de frutas:", counters);

// Exemplo 3: Maior número em um array usando .reduce()
const greaterNumber = numbers.reduce((acc, target) => {
    return target > acc ? target : acc; // Retorna o maior valor entre o acumulador e o valor atual.
}, numbers[0]); // O valor inicial do acumulador é o primeiro elemento do array.
console.log("Maior número:", greaterNumber);

// Exemplo 4: Conversão de array de pares chave-valor em objeto usando .reduce()
const pairs = [["nome", "Paulo"], ["idade", 30], ["cidade", "São Paulo"]];
const object = pairs.reduce((acc, target) => {
    const [key, value] = target; // Destrutura o par chave-valor.
    acc[key] = value; // Atribui o valor à chave correspondente no objeto acumulador.
    return acc; // Retorna o objeto acumulador atualizado.
}, {}); // O valor inicial do acumulador é um objeto vazio.
console.log("Objeto:", object);

// Exemplo 5: Concatenação de arrays usando .reduce()
const arrays = [[1, 2], [3, 4], [5, 6]];
const concatenado = arrays.reduce((acumulador, arrayAtual) => {
    return acumulador.concat(arrayAtual); // Concatena o array atual ao acumulador.
}, []); // O valor inicial do acumulador é um array vazio.
console.log("Array concatenado:", concatenado);
