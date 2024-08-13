/**
 *  1. Problem
 *      function takes an input of "s" containing only the following characters: "(", ")", "[", "]", "{", "}" and it should
 *      return true if the input string is valid.
 *      An input string is valid if:
 *          1. Open brackets are closed by the same type of brackets
 *          2. Open brackets are closed in the correct order
 *          3. Every close bracket has the corresponding open bracket of the same type
 *
 *      input - length at min 1 and at max 10^4
 *      input - consists of only chars (){}[]
 *
 *
 *
 *  2. Examples
 *      isValid("[]") -> true
 *      isValid("[)") -> false
 *      isValid("{()[({})]}") -> true
 *      isValid("[[](){()[])") -> false
 *      isValid("[]{}()[{}]") -> true
 *
 *  3. Algorithm
 *      1. create object that stores closing bracket as key and the opening as value
 *      2. create empty array called stack
 *      3. loop over each char
 *          1. if the current char is the closing bracket and stack is empty return false
 *          1. if the last item in the stack is the opening bracket of the current char
 *              pop of the last item
 *          2. push current car to he stack
 *      4. return length of the stack by converting it to boolean val
 *
 *
 *  - Time and Space complexity of the algorithm
 *      Time Complexity:
 *        The time complexity of this algorithm is O(n) the reason is that we've to traverse each char in the string
 *      Space Complexity:
 *        The space complexity of this algorithm is O(1) we've used 2 reference types
 *          - obj - contains 3 properties which is O(3) but reduced down to O(1)
 *          - array - will not grow with the given input
 */

const isValid = (parenthises) => {
  const brackets = {
    ')': '(',
    ']': '[',
    '}': '{',
  }
  const stack = []
  for (const parenthis of parenthises) {
    if (brackets[parenthis] && !stack.length) return false
    if (
      brackets[parenthis] &&
      stack[stack.length - 1] === brackets[parenthis]
    ) {
      stack.pop()
    } else {
      stack.push(parenthis)
    }
  }
  return !stack.length
}
console.log(isValid('[]'))
console.log(isValid('[)'))
console.log(isValid('{()[({})]}'))
console.log(isValid('[[](){()[])'))
console.log(isValid('[]{}()[{}]'))
