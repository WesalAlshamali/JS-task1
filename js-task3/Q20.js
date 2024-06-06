
 let number = prompt("Please enter a number:");

 number = parseInt(number);

 if (!isNaN(number)) {
     document.write("<h2>Multiplication Table for " + number + "</h2>");
     
     if (number) {
         for (let i = 1; i <= 10; i++) {
             let result = number * i;
             document.write(number + " x " + i + " = " + result + "<br>");
         }
     }
 } else {
     document.write("Invalid input. Please enter a valid number.");
 }