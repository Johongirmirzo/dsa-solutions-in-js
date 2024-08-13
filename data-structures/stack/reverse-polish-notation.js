/**
 *  1. Problem
 *      Function takes input of array of strings which are
 *      an arithmetic expression in a Reverse Polish Notation
 *      function should evaluate the arithmetic expression following the Reverse Polish Notation rules
 *      and return the result
 *
 *      Constraints
 *           1 <= tokens.length <= 10^4
 *           tokens[is] either an operator: "+", "-", "*", "/" or an integer in the range [-200, 200]
 *
 *      Notes:
 *          - There won't be any division by 0
 *          - Division between two numbers always truncates toward 0
 *
 *
 *  2. Algorithm
 *      1. create variable named output set to 0
 *      2. create variable called stack set to []
 *      3. create object called operators with following props
 *          "+": true
 *          "-": true
 *          "/": true
 *          "*": true
 *
 *      4. loop over each token
 *          if operators[token]
 *              first = stack.pop()
 *              second = stack.pop()
 *              switch token
 *                case +
 *                  output =first + second
 *                case -
 *                  output =first - second
 *                case /
 *                  output = Math.trunc(first / second)
 *                case *
 *                  output = first * second
 *              stack.push(output)
 *          else
 *              !operators[token] && stack.push(+el)
 *
 *
 *      return output
 *
 *
 *  5. Time and Space Complexity
 *      Time Complexity
 *        -  O(n) - because operations computer has to perform grows proportianally to the given input
 *      Space Complexity
 *        - O(n) - as elements pushed to stack is not constant amount
 */

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evaluatePolishReverseNotation = function (tokens) {
  let output = 0
  let stack = []
  let operators = {
    '+': true,
    '-': true,
    '/': true,
    '*': true,
  }

  for (const token of tokens) {
    if (operators[token]) {
      const firstNum = stack.pop()
      const secondNum = stack.pop()
      switch (token) {
        case '+':
          output = secondNum + firstNum
          break
        case '-':
          output = secondNum - firstNum
          break
        case '/':
          output = Math.trunc(secondNum / firstNum)
          break
        case '*':
          output = secondNum * firstNum
          break
      }
      stack.push(output)
    } else {
      !operators[token] && stack.push(+token)
    }
  }
  return stack[0]
}

console.log(evaluatePolishReverseNotation(['2', '1', '+', '3', '*'])) // 9
console.log(evaluatePolishReverseNotation(['4', '13', '5', '/', '+'])) // 6
console.log(
  evaluatePolishReverseNotation([
    '10',
    '6',
    '9',
    '3',
    '+',
    '-11',
    '*',
    '/',
    '*',
    '17',
    '+',
    '5',
    '+',
  ])
) // 22
