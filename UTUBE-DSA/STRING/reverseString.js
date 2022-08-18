// USING STACK

let myName = "shiva";
myName = myName.split("");
// console.log(myName);

let data = [];
let currentSize = data.length;

function push(newVal) {
  data[currentSize] = newVal;
  currentSize++;
}

function pop() {
  currentSize--;
  data.length = currentSize;
}

function reverseStr(item) {
  //   console.log(item);
  for (let i = 0; i < item.length; i++) {
    push(item[i]);
  }
}

reverseStr(myName);
// console.log(data);

///////////////////////////////////////////////////////////////////

// FOR REVERSE STRING :
// string in array :

console.log(myName);

let reverseString = [];
for (let i = 0; i < myName.length; i++) {
  //   console.log(myName[i]); // s h i v a
}

for (let i = myName.length - 1; i >= 0; i--) {
  reverseString.push(myName[i]);
}
console.log(reverseString);

// OUTPUT:
// [ 's', 'h', 'i', 'v', 'a' ]
// [ 'a', 'v', 'i', 'h', 's' ]
