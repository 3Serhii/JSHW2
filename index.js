let firstAskedNumber = prompt("Type FIRST operand");

let leftOperand = Number(firstAskedNumber);

let secondAskedNumber = prompt("Type SECOND operand");

let rightOperand = Number(secondAskedNumber);

let operator = prompt("Typer OPERATOR");


switch (operator) {
    case "+":
        let resultAdd = alert ("Your result is: " +(leftOperand + rightOperand))
        break;
    case "-":
        let resultMinus = alert ("Your result is: " +(leftOperand - rightOperand))
        break;
    // …
    case "*":
        let resultMulty = alert ("Your result is: " +(leftOperand * rightOperand))
        break;
    case "/":
        let resultDivide = alert ("Your result is: " +(leftOperand / rightOperand))
        break;
}


