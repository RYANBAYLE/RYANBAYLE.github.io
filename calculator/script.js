class Calculator {
  constructor() {
    this.currentValue = "";
    this.operator = null;
    this.previousValue = "";
    this.expression = "";
    this.displayElement = document.getElementById("display");
  }

  appendNumber(number) {
    if (this.currentValue === "0" && number !== ".") {
      this.currentValue = number;
    } else {
      this.currentValue += number;
    }
    this.expression += number;
    this.updateDisplay();
  }

  chooseOperator(operator) {
    if (this.currentValue === "" && this.previousValue === "") return;
    if (this.currentValue === "" && this.operator) {
      this.expression = this.expression.slice(0, -1) + operator;
    } else {
      this.previousValue = this.currentValue;
      this.currentValue = "";
      this.expression += ` ${operator} `;
    }
    this.operator = operator;
    this.updateDisplay();
  }

  compute() {
    try {
      this.currentValue = eval(this.expression).toString();
      this.expression = this.currentValue;
      this.operator = null;
      this.previousValue = "";
      this.updateDisplay();
    } catch (error) {
      this.currentValue = "Erreur";
      this.updateDisplay();
    }
  }

  deleteLastDigit() {
    if (this.currentValue.length > 0) {
      this.currentValue = this.currentValue.slice(0, -1);
      this.expression = this.expression.slice(0, -1);
    }
    this.updateDisplay();
  }

  clear() {
    this.currentValue = "";
    this.operator = null;
    this.previousValue = "";
    this.expression = "";
    this.updateDisplay();
  }

  updateDisplay() {
    this.displayElement.innerText = this.expression || "0";
  }
}

const calculator = new Calculator();

function appendNumber(number) {
  calculator.appendNumber(number);
}

function chooseOperator(operator) {
  calculator.chooseOperator(operator);
}

function compute() {
  calculator.compute();
}

function deleteLastDigit() {
  calculator.deleteLastDigit();
}

function clearDisplay() {
  calculator.clear();
}
