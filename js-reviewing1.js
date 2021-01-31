
// // x
// // print the numbers from one to 100. if the number
// // is a multiple of three, print fizz.
// // if the number is a multiple of 5, print buzz.
// // if its a multiple of both, print fizzbuzz


// for(let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log('fizzbuzz');
//   } else if (i % 3 === 0) {
//     console.log('fizz');
//   } else if (i % 5 === 0) {
//     console.log('buzz');
//   } else {
//       console.log(i);
//   }
// }



// // what's inner loop
// // for (let i = 0; i <= 20; i++) {
// //     let myVar = 5;
// //     for (let j = 0; j <= 5; j++) {
// //       console.log(`the outer loop(i) = ${i}, the inner loop = ${j}`)
// //     }
// //     console.log(myVar);
// //   };

// for (let i = 0; i <= 5; i++) {
//     let n = 5;
//     for (j = 1; j <= 3; j++) {
//         console.log(`The outer loop(i) = ${i}, the inner loop(j) = ${j}`);
//     }
//     console.log(n);
// }

// // reverse loop
// for(let i = -1; i >= -3; i--) {
//     console.log(i);
// }

// // while loop
// let n = 1;
// while (n <= 5) {
//   console.log(`n = ${n}`);
// //   n += 1;
//   n++;
// }

// // if
// const money = 50;
// const price = 30;

// if (money == price) {
//     console.log('You paid exact amount');
// } else if (money > price) {
//     console.log(`Here is your change ${money - price}.`);
// } else {
//     console.log("That's not enough");
// }

// function cashier(money, price) {
//     if (money == price) {
//         console.log('You paid exact amount.');
//     } else if (money > price) {
//         console.log(`Here is your change ${money - price}.`);
//     } else {
//         console.log("That's not enough.");
//     } 
//     return cashier;
// } 
// cashier(40, 30);


// const nestedLoop = function() {
//     for(let i = 0; i <= 5; i++) {
//         for(j = 0; j <= 2; j++) {
//             console.log(i,j)
//         }
//     }
// }
// nestedLoop();

