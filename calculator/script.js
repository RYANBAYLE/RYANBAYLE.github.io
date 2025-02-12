class Calculator {
  constructor() {
    this.currentValue = "";
    this.operator = null;
    this.previousValue = "";
  }

  appendNumber(number) {
    this.currentValue += number;
    this.updateDisplay();
  }

  chooseOperator(operator) {
    if (this.currentValue === "") return;
    if (this.previousValue !== "") {
      this.compute();
    }
    this.operator = operator;
    this.previousValue = this.currentValue;
    this.currentValue = "";
    this.updateDisplay();
  }

  compute() {
    let computation;
    const prev = parseFloat(this.previousValue);
    const current = parseFloat(this.currentValue);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operator) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "*":
        computation = prev * current;
        break;
      case "/":
        computation = prev / current;
        break;
      default:
        return;
    }
    this.currentValue = computation.toString();
    this.operator = null;
    this.previousValue = "";
    this.updateDisplay();
  }

  deleteLastDigit() {
    this.currentValue = this.currentValue.slice(0, -1);
    this.updateDisplay();
  }

  clear() {
    this.currentValue = "";
    this.operator = null;
    this.previousValue = "";
    this.updateDisplay();
  }

  // Mise à jour de l'affichage pour inclure l'opération en cours
  updateDisplay() {
    if (this.operator) {
      document.getElementById(
        "display"
      ).textContent = `${this.previousValue} ${this.operator} ${this.currentValue}`;
    } else {
      document.getElementById("display").textContent = this.currentValue || "0";
    }
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
