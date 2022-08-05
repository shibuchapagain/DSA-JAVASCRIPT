const array = [10, 90, 80, 20, 30, 70, 50, 60];
const item = 22;
let index = undefined;
// console.log(array.includes(20));
for (let i = 0; i < array.length; i++) {
  if (array[i] == item) {
    index = i;
    break;
  }
}
console.log(index);

// default function of javascript to search
console.log(array.indexOf(item));

// default function to delete the item in array
console.log(array);
array.splice(3, 1); // 20 value is deleted from array.
console.log(array);
