console.log("WORKED");

const shibuDetails = {
  firstName: "Shiva",
  isCoder: true,
  favouriteNum: [1, 2, 3, 4],
};

console.log(Object.keys(shibuDetails)); // [ 'firstName', 'isCoder', 'favouriteNum' ]
console.log(Object.values(shibuDetails)); // [ 'Shiva', true, [ 1, 2, 3, 4 ] ]
console.log(Object.entries(shibuDetails)); // return key value pair in array
console.log(shibuDetails.hasOwnProperty("firstName")); // true
