// Binary search is mush faster than other sort algo
// Binary search only works on sorted array

// const country_list = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica"];

// search the array value index :

// const search = (array, value) => {
//   let start = 0;
//   let end = array.length - 1;
//   let middle = Math.floor((start + end) / 2);
//   while (array[middle] !== value && start <= end) {
//     if (value < array[middle]) {
//       end = middle - 1;
//     } else {
//       start = middle + 1;
//     }
//     middle = Math.floor((start + end) / 2);
//   }

//   if (array[middle] === value) {
//     return middle;
//   }
//   return -1;
//   //   return middle;
// };

// const array = [1, 2, 3, 4, 5, 6];
// const value = 6;
// console.log(search(array, value));

// sort version
const search = (array, value) => {
  let start = 0;
  let end = array.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (array[middle] !== value && start <= end) {
    if (value < array[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return array[middle] === value ? middle : -1;
};

const array = [1, 2, 3, 4, 5, 6];
const value = 5;
console.log(search(array, value)); // 4
