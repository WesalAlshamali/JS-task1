let monthNumber = 4;  
let daysInMonth;

switch (monthNumber) {
    case 1:  // January
    case 3:  // March
    case 5:  // May
    case 7:  // July
    case 8:  // August
    case 10: // October
    case 12: // December
        daysInMonth = 31;
        break;
    case 4:  // April
    case 6:  // June
    case 9:  // September
    case 11: // November
        daysInMonth = 30;
        break;
    case 2:  // February
        daysInMonth = 28;  // Assuming it's not a leap year
        break;
    default:
        daysInMonth = "Invalid month number!";
}

if (typeof daysInMonth === "number") {
    document.write(`Month have ${daysInMonth} days`);
} else {
    document.write(daysInMonth);
}
