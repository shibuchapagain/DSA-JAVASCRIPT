// linear search... it return index when the expected value get otherwise return -1 that means this value doesnot belong this array

// 1) this is behind the scene of indexOf() method of JS
const linearSearch = (array, value) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
};
const array = [22, 66, 11, 33, 99, 44, 22, 77, 88];
const value = 88;
console.log(linearSearch(array, value)); // -1(55) and 88(9)..

// its big0 (N) that means worst case  in time complexity

// point :
// 1) we should set i < array.length --> otherwise last value index return -1.
