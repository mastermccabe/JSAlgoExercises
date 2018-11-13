// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let hash = {}
  let max = 0
  let maxChar = ''

  for (let c of str) {
    if (hash[c]) {
      hash[c]++
    } else {
      hash[c] = 1
    }
  }

  for (let char in hash) {
    if (max < hash[char]) {
      max = hash[char]
      maxChar = char
    }


  }
  console.log(str, maxChar)
  return maxChar
  //
  // let otherHash = {}
  // for (let c in str) {
  //   if (otherHash[str[c]]) {
  //     otherHash[str[c]]++
  //   } else {
  //     otherHash[str[c]] = 1
  //   }
  //   console.log("other", otherHash)
  //
  // }
  //





  // let charMap = {}
  // let max = 0
  // let maxChar = ''
  //
  // for (let char of str) {
  //   if (!charMap[char]) {
  //     charMap[char] = 1
  //   } else {
  //     charMap[char]++
  //   }
  //
  // }
  //
  // for (let char in charMap) {
  //   if (charMap[char] > max) {
  //     max = charMap[char]
  //     maxChar = char
  //   }
  // }
  //
  // return maxChar


}









module.exports = maxChar;


//   console.log(str)
//   let char = ''
//   let hash = {}
//   for (let i = 0; i < str.length; i++) {
//     if (typeof(hash[str[i]]) !== 'undefined') {
//       hash[str[i]] += 1
//       console.log(hash)
//     } else hash[str[i]] = 1
//
//
//   }
//
//
//   return char
// }

// const charMap = {}
// let max = 0;
// let marChar = ''
//
// for (let char of str) {
//   charMap[char] = charMap[char] + 1 || 1; //initializes to 1 if 'null' else adds one
//
// }
//
// for (let char in charMap) { //object uses IN
//   if (charMap[char] > max) {
//     max = charMap[char];
//     maxChar = char;
//   }
// }
// console.log(max, maxChar)
// return maxChar
// }