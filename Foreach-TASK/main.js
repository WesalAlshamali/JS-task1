// ---------------------------Q1----------------------------
let arr=[5,1,2,3,10];
let newarr=[];
arr.forEach(doubleValues);
function doubleValues(element){
  
       newarr.push(element*2) ;
      
 
}
console.log(newarr);

// ---------------------------Q2----------------------------
let arr2=[1,2,3,4,8];
let newarr2=[];
arr2.forEach(onlyEvenValues);
function onlyEvenValues(element2){
  if(element2 %2 ==0){
   newarr2.push(element2);
  }
   
}
console.log(newarr2);

// ---------------------------Q3---------------------------
let textarr=['colt','matt', 'ticm', 'udemy'];
let textarr2=[];
textarr.forEach(showFirstAndLast);
function showFirstAndLast(charr){
   
  textarr2.push(charr[0] + charr[textarr.length -1]);

}
console.log(textarr2);
// ------------------------------Q4--------------------

function addKeyAndValue(arr, key, value) {
   arr.forEach(obj => {
       
       obj[key] = value;
   });

   return arr;
}

console.log(addKeyAndValue(
   [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}],
   'title',
   'instructor'
));


// -----------------------------------------Q5-------------------------------------
function vowelCount(str) {
   
   const counts = {};
   
   const lowerStr = str.toLowerCase();
  
   const vowels = 'wesal';

   
   lowerStr.split('').forEach(char => {
       
       if (vowels.includes(char)) {
          
           counts[char] = (counts[char] || 0) + 1;
       }
   });

   // Return the counts object
   return counts;
}

// Test cases

console.log(vowelCount('Matt')); 
console.log(vowelCount('hmmm')); 
console.log(vowelCount('I Am awesome and so are you')); 
