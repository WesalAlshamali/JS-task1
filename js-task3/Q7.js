let totalAmount = prompt("Please enter the total amount of your shopping cart:");

totalAmount = parseFloat(totalAmount);


if (totalAmount > 200) {
    totalAmount = totalAmount * 0.80; // 20% discount
} else 
    {
document.write("error");
    }



document.write("The final amount after discount is: $" + totalAmount);