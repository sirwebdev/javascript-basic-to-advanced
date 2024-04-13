// Classe Calculator para gerenciar as operações da calculadora
class Calculator {
  // Construtor da classe que inicializa a calculadora
  constructor(displayElement) {
    this.displayElement = displayElement; // Elemento do DOM onde o resultado é exibido
    this.clear(); // Limpa todos os estados da calculadora ao iniciar
  }

  // Método para adicionar um número ou ponto ao operando atual
  appendNumber(value) {
    if (value === "." && this.currentOperand.includes(".")) return; // Evita adicionar mais de um ponto
    this.currentOperand = `${this.currentOperand}${value}`; // Concatena o valor ao operando atual
    this.updateDisplay(); // Atualiza o valor exibido na tela
  }

  // Método para atualizar o display da calculadora com o valor do operando atual
  updateDisplay() {
    this.displayElement.value = this.currentOperand; // Atualiza o campo de texto do display
  }

  // Método para limpar todos os estados da calculadora
  clear() {
    this.currentOperand = ""; // Zera o operando atual
    this.previousOperand = ""; // Zera o operando anterior
    this.operation = undefined; // Limpa a operação selecionada
    this.updateDisplay(); // Atualiza o display
  }

  // Método para escolher uma operação matemática (+, -, *, /)
  chooseOperation(value) {
    if (!this.currentOperand) return; // Não faz nada se não houver operando atual
    if (this.previousOperand) {
      this.compute(); // Se já existir um operando anterior, realiza o cálculo
    }
    this.operation = value; // Define a operação escolhida
    this.previousOperand = this.currentOperand; // Armazena o operando atual como anterior
    this.currentOperand = ""; // Limpa o operando atual
  }

  // Método para realizar o cálculo com base na operação escolhida
  compute() {
    let result; // Armazena o resultado do cálculo
    const prev = parseFloat(this.previousOperand); // Converte o operando anterior para número
    const current = parseFloat(this.currentOperand); // Converte o operando atual para número
    switch (this.operation) { // Realiza a operação com base no operador
      case "+":
        result = prev + current;
        break;
      case "-":
        result = prev - current;
        break;
      case "*":
        result = prev * current;
        break;
      case "/":
        result = prev / current;
        break;
      default:
        return;
    }
    this.currentOperand = result.toString(); // Define o resultado como o operando atual
    this.operation = undefined; // Limpa a operação escolhida
    this.previousOperand = ""; // Limpa o operando anterior
    this.updateDisplay(); // Atualiza o display com o resultado
  }
}

// Inicialização da calculadora
const display = document.getElementById("display"); // Elemento de exibição (campo de texto)
const calculator = new Calculator(display); // Cria uma instância da classe Calculator

// Adiciona eventos de clique aos botões da calculadora
const buttons = document.querySelectorAll(".btn"); // Seleciona todos os botões
buttons.forEach((button) => {
  button.addEventListener("click", () => { // Adiciona um ouvinte de evento de clique a cada botão
    const buttonValue = button.dataset.value; // Obtém o valor do botão (atributo data-value)

    // Realiza ações com base no valor do botão
    switch (buttonValue) {
      case "C": // Limpa a calculadora
        calculator.clear();
        break;
      case "=": // Realiza o cálculo
        calculator.compute();
        break;
      case "+": // Escolhe a operação de adição
      case "-": // Escolhe a operação de subtração
      case "*": // Escolhe a operação de multiplicação
      case "/": // Escolhe a operação de divisão
        calculator.chooseOperation(buttonValue);
        break;
      default: // Adiciona o número ou ponto ao operando atual
        calculator.appendNumber(buttonValue);
    }
  });
});
