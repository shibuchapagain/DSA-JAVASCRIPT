const sumZero = (array) => {
  let sortedArr = arr.sort((a, b) => {
    return a - b;
  });
  //   console.log(array); // is automatically sorted with -3....3
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (arr[i] + arr[j] == 0) {
        return [arr[i], arr[j]];
      }
    }
  }
};
// let arr = [-1, -2, -3, 0, 1, 3, 2];
// sumZero(arr);
// console.log(sumZero(arr)); // 3,-3 return first sum=0; complexity is N*2

// REFACTOR the above solution
const zero = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
};
// let arr = [-1, -2, -3, 0, 1, 3, 2];
// console.log(zero(arr)); // here time complexity is o(N)...

/////////////////////////////////////////////////////////////////////////////////
// count unique value solution
function countUniqueValues(arr) {
  let i = 0;
  for (j = 1; j < array.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
// let array = [1, 1, 2, 3, 3, 4, 5, 6, 6, 7];
// console.log(countUniqueValues(array)); // 7 here 7 are unique numbers 1,2,3,4,5,6,7--> 7 total 7

/////////////////////////////////////////////////////////////////////////////////
let sum = (array, length) => {
  if (array == []) {
    return null;
  }
  let sort = array.sort((a, b) => {
    return b - a;
  });
  //   console.log(sort);
  let newArray = sort.slice(0, length);
  //   console.log(newArray);
  let sum = 0;
  newArray.forEach((el) => {
    sum += el;
  });
  return sum;
};
// let array = [1, 22, 3, 55, 5, 69, 7];
// let array = [];
let length = 3;
// sum(array, length);
// console.log(sum(array, length)); // 146

//////////////////////////////////////////////////////////////////////
// it also add the heightest number in betn given range number of an array
function maxSubArraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
// let arr = [1, 2, 3, 4, 5, 6];
// let num = 2;
// console.log(maxSubArraySum(arr, num)); // 11

//////////////////////////////////////////////////////////////////////
// WRITE A FUNCTION OF SEARCH WHERE YOUR GIVE A NUMBER AND FIND OUT THE LOCATIONS OF THIS NUMBER THAT MEAN INDEX OF THAT NUMBERS AND ARRAY SHOULD BE IN SORTED FORMAT AND... IF THE NUMBER CANT GET THEN RETURN -1...

const search = (array, num) => {
  let check = array.includes(num);
  let index = array.indexOf(num);
  return index;
};

let array = [1, 22, 3, 55, 5, 69, 7];
let num = 55;
// search(array, num);
console.log(search(array, num)); // 3 index

// BY USING LINEAR SEARCH

let search2 = (array, num) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == num) {
      return i;
    }
  }
  return -1;
};

// let array = [1, 22, 3, 55, 5, 69, 7];
// let num = 5;
// console.log(search2(array, num)); // 4 index

// BY USING BINARY SEARCH
const binarySearch = (array, number) => {
  let min = 0;
  let max = array.length - 1;
  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currElement = array[middle];

    if (array[middle] < number) {
      min = middle + 1;
    } else if (array[middle] > number) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
};

// let array = [1, 2, 3, 4, 5, 6, 7, 8];
// let number = 7;
// // binarySearch(array, number);
// console.log(binarySearch(array, number)); // 6
