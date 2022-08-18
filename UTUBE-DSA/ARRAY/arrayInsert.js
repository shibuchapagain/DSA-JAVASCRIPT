// let data = [60, 30, 10, 67, 40];
// let newEl = 70;
// let position = 2;
// for (let i = data.length - 1; i >= 0; i--) {
//   //   console.log(data[i]);
//   if (i >= position) {
//     data[i + 1] = data[i];
//     if (i == position) {
//       data[i] = newEl;
//     }
//   }
// }
// // console.log(data);

// // // create a function to solve this
// let data = [60, 30, 10, 67, 40];
// const insertData = (newEl, position) => {
//   for (let i = data.length - 1; i >= 0; i--) {
//     // console.log(i); // 4,3,2,1,0
//     if (i >= position) {
//       data[i + 1] = data[i];
//       if (i == position) {
//         data[i] = newEl;
//       }
//     }
//   }
//   return data;
// };
// // insertData(33, 5);
// // console.log(insertData(99, 9));

let data = [10, 20, 30, 40];
let number = 99;
let position = 1;
for (let i = data.length - 1; i >= 0; i--) {
  if (i >= position) {
    data[i + 1] = data[i];
    if (i == position) {
      data[i] = number;
    }
  }
}
console.log(data); // 10,90,20,30,40
