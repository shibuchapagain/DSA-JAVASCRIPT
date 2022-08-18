// FOR EXAMPLE : ATE -> EAT // TRUE OTHERWISE FALSE

function anagram(str1, str2) {
  let objStr1 = {};
  //   console.log(str1, str2);
  if (str1.length !== str2.length) {
    return false;
  }
  for (char of str1) {
    // console.log(char);
    objStr1[ch] = (objStr1[ch] || 0) + 1;
  }
  console.log(objStr1);
}
anagram("ate", "eat");
// console.log(anagram("ate", "eat"));
