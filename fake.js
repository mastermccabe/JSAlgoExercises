//****** Fib
function fizzBuzz(n) {

  for (let i = 1; i <= n; i++) {
    if (!(i % 15)) console.log("fizzbuzz")
    else if (!(i % 3)) console.log("fizz")
    else if (!(i % 5)) console.log("buzz")
    else console.log(i)

  }



}

//****** End Fib
//******************Anagram****************
// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


//iterate through both strings 1 time, then once again to compare
function anagrams(stringA, stringB) {
  const sortedStrA = sortStr(stringA)
  const sortedStrB = sortStr(stringB)

  return sortedStrA === sortedStrB


}

function sortStr(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
}
//   const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);
//
//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false
//   }
//   for (let char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]) {
//       return false
//     }
//   }
//   return true
//
// }
//
// function buildCharMap(str) {
//   const charMap = {};
//
//   for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }
//   return charMap
// }

module.exports = anagrams;
//******************END Anagram****************


///*****************Capatalize ******************
function capitalize(str) {
  let strArr = str.split(' ')
  let returnStr = ''

  // for (let word of strArr) {
  //   strArr[word] = word[0].toUpperCase() + word.slice(1)
  //   console.log(strArr[word])
  // } //does not work


  for (let word in strArr) {
    strArr[word] = strArr[word][0].toUpperCase() + strArr[word].slice(1)
  }


  console.log(strArr.join(' '))
  return strArr.join(' ')
}

module.exports = capitalize;
///*****************end Capatalize ******************

///*****************fib ******************
//memoization
const fibHash = {}

function fib(n) {


  if (n in fibHash) return fibHash[n]

  if (n < 2) return n

  fibHash[n] = fib(n - 1) + fib(n - 2)
  console.log(fibHash)
  return fib(n - 1) + fib(n - 2)


}

module.exports = fib;


// //linear runtime
// let arr = [0, 1]
// for (let i = 1; i < n; i++) {
//   arr.push(arr[i - 1] + arr[i])
//
// }
// return arr[n]

///***************** end fib ******************
///***************** count vowel ******************
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

///***************** end vowel ******************

///***************** reverse Int ******************
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
// return parseInt(tempNum, 10) *
///***************** end reverse Int ******************

///*****************  reverse str ******************
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

///*****************  reverse str ******************



///*****************  max char ******************
function maxChar(str) {
  let hash = {}
  let max = 0
  let maxChar = ''

  for (let c of str) { //note of
    if (hash[c]) {
      hash[c]++
    } else {
      hash[c] = 1
    }
  }

  for (let char in hash) { //note IN
    if (max < hash[char]) {
      max = hash[char]
      maxChar = char
    }


  }
  console.log(str, maxChar)
  return maxChar

  ///*****************  end max char ******************