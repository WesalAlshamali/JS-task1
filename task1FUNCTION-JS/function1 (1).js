/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/
// --------------------------------------------------------------- the Solllve is ------------------------------------------:
// function tellFortune (job,geographic,partner,children){
// console.log("You will be a "+(job )+ "in"+ ( geographic )+"and married to " +( partner ) +" with "+( children ) +" kids.")
// }

// let children=1;
// let partner="ali";
// let geographic='jordan';
// let job="biomedical engineer";
// tellFortune(job,geographic,partner,children);
/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/
// ---------------------------------------------------------------the  sollllve is --------------------------------------------
// function calculateDogAge(humanYears) {
//   const dogYears = humanYears * 7;
//   console.log("Your doggie is "+( dogYears ) + " years old in dog years!");
// }

// calculateDogAge(3); 

/*
3 
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/ 
// --------------------------------------------------------------- the sollllve is-----------------------------------------
// function calculateSupply(age, amountPerDay) {
//   var maxAge = 100;
//   var remainingYears = maxAge - age;
//  var totalAmount = remainingYears * 365 * amountPerDay;
// console.log("You will need " + totalAmount + " cups of tea to last you until the ripe old age of " + maxAge);
// }


// calculateSupply(30, 3);

/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/

// --------------------------------------------------------------- the sollllve is----------------------------------
// function greet (names){
// console.log("Hello "+names)

// }
// let names="wesal";
// greet(names);

// 5
// what is the error:
// function double(cat) { 
//   return 2 * x;
// }
//  the solve is: use cat as a variable and inside function used x, There is no x defined in the function, which will cause an error.

// function double(7) {
//   return 2 * 7;
// }
// the solve is: unexpectied number,  trying to define a function  with the argument 7

// function double('7') {
//   return 2 * 'x';
// }
// the solve is:   unexpectied string,rying to define a function  with the string 7



/*
6
fix these functions:
func double1(x {
  return 2 * x ;
} */
//  --------------------------------------------------------------- the solve is ------------------------------
// function double1(x) {
//   return 2 * x ;
// }
  
/*

functiondouble2 x)
return 2 * x;
}*/
//  --------------------------------------------------------------- the solve is---------------------------
// function double2 (x){
// return 2 * x;
// } 
/*
function (x) double3 {
  return 2 * x;

*/
// --------------------------------------------------------------- the solve is----------------------------------
// function double3 (x)  {
//   return 2 * x;
// }

/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/
// ---------------------------------------------------------------  the solve is ----------------------------------
// function cube(numbers){
//   let result= Math.pow(numbers,3);
//   console,console.log(result);

// }
// cube(4);


/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/
// --------------------------------------------------------------- the solve is-------------------------------
// function multiply(){
// return 3*4;
// }
// console.log(multiply());

/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/
// -----------------------------------------------------------the solve is------------------------------------------------

// function canIGetADrivingLicense(x){
// if(x >= 20){
//  console.log("yes,you can");
// }
// else{
//  console.log("please come back after X years to get one");
// }
// }
// let x=prompt("Enter your ages:");
// canIGetADrivingLicense(x);

/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/
// ---------------------------------------------the solve is-------------------------------------------------------------

// function sameLength(first,sec){
//   first="wesal";
//   sec="wes";
// if (first.length== sec.length){
//   console.log("TRUE");
// }
// else{
//   console.log("FALSE");
// }
// }
// sameLength();


/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/
// ------------------------------------------------------ the solve is ------------------------------------------------------------------
// function largerNubmer(z,l){
//   z=4;
//   l=1;
//   let max;
//   if(z>l){
//   max=z;
//    console.log(max) ;
//   }
//   else{
//  max=l;
//  console.log(max);
//   }
// }

// largerNubmer();



