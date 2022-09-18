//  factorial
let factorial = (x) => {
  if (x === 1) return 1; // initialize base case .
  if (x > 0) return x * factorial(x - 1);
};
// console.log(factorial(5)); // 120

// sum of given range 1 to x :
let sum = (x) => {
  if (x == 1) return 1;
  return x + sum(x - 1);
};
// console.log(sum(5)); // 15 (1+2+3+4+5);

// // fibonesis series :
// // Example :  0, 1, 1, 2, 3, 5, 8, 13, 21,
// let array = [];
// let fibonesis = (x) => {
//   for (let i = 0; i < x; i++) {
//     array.push(i + (i + 1));
//   }
// };
// console.log(fibonesis(5));
// console.log(array);

// fibonesis problem :
let fibo = (x) => {
  // if(x==0) return 0;
};
