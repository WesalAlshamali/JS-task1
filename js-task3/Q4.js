let num1 = prompt("Please enter the first number:");
let num2 = prompt("Please enter the second number:");
let num3 = prompt("Please enter the third number:");



    let largest;
    if (num1 >= num2) {
        if (num1 >= num3) {
            largest = num1;
        } else {
            largest = num3;
        }
    } else {
        if (num2 >= num3) {
            largest = num2;
        } else {
            largest = num3;
        }
    }

    let result;
    if (largest > 0) {
        result = "positive";
        
    document.write("The largest number is: " + largest);
    document.write("The largest number is " + result + ".");
    } else if (largest < 0) {
        result = "negative";
        
    document.write("The largest number is: " + largest);
    document.write("The largest number is " + result + ".");
    } else {
        result = "zero";
        
    document.write("The largest number is: " + largest);
    document.write("The largest number is " + result + ".");
    }


