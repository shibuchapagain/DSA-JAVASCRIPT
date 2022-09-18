const same1 = (arr1, arr2) => {
  if (arr1.length != arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex == -1) {
      return false;
    }
    console.log(arr2);
    arr2.splice(correctIndex, 1);
  }
  return true;
};
// const arr1 = [1, 2, 3, 4];
// const arr2 = [1, 4, 16, 9];
// console.log(same(arr1, arr2)); // true

// this above solve problem with time complexity -->O(N*2)<--

//////////////////////////////////////////////////////////////////////////////////

// THE FINE SOLUTION IS BELOW WHICH TIME COMPLEXITY IS O(N)
const same2 = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    // console.log(frequencyCounter1);
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  //   console.log(frequencyCounter1);
  //   console.log("-------");
  //   console.log(frequencyCounter2);
  for (let key in frequencyCounter2) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
};

// const arr1 = [1, 2, 3, 4];
// const arr2 = [1, 4, 16, 9];
// console.log(same2(arr1, arr2)); // true

//////////////////////////////////////////////////////////////////////////////////
// FREQUENCY COUNTER ANAGRAM CHALLENGE ...

// validAnagram('iceman', 'cinema) // true
const validAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  let obj1 = {};
  let obj2 = {};
  for (let el of str1) {
    // console.log(obj1[el] || 0); // 0;
    obj1[el] = (obj1[el] || 0) + 1;
  }
  for (let el of str2) {
    obj2[el] = (obj2[el] || 0) + 1;
  }

  //   console.log(obj1);
  //   console.log("-----");
  //   console.log(obj2);

  for (let key in obj1) {
    if (!(key in obj1)) {
      return false;
    }
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};
const result = validAnagram("shiva", "avihs");
// console.log(result); // true

//////////////////////////////////////////////////////////////////////////////////
let check = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  for (let i = 0; i < str1.length; i++) {
    let checkIndex = str2.indexOf(str1[i]);
    if (checkIndex == -1) {
      return false;
    }
    // str2.splice(checkIndex, 1);
  }
  return true;
};

// let str1 = "shiva chapagain";
// let str2 = "ashvi chapainga";
// console.log(check(str1, str2));

///////////////////////////////////////////////////////////////////////////////////////////
// fit and fine solution
const valid = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  let obj = {};
  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    obj[letter] ? (obj[letter] += 1) : (obj[letter] = 1);
  }
  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];
    if (!obj[letter]) {
      return false;
    } else {
      obj[letter] -= 1;
    }
  }
  return true;
};

console.log(valid("shivaa", "aishva"));
