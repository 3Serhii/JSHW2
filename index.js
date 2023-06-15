let firstAskedNumber = prompt("Type FIRST operand");

let leftOperand = Number(firstAskedNumber);

let secondAskedNumber = prompt("Type SECOND operand");

let rightOperand = Number(secondAskedNumber);

let operator = prompt("Typer OPERATOR");


switch (operator) {
    case "+":
        let resultAdd = alert (`${leftOperand}+${rightOperand} =` + (leftOperand + rightOperand))
        break;
    case "-":
        let resultMinus = alert (`${leftOperand}-${rightOperand} =` + (leftOperand - rightOperand))
        break;
    // …
    case "*":
        let resultMulty = alert (`${leftOperand}*${rightOperand} =` + (leftOperand * rightOperand))
        break;
    case "/":
        let resultDivide = alert (`${leftOperand}/${rightOperand} =` + (leftOperand / rightOperand))
        break;
}


