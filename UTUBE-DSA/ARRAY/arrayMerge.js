const array1 = [5, 1, 2, 4, 3];
const array2 = [9, 6, 8, 7];
// console.log(array1, array2);
let newArray = [];
for (let i = 0; i < array1.length; i++) {
  //   newArray.push(array[i]);
  newArray[i] = array1[i];
  //   console.log(array1[i]);
}
for (let i = 0; i < array2.length; i++) {
  //   newArray.push(array2[i]);
  newArray[array1.length + i] = array2[i];
}
console.log(newArray);
