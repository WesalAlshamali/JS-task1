let num1 = prompt("Please enter the first number:");


let num2 = prompt("Please enter the second number:");

let operator = prompt("Please enter an arithmetic operator (+, -, *, /):");

num1 = parseFloat(num1);
num2 = parseFloat(num2);
let result;


if (operator === "+") {
    result = num1 + num2;
} else if (operator === "-") {
    result = num1 - num2;
} else if (operator === "*") {
    result = num1 * num2;
} else if (operator === "/") {
    if (num2 !== 0) {
        result = num1 / num2;
    } else {
        result = "Error: Division by zero is not allowed.";
    }
} else {
    result = "Error: Invalid operator.";
}

// Display the result
document.write("The result is: " + result);