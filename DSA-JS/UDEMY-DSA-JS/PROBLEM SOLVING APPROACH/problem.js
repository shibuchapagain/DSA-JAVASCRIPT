// const charCount = (str) => {
//   let result = {};
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i].toLowerCase();
//     if (result[char] > 0) {
//       result[char]++;
//     } else {
//       result[char] = 1;
//     }
//   }
//   return result;
// };
// console.log(charCount("aaabb"));
// refactoring
const charCount = (str) => {
  let obj = {};
  for (let char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
};
console.log(charCount("hello hi!!")); // { h: 2, e: 1, l: 2, o: 1, i: 1 }
