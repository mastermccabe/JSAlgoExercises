// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {

  let newStr = ''

  for (let character of str) {
    newStr = character + newStr
  }
  return newStr
}


module.exports = reverse;

// ******alternate solution below **********
// function reverse(str) {
//   let newStr = str.split('').reverse().join('')
//   return newStr
// }

/// ** alt solution **

// debugger;
// return str.split('').reduce((rev, char) => char + rev, '');