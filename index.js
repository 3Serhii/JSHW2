let firstAskedNumber = Number (prompt("Type FIRST operand"));


let secondAskedNumber = Number(prompt("Type SECOND operand"));


let operator = prompt("Typer OPERATOR");


switch (operator) {
    case "+":
        alert (`${firstAskedNumber}+${secondAskedNumber} =` + (firstAskedNumber + secondAskedNumber))
        break;
    case "-":
        alert (`${firstAskedNumber}-${secondAskedNumber} =` + (firstAskedNumber - secondAskedNumber))
        break;
    // …
    case "*":
        alert (`${firstAskedNumber}*${secondAskedNumber} =` + (firstAskedNumber * secondAskedNumber))
        break;
    case "/":
        alert (`${firstAskedNumber}/${secondAskedNumber} =` + (firstAskedNumber / secondAskedNumber))
        break;
}


