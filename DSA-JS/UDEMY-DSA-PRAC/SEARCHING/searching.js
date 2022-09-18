// linear search algorithm :
const array = [1, 2, 3, 4, 5, 6];
let search = (value) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == value) return i;
  }
  return -1;
};
console.log(search(4));

// Binary Search Algorithm :

// const array2 = [2, 3, 4, 5, 6, 7];
// let binarySearch = (value) => {
//   let start = 0;
//   let end = array2.length - 1;
//   while (start <= end) {
//     let mid = Math.floor((start + end) / 2);
//     if (array2[mid] < value) {
//       start = mid + 1;
//     } else if (array2[mid] > value) {
//       end = mid - 1;
//     } else {
//       return mid;
//     }
//   }
//   return -1;
// };
// console.log(binarySearch(8));

// FINAL BINARY SEARCH
