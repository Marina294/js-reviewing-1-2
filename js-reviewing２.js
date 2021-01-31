/*I have written out the shells of some functions that you will have to create the logic for. a couple of tips:    

  1. Take your time. Think about each problem, and try to break it into its individual parts. 
     consider writing down these steps, and then try and convert them into code

  2. Run your code along the way. If you are getting strange outputs, use them to help figure out where you 
     are making your mistake. Make sure to test every function with multiple different inputs.

  3. Uncomment the function calls I have made for you at the bottom of the file in order to test your function. 
     make sure you are getting all of the expected results
*/


// Function one: should have two parameters, meaning it will take two arguments. 
// Should add two numbers, and console.log the result.

// function addTwoNumbers (a, b) {
//     console.log(a + b);
//     return
// }

//   //should = 6
//   addTwoNumbers(1, 5) 
  
const addTwoNumbers = (a, b) => {
    console.log(a + b);
}

  //should = 6
  addTwoNumbers(1, 5) 
  
  // Function Two: should have two parameters, meaning it will take two arguments. 
  // Should multiply the two numbers, and console.log the result.
  
//   function multiplyTwoNumbers (a, b) {
//     console.log(a * b);
//     return
// }

  // // // should = 10
  // multiplyTwoNumbers(2, 5)

const multiplyTwoNumbers = (a, b) => {
    console.log(a * b);
}

  // // should = 10
  multiplyTwoNumbers(2, 5)
  
  // Function Three: should have two parameters, meaning it will take two arguments. 
  // Should divide the first argument by the second, and console.log the result.
  
//     function divideXByY (x, y) {
//     console.log(x / y);
//     return
// }
 
// // should = 4

const divideXByY = (x, y) => {
    console.log(x / y);
}
 
// should = 4
  divideXByY(20, 5)
  
  // Function Four: should have two parameters, meaning it will take two arguments. 
  // The first argument will be the total amount in dollars and cents (ex. 10.25) and the second will be the percentage of tax charged (ex. 5).
  // calculate the toal price (the amount, + the percentage)
  
// function calculateTax (price, tax) {
//     const percentage = tax / 100; 
//     console.log(price + (price * percentage));
//     return
// }

//   // // should = 11
//   calculateTax(10, 10)
  
// const calculateTax = function(price, tax) {
//     const percentage = tax / 100; 
//     console.log(price + (price * percentage));
//     return
// }
//   // should = 120
//   calculateTax(100, 20)

// const calculateTax = function(price, tax) {
//         console.log(price + (price * (tax / 100)));
//     }
//   // should = 120
//   calculateTax(100, 20)


/*
アローファンクションになるとreturnしなくて良い
*/
const calculateTax1 = (price, tax) => {
    const percentage = tax / 100; 
    console.log(price + (price * percentage));
}
  // should = 120
  calculateTax1(100, 20)

const calculateTax2 = (price, tax) => {
        console.log(price + (price * (tax / 100)));
    }
  // should = 120
  calculateTax2(100, 20)
  
  // Function Five: should have 0 parameters, meaning it will take 0 arguments. 
  // log to the console the numbers from 1 to 10, one line at a time
  
//   const i = 0;
//   const printNumbersToTen1 = (i) => {
//       for(i = 1; i <= 10; i++) {
//           console.log(i);
//       }
//   }

//    printNumbersToTen1()
  
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const printNumbersToTen2 = arr.map(i => i + 1);
console.log(printNumbersToTen2);
  
  // Function six: should have 1 parameter, meaning it will take 1 arguments. 
  // log to the console the numbers from 1, to whatever number is given as an argument (x), one line at a time
  
const printNumbersToX = (x) => {
    for(i = 1; i <= x; i++) {
    console.log(i);
    }
}

  printNumbersToX(5)
  
  

  // Function seven: should have 2 parameters, meaning it will take 2 arguments. 
  // log to the console the two strings given, added together, with a space in between
  
  const addStrings = (a, b) => {
    console.log(`${a} ${b}`);
  }
  // should print = 'hello world'
  addStrings("hello", "world")
  
  
  // Function eight: should have 0 parameter, meaning it will take 0 arguments. 
  // log to the console the numbers from 1, to 100, one line at a time BUT:
  // for every number that is a multiple of 3, print the word "fizz", and for every multiple of 5
  // print the word "buzz". for every multiple of both, print "fizzbuzz"
  
//   const fizzBuzz1 = () => {
//       for(i = 1; i <= 100; i++) {
//           if(i % 3 === 0 && i % 5 ===0) {
//               console.log('fizzBuzz');
//           } else if (i % 3 === 0) {
//             console.log('fizz');
//           } else if (i % 5 === 0) {
//             console.log('Buzz');
//           } else {
//             console.log(i);
//           }
//       }
//   }
 　
//   fizzBuzz1()

  

  // Function nine: should have 1 parameter, meaning it will take 1 arguments. 
  // log to the console the numbers from 1, to whatever number is given (x), one line at a time BUT:
  // for every number that is a multiple of 3, print the word "fizz", and for every multiple of 5
  // print the word "buzz"
  
  const paramFizzBuzz1 = (x) => {
    for(let i = 1; i <= x; i++) {
        if (i % 3 === 0) {
            console.log('fizz');
            } else if (i % 5 === 0) {
                console.log('Buzz');
                } else {
                    console.log(i);
                }
    }
}
    paramFizzBuzz1(25);
 
  
  // Function ten, Bonus: should have 1 parameter, meaning it will take 1 arguments. 
  // log to the console the reverse of the given string
  
  const reverseString1 = function(str) {
    return [...String(str)].reverse().join('');    
  }
  
  console.log(reverseString1('hello'));
  
  
  const reverseString2 = function(str) {
    return str.split('').reverse().join('');    
  }
  
  console.log(reverseString2('hello'));



  
  
  
  