function takeShower() {
  return "take showering";
}

function eatBreakFast() {
  const meal = cooked();
  return `eating ${meal}`;
}

function cooked() {
  const item = ["mango", "banana", "apple"];
  return item[Math.floor(Math.round() * item.length)];
}

function wakeUp() {
  takeShower();
  eatBreakFast();
  console.log("OK READY TO GO");
}

// wakeUp();

// 2)
function countDown(num) {
  if (num <= 0) {
    console.log("ALL OK");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}
// countDown(5);

// 3)
function countDown2(num) {
  for (let i = num; i > 0; i--) {
    console.log(i);
  }
  console.log("ALL OK");
}
// countDown2(5);

// 4) our second recursive function
function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}
// console.log(sumRange(5));

// 5) FACTORIAL RECURSION FUNCTION
function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}
// console.log(factorial(5));

// 5) same solve by for loop
function fact(num) {
  let total = 1;
  for (i = num; i > 0; i--) {
    total *= i;
  }
  return total;
}
console.log(fact(5));
