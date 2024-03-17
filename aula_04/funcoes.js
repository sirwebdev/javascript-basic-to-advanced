// Funções sao partes de códigos que fazem alguma coisa especifica

// Funções Declarativas - Sao funcoes que sao declaradas
// function [NOME_DA_FUNCAO]([PARAMETROS_OPCIONAIS]) {}
function greetings(name) {
  return "Hello, " + name + "!";
}

// Funções Arrow  - utilizam da Arrow (=>) para ser construida a funcao.
// () => {}
// Armazenadas em constantes ou sao paramentros de outras funcoes (calbacks)

(name) => { return "Hello, " + name + "!"; };

// Funções anonimas - Elas nao utilizam o verbo function, e nao tem nome.
// () => {}
// Armazenadas em constantes ou sao paramentros de outras funcoes (calbacks)

(name) => { return "Hello, " + name + "!"; };
const otherAnnonimousFunction = function(name) { return "Hello, " + name + "!"; };

// Funções Expressivas - Sao funcoes definidas como parte de uma expressao. Elas podem ser anonimas
const sum = (a, b) => {
    return a+b
}
const isGreaterThan = function(actual, condiction) {
    return actual > condiction
}

// Funções Assincronas - Sao funcoes que demantam uma espera de tempo para ser completamente executadas
async function carregarDados() {
    // Buscar dados seria uma funcao que demanda uma espera do resultado
    let dados = await buscarDados()
    console.log(dados)
}

// Funções Construtoras - Sao funcoes que constroem um tipo de dado [Semelhantes as classes]
function Person(name, age) {
    this.name = name;
    this.age = age
}

const paulo = new Person("Paulo", 23)