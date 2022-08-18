// basic recusion function
function apple(x) {
  //   console.log("Called");
  console.log(x);
  if (x < 5) {
    apple(x + 1);
  }
}
let x = 0;
// apple(x); // return 0 to 5

// find factorial
function factorial(number) {
  if (number <= 1) {
    return 1;
  }
  return number * factorial(number - 1);
}
let number = 4;
// factorial(number);
console.log(factorial(number));
