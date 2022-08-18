// let array = [10, 20, 30, 90, 80, 70, 60, 40, 50];

// 1) solve through inbuild function
// array.splice(2, 1); // can remove the index 2 element
// console.log(array);

// 2) Solve through looping
let data = [10, 20, 30, 40];
let position = 2;
for (let i = position; i < data.length - 1; i++) {
  //   console.log(data[i]);
  data[i] = data[i + 1];
}
data.length = data.length - 1;
console.log(data);
