// Funções são partes de códigos que executam uma tarefa específica.

// Funções Declarativas - São funções que são declaradas usando a palavra-chave 'function'.
function greetings(name) {
  return "Hello, " + name + "!";
}

// Funções Arrow - Utilizam a sintaxe de seta (=>) para a declaração da função.
const arrowGreeting = (name) => {
  return "Hello, " + name + "!";
};

// Funções Anônimas - São funções que não têm um nome. Geralmente são usadas como argumentos de outras funções (callbacks) ou armazenadas em variáveis.
const anonymousGreeting = function(name) {
  return "Hello, " + name + "!";
};

// Funções Expressivas - São funções definidas como parte de uma expressão. Podem ser anônimas ou nomeadas.
const sum = (a, b) => {
  return a + b;
};

const isGreaterThan = function(actual, condition) {
  return actual > condition;
};

// Funções Assíncronas - São funções que aguardam a conclusão de uma operação assíncrona.
async function carregarDados() {
  // Supondo que 'buscarDados' seja uma função que retorna uma promessa (Promise).
  let dados = await buscarDados();
  console.log(dados);
}

// Funções Construtoras - São funções usadas para construir objetos. Semelhantes a classes em outros idiomas.
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const paulo = new Person("Paulo", 23);
