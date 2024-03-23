// Diferenças entre ++/-- e +=/-=
// ++ ou -- incrementa ou decrementa o valor atual em 1
// += ou -= adiciona ou subtrai um valor específico ao valor atual

// Exemplo de loop for
for (let i = 1; i <= 5; i++) {
    console.log(`Dentro de FOR: ${i}`);
}

// Exemplo de loop for...of para iterar sobre os elementos de um array
const listaCarro = ["Corolla", "Creta", "HB20"];
for (let carro of listaCarro) {
    console.log(`Dentro de FOR OF: ${carro}`);
}

// Exemplo de loop for...in para iterar sobre as propriedades de um objeto
const pessoa = {
    nome: "Paulo",
    idade: 18,
    altura: 1.69,
};
for (let propriedade in pessoa) {
    console.log(`Dentro de FOR IN: ${propriedade} - ${pessoa[propriedade]}`);
}

// Exemplo de loop while
let numero = 2;
while (numero <= 10) {
    if (numero % 2 !== 0) {
        numero++;
        continue; // Pula para a próxima iteração se o número for ímpar
    }
    console.log(`Dentro do WHILE com CONTINUE: ${numero}`);
    numero++;
}