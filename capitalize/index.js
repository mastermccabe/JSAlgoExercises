// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let strArr = str.split(' ')
  let returnStr = ''

  // for (let word of strArr) {
  //   strArr[word] = word[0].toUpperCase() + word.slice(1)
  //   console.log(strArr[word])
  // }
  for (let word in strArr) {
    strArr[word] = strArr[word][0].toUpperCase() + strArr[word].slice(1)
  }


  console.log(strArr.join(' '))
  return strArr.join(' ')
}

module.exports = capitalize;