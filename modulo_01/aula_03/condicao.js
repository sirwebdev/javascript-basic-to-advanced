// Condições - São estruturas de condições definidas para fazer alguma coisa.

// IF (CONDICAO) {AÇAO}
// ELSE IF (CONDICAO) {AÇAO}
// ELSE {ACAO}

const idade = 17;
// Se idade for maior ou igual a 18; Exiba "Maior de idade."
// Se idade for menor que 18; Exiba "Menor de idade."

if (idade >= 18) {
  console.log("Maior de idade.");
} else if (idade < 18) {
  console.log("Menor de idade.");
}

const nota = 70;

// Se nota maior ou igual a 90: Excelente!
// Se nota maior ou igual a 80: Muito bom!
// Se nota maior ou igual a 70: Bom!
// Se não: Precisa melhorar!

if (nota >= 90) {
  console.log("Excelente!");
} else if (nota >= 80) {
  console.log("Muito Bom!");
} else if (nota >= 70) {
  console.log("Bom!");
} else {
  console.log("Precisa Melhorar!");
}

// Boas Praticas!

// Utilize else if sempre quando temos mais de uma condição para o mesmo contexto.

// Exemplo BOM - O sistema irá fazer a validacao em cadeia, ignorando o restante das validaçoes salvando processamentos.
if (nota >= 90) {
  console.log("Excelente!");
} else if (nota >= 80) {
  console.log("Muito Bom!");
}

// Exemplo RUIM - O sistema irá executar TODAS as condicoes independente se a primeira estiver correta, causando processamento desnecessário.
if (nota >= 90) {
  console.log("Excelente!");
}

if (nota >= 80) {
  console.log("Muito Bom!");
}

// Utilize sempre um else para quando for alterar uma variavel.
let resultado;

if (nota >= 90) {
  resultado = "Excelente !";
} else if (nota >= 80) {
  resultado = "Muto bom !";
  // Note que se nenhuma das condiçoes forem verdadeiras eu PRECISO atribuir um valor DEFAULt para resultado, caso contrario o valor de resultado será undefined
} else {
  resultado = "Precisa Melhorar !";
}

console.log("Resultado: ", resultado);
