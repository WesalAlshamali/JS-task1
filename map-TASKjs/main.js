// ----------------------------------Q1-------------------------------------

function doubleNumbers(arr) {
    return arr.map(number => number * 2);
}

console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

// ----------------------------------Q2------------------------------------
function stringItUp(arr) {
    return arr.map(number => number.toString());
}

console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

// ----------------------------------Q3------------------------------------

function capitalizeNames(arr) {
    return arr.map(name => {
        return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    });
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));   // ["John", "Jacob", "Jingleheimer", "Schmidt"]


// ----------------------------------Q4------------------------------------

function namesOnly(arr) {
    return arr.map(item => item.name);
}

// Test case
console.log(namesOnly([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])); // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

// ----------------------------------Q5------------------------------------
function makeStrings(arr) {
    return arr.map(person => {
        if (person.age >= 18) {
            return `${person.name} can go to The Matrix`;
        } else {
            return `${person.name} is under age!!`;
        }
    });
}


console.log(makeStrings([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));

// ----------------------------------Q6------------------------------------
function readyToPutInTheDOM(arr) {
    return arr.map(person => {
        return `<h1>${person.name}</h1><h2>${person.age}</h2>`;
    });
}

console.log(readyToPutInTheDOM([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));

// ----------------------------------Q7-----------------------------------
function doubleValues(arr) {
    return arr.map(value => value * 2);
  }
  
  
  console.log(doubleValues([1, 2, 3])); // [2, 4, 6]


  // ----------------------------------Q8----------------------------------

  function valTimesIndex(arr) {
    return arr.map((value, index) => value * index);
  }
  
  console.log(valTimesIndex([1, -2, -3])); // [0, -2, -6]


// ----------------------------------Q9---------------------------------
function extractKey(arr, key) {
    return arr.map(obj => obj[key]);
  }
  console.log(extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name'));
  // ['Elie', 'Tim', 'Matt', 'Colt']


  // ----------------------------------Q10---------------------------------
  function extractFullName(arr) {
    return arr.map(obj => `${obj.first} ${obj.last}`);
  }
  
  console.log(extractFullName([
    {first: 'Elie', last: "Schoppik"},
    {first: 'Tim', last: "Garcia"},
    {first: 'Matt', last: "Lane"},
    {first: 'Colt', last: "Steele"}
  ]));
  // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
  


  


  