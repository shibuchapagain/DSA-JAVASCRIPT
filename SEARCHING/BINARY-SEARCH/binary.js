// BINARY SEARCH :
// ONE OF THE MOST FAMOUS AND WIDELY USED IN SEARCHING :
// IN BINARY SEARCH .... ARRAY SHOULD BE IN SORTED FORMAT :
const array = [11, 22, 33, 44, 55, 66, 77, 88];
const binarySearch = (value) => {
  let start = 0;
  let end = array.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (array[mid] > value) {
      end = mid - 1;
    } else if (array[mid] < value) {
      start = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
};
console.log(binarySearch(55)); // return 4 ...

// POINT :
// 1) end should be array.length-1 .
// mid always be MATH.floor((start+end)/2) .. it takes lower value not upper .
// mid always define inside the while loop ..
// do use while loop to run the loop ...
