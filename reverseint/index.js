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
  let newNum = n * Math.sign(n) //make positive, keeping n in tact
  // convert toString(), then split('') into array, then reverse arr, then join('')
  // parse it back into an int then multiply by the initial sign of N (-1, 1)

  return newNum = parseInt(newNum.toString().split('').reverse().join('')) * Math.sign(n)
}

module.exports = reverseInt;




// let tempNum = n * Math.sign(n) // multiply by -1 if negative.
//
// tempNum = tempNum.toString().split('').reverse().join('') //to string and flip
//
// console.log(parseInt(tempNum, 10) * Math.sign(n))
// return parseInt(tempNum, 10) * Math.sign(n) //set as base 10 and multiply by the sign