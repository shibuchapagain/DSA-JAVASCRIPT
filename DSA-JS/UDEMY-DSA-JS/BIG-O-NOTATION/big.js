// write a function which take an string and return the reverved copy...
const string = "shiva chapagain";
let newString = "";
const reserved = (string) => {
  for (let i = 0; i < string.length; i++) {
    newString += string[i];
  }
  return newString;
};
reserved(string);
// console.log(newString);

// write a function nwhich return the reversed copy of that string ...
const reversed = (string) => {
  newString += string.split(" ").reverse().join(" ");
  return newString;
};
reversed(string);
// console.log(newString);

// write a function that calculate the sum of all numbers from 1 upto some numbers n(given)
// let total = 0;
const calcTotal = (n) => {
  // first solution
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
};
// let t1 = performance.now();
// const total = calcTotal(999999);
// console.log(total);
// let t2 = performance.now();
// console.log(`time consume ${(t2 - t1) / 1000} second`);

// SECOND SOLUTION

const calcTotal2 = (n) => {
  return (n * (n + 1)) / 2;
};
// let t1 = performance.now();
// const total = calcTotal(999999);
// console.log(total);
// let t2 = performance.now();
// console.log(`time consume ${(t2 - t1) / 1000} second`);

//////////
