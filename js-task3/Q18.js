let dayNumber = prompt("Please enter a number from 1 to 7 representing the day of the week:");


dayNumber = parseInt(dayNumber);

if (dayNumber === 1) {
    document.write("Monday");
} else if (dayNumber === 2) {
    document.write("Tuesday");
} else if (dayNumber === 3) {
    document.write("Wednesday");
} else if (dayNumber === 4) {
    document.write("Thursday");
} else if (dayNumber === 5) {
    document.write("Friday");
} else if (dayNumber === 6) {
    document.write("Saturday");
} else if (dayNumber === 7) {
    document.write("Sunday");
} else {
    document.write("Invalid input. Please enter a number from 1 to 7.");
}