// // for swap an elements :
// const swap = (temp, left, right) => {
//   temp = right;
//   right = left;
//   left = temp;
//   return { right, left };
// };
// let left = 5;
// let right = 9;
// let temp;
// // console.log(swap(temp, left, right));

// // recursion :

///////////////////////////////////////

// function pivot(array, start = 0, end = array.length - 1) {
//   function swap(array, i, j) {
//     let temp = array[i];
//     array[i] = array[j];
//     array[j] = temp;
//   }
//   let pivot = array[start];
//   let swapIdx = start;

//   for (let i = start + 1; i < array.length; i++) {
//     if (pivot > array[i]) {
//       swapIdx++;
//       swap(array, swapIdx, i);
//       //   console.log(array);
//     }
//   }
//   swap(array, start, swapIdx);
//   return swapIdx;
// }

// function quickSort(array, left = 0, right = array.length - 1) {
//   if (left < right) {
//     let pivotIndex = pivot(array, left, right);
//     // left
//     quickSort(array, left, pivotIndex - 1);
//     // right
//     quickSort(array, pivotIndex + 1, right);
//   }
//   return array;
// }

// quickSort([1, 9, 8, 7, 4]);

// sir solution

function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx);
  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right); //3
    //left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log(quickSort([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23]));