/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/
// --------------------------------------------------------------the solve is -----------------------------------------------
//  function smallerNubmer(a,n,m){
//   a=3;
//   n=2;
//   m=1;
//   let smaller;
//   if(a<=n && a<=m){
//     smaller=a;
//    console.log(smaller) ;
//   }
//   else if (n<=a && n<=m)
//   {
//     smaller=n;
//     console.log(smaller) ;
//   }
//   else
//     {
//       smaller=m;
//       console.log(smaller) ;
//     }
//  }
//  smallerNubmer();
/*

13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/ 
// ------------------------------------------------------------------ the solve is---------------------------------------------------

// function shorterString(str1, str2, str3, str4, str5) {
  
//   const length1 = str1.length;
//   const length2 = str2.length;
//   const length3 = str3.length;
//   const length4 = str4.length;
//   const length5 = str5.length;


//   const shortestLength = Math.min(length1, length2, length3, length4, length5);

  
//   if (length1 === shortestLength) {
//       return str1;
//   } else if (length2 === shortestLength) {
//       return str2;
//   } else if (length3 === shortestLength) {
//       return str3;
//   } else if (length4 === shortestLength) {
//       return str4;
//   } else {
//       return str5;
//   }
// }


// console.log(shorterString("apple", "banana", "kiwi", "grape", "orange")); 
// console.log(shorterString("table", "chair", "desk", "lamp", "couch")); 


/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/
// ------------------------------------------------------------ the solve is ---------------------------------------------------------
// function longerString(str1, str2, str3, str4) {
  
//   const length1 = str1.length;
//   const length2 = str2.length;
//   const length3 = str3.length;
//   const length4 = str4.length;

  
//   const longestLength = Math.max(length1, length2, length3, length4);

//   if (length1 === longestLength) {
//       return str1;
//   } else if (length2 === longestLength) {
//       return str2;
//   } else if (length3 === longestLength) {
//       return str3;
//   } else {
//       return str4;
//   }
// }


// console.log(longerString("air", "school", "car", "github")); 


/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/
// ---------------------------------------------------------- the solve is------------------------------------------------------------
// function isEven(number) {
//   return number % 2 === 0;
// }

// console.log(isEven(1)); 
// console.log(isEven(2)); 


/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/
// --------------------------------------------------------- the solve is------------------------------------------------------

// function isodd(number) {
//   return number % 2 !== 0;
// }

// console.log(isodd(5)); 
// console.log(isodd(4)); 

/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/
// ----------------------------------------------- the solve is-------------------------------------------------------------------------
// function positive(number) {
//   if(number>0){
//     return (number);
//   }
//   else{
//     number=number * -1;
//     return (number);
//   }
 
// }


// console.log(positive(4));  
// console.log(positive(-5)); 



/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/
// -----------------------------------the solve is
// function fullName(firstName, lastName) {
//   return firstName + " " + lastName;
// }


// console.log(fullName("wesal", "shamali")); 



/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/
// -------------------------------------------------------- the solve is---------------------------------------------------------------------
// function average(num1, num2, num3, num4, num5) {
//   return (num1 + num2 + num3 + num4 + num5) / 5;
// }


// console.log(average(1, 2, 3, 4, 5));   



/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475*/

// ------------------------------------------------------- the solve is--------------------------------------------------------
// function randomNumber() {
//   return Math.random();
// }

// console.log(randomNumber());
// console.log(randomNumber()); 




/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/
// ----------------------------------------- the solve is -------------------------------------------------------

// function randomBetweenNumbers(min, max) {
//   return Math.random() * (max - min) + min;
// }

// console.log(randomBetweenNumbers(1, 8));   
// console.log(randomBetweenNumbers(3, 100));  




/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/
// ----------------------------------------------- the solve it ----------------------------------------------------------------------
// function scoreInUniversity(score) {
//   if (score >= 95 && score <= 100) {
//       return "A";
//   } else if (score >= 85 && score < 95) {
//       return "B";
//   } else if (score >= 70 && score < 85) {
//       return "C";
//   } else if (score >= 50 && score < 70) {
//       return "D";
//   } else if (score >= 0 && score < 50) {
//       return "F";
//   } else {
//       return "Invalid score"; 
//   }
// }

// console.log(scoreInUniversity(96));  
// console.log(scoreInUniversity(3));   
// console.log(scoreInUniversity(71));  



/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/
// --------------------------------------------------- the solve is-----------------------------------------------------------------------
// function createCounter() {
//   let count = 0;
//   return function() {
//       count += 1;
//       return count;
//   };
// }

// const counter = createCounter();

// console.log(counter()); 
// console.log(counter()); 
// console.log(counter()); 



/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/
// -----------------------------------the solve is -------------------------------------------------------------------------
// function createCounter() {
//   let count = 0;
  
//   function counter() {
//       count += 1;
//       return count;
//   }

//   function resetCounter() {
//       const previousCount = count;
//       count = 0;
//       return `${previousCount} and the counter reset now`;
//   }

//   return { counter, resetCounter };
// }

// const { counter, resetCounter } = createCounter();


// console.log(counter());         
// console.log(counter());         
// console.log(counter());         
// console.log(resetCounter());   
   


