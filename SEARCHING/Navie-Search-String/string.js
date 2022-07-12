// Navie search string

const naiveSearch = (long, short) => {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      //   console.log(short[j], long[i + j]);
      if (short[j] !== long[i + j]) {
        // console.log("break");
        break;
      }
      if (j == short.length - 1) {
        count++;
      }
    }
  }
  return count;
};

console.log(naiveSearch("lolie loled", "lol")); // found 2  and lorie loled -> found 1
