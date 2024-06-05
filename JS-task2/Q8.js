
 let grade = prompt("Enter your exam grade:");


 if (grade >= 90 && grade <= 100) {
     alert("Your grade is A.");
 } else if (grade >= 80 && grade < 90) {
     alert("Your grade is B.");
 } else if (grade >= 70 && grade < 80) {
     alert("Your grade is C.");
 } else if (grade >= 60 && grade < 70) {
     alert("Your grade is D.");
 } else if (grade < 60 && grade >= 0) {
     alert("Your grade is F.");
 } else {
     alert("Invalid input");
 }