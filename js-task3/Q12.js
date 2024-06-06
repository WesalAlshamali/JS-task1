
 let temperature = prompt("Please enter the temperature in Celsius:");


 temperature = parseFloat(temperature);

 if (temperature < 0) {
     document.write("The temperature is very cold.");
 } else if (temperature >= 0 && temperature <= 15) {
     document.write("The temperature is cold.");
 } else if (temperature >= 16 && temperature <= 25) {
     document.write("The temperature is warm.");
 } else {
     document.write("The temperature is hot.");
 }