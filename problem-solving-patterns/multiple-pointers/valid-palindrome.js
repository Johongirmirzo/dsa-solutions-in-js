/**
 *  1. Problem
 *      function takes a string as input which is a
 *      palindrome and should check if it's a palindrome
 *      else false
 *
 *      - Constraints
 *          1 <= s.length <= 2 * 10^5
 *
 *  2. Analogy
 *      This is in the category of 2 pointer problem solving pattern where I've
 *      solved finding target element by summing from two inds in sorted array
 *
 *  3. Examples
 *      isPalindrome("race a car") -> false
 *          "raceacar"
 *      isPalindrom("a n! a") -> true
 *          "ana"
 *
 *  4. Algorithm
 *      1. convert input to lowercase and remove all
 *          non alphabetical chars and stores the result
 *          into variable named lowercasedStr
 *      2. set up a loop
 *          it should create two initializer
 *          i = start 0 and j start at lowercasedStr.length - 1 and in each iteration
 *              increment i by and decrement j by 1
 *
 *              check if chars in i and j is not same if so return false
 *
 *      3. return true
 */

const isPalindrom = (str) => {
  const lowercasedStr = str.toLowerCase().replace(/[^a-z]/gi, '')
  let left = 0
  let right = lowercasedStr.length - 1
  while (left <= right) {
    if (lowercasedStr[left] !== lowercasedStr[right]) return false

    left++
    right--
  }
  return true
}
console.log(isPalindrom('race a ! car'))
console.log(isPalindrom('!a$n(a'))
console.log(isPalindrom('A man, a plan, a canal: Panama'))
