
  let grade1 = prompt("Please enter your grade for the first subject:");
  let grade2 = prompt("Please enter your grade for the second subject:");
  let grade3 = prompt("Please enter your grade for the third subject:");

  grade1 = parseFloat(grade1);
  grade2 = parseFloat(grade2);
  grade3 = parseFloat(grade3);


  let average = (grade1 + grade2 + grade3) / 3;

  let result;
  if ( average >= 60) {
      result = "Pass";
  } else {
      result = "Fail";
  }

  document.write("Your average grade is: " +  average +" Result: " + result);
