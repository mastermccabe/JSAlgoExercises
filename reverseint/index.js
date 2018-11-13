// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let tempNum = n * Math.sign(n) // multiply by -1 if negative.

  tempNum = tempNum.toString().split('').reverse().join('') //to string and flip

  console.log(parseInt(tempNum, 10) * Math.sign(n))
  return parseInt(tempNum, 10) * Math.sign(n) //set as base 10 and multiply by the sign
}

module.exports = reverseInt;