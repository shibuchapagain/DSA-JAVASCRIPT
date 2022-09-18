// 1--> WRITE A FUNCTION WHICH TAKE A STRING INPUT AND RETURN THE REVERSED OF THAT STRING
// SAMPLE--> i/p shiva chapagain -----> o/p chapagain shiva

// --->
// const sentence = (string) => {
//   let arr = [];
//   for (let i = string.length - 1; i >= 0; i--) {
//     arr.push(string[i]);
//   }
//   return arr;
// };
// let string = "shiva chapagain";
// const word = sentence(string);
// console.log(word.join("")); // niagapahc avihs

// ---> // using string method
// const sentence = (string) => {
//   let strArr = string.split(" "); // ['shiva', 'chapagain']
//   let require = strArr.reverse(); // ['chapagain', 'shiva']
//   let output = require.join(" ");
//   return output;
// };
// let string = "shiva chapagain";
// sentence(string);
// console.log(sentence(string)); // chapagain shiva

// 2) WRIITE A FUNCTION WHICH TAKES STRING AS INPUT AND RETURN THE DUBPLICATE OF THAT STRING
// const reserved = (string) => {
//   let newString = "";
//   for (let i = 0; i < string.length; i++) {
//     newString += string[i];
//   }
//   return newString;
// };
// let string = "shiva chapagain";
// console.log(reserved(string)); // shiva chapagain -> duplicate of *string*

// --> FOR NUMERIC CALCULATION
// 3) WRITE A FUNCTION THAT CALCULATE THE SUM OF ALL GIVEN RANGE NUMBERS (0, range)..
// // 5 --> 1+2+3+4+5=  15
// const sum = (range) => {
//   return (range * (range + 1)) / 2;
// };
// console.log(sum(5)); // 15

// CHARACTOR COUNT -->
// example (aaabb) --> a:3,b:2
const charCount = (string) => {
  let obj = { a: 0 };
  for (let i = 0; i < string.length; i++) {
    let char = string[i].toLowerCase();
    if (obj[char] > 0) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  }
  return obj;
};
// let string = "aaabb"; // { a: 3, b: 2 }
let string = "shiva chapagain";
console.log(charCount(string));
