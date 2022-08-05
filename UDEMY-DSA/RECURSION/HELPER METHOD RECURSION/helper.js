// function outer(input) {
//   let outerScopedVariable = [];
//   function helper(helperInput) {
//     // modify the outer scoped variable
//     helper(helperInput--);
//   }
//   helper(input);
//   return outerScopedVariable;
// }

// console.log(outer(5));

//
function collectOdds(nums) {
  let result = [];
  function helper(helperInput) {
    if (helperInput.length === 0) return;
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  }
  helper(nums);
  return result;
}
let nums = [88, 2, 3, 4, 5, 6];
console.log(collectOdds(nums));
