// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const matches = str.match(/[aeiou]/gi) //g continues after 1, i is case insensite
  return matches ? matches.length : 0 //matches is an array (hence length)
}

module.exports = vowels;


// let vowelCount = 0;
// let vowelArr = ['a', 'e', 'i', 'o', 'u']
//
// for (let letter of str.toLowerCase()) {
//   if (vowelArr.includes(letter)) {
//     vowelCount++
//   }
//
// }
//
// return vowelCount;