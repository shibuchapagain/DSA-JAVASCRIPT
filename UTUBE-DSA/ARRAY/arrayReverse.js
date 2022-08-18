let array = [1, 2, 3, 4, 5];
console.log(array);

let newArray = [];
for (let i = array.length - 1; i >= 0; i--) {
  //   console.log(array[i]);
  newArray.push(array[i]);
}
console.log(newArray);

// OUTPUT:
[1, 2, 3, 4, 5][(5, 4, 3, 2, 1)];

// DEFAULT FUNCTION:
let a = [1, 2, 3];
console.log(a.reverse());
