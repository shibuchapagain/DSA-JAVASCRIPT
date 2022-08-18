// STACK PUSH AND POP

let data = [];
let currentSize = data.length;
console.log(currentSize);

function push(newVal) {
  data[currentSize] = newVal;
  currentSize++;
}

function pop() {
  currentSize--;
  data.length = currentSize;
}

push(1);
push(2);
push(3);
push(4);
push(5);
pop();
pop();
pop();
pop();
pop();

console.log(data);
