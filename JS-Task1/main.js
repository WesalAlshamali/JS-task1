document.getElementById('calculatorForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from submitting the traditional way

    let operation = document.getElementById('operation').value;
    let number1 = parseFloat(document.getElementById('number1').value);
    let number2 = parseFloat(document.getElementById('number2').value);
    let result;

    if (operation === '+') {
        result = number1 + number2;
    } else if (operation === '-') {
        result = number1 - number2;
    } else if (operation === '*') {
        result = number1 * number2;
    } else if (operation === '/') {
        result = number1 / number2;
    } else {
        result = 'Invalid operation';
    }

    console.log(`Result: ${result}`);
    document.getElementById('result').innerText = `Operation: ${operation}, Number 1: ${number1}, Number 2: ${number2}, Result: ${result}`;
});
