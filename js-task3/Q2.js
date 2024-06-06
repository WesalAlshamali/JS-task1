let years = prompt("Enter a year:");
if (years % 4 === 0 && years % 100 !== 0 || years % 400 === 0 ) {

  
  document.write("the year is a leap year");
    
  
} else {
  document.write("the year isn't a leap year");
}
