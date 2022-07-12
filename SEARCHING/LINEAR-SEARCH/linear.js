// linear search... it return index when the expected value get otherwise return -1 that means this value doesnot belong this array

// 1) this is behind the scene of indexOf() method of JS
const linearSearch = (array, value) => {
  for (let i = 0; i < array.length; i++) {
    // if (array[i] === value) return i;
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
};
const array = [1, 2, 3, 4, 11, 22, 33, 44, 77, 88, 99];
const value = 99;
console.log(linearSearch(array, value)); // -1(55) and 88(9)..

// its big0 (N) that means worst case  in time complexity
