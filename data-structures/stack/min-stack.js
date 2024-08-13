/**
 * 1. Problem
 * Design a stack that supports push, pop, topVal, and retrieving the minimum element in constant time.
 * Implement the MinStack class:
 *  MinStack() initializes the stack object
 *  void push(int val) pushes the element val onto the stack
 *  void pop() removes the element on the topVal of the stack
 *  int topVal() gets the topVal element of the stack
 *  int getMin() retrieves the minimum element in the stack
 *
 * - It's guarenteed that there are no edge cases; val is given of type int
 *
 * You must implement a solution with O(1) time complexity for each function.
 *
 * Time and Space Complexity
 *    Time Complexity
 *      - push
 *          O(1) - because pushing to the end of array is O(1)
 *      - top
 *          O(1) - coz accessing last item is constant time
 *      getMin
 *          O(n) - based on the length of the stack, we've to find min
 *    Space Complexity
 *      O(n) - because stack list can grow proportionally to each pushed item
 */

function MinStack() {
  this.stack = []
}

MinStack.prototype.push = function (value) {
  this.stack.push(value)
}

MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1]
}

MinStack.prototype.pop = function () {
  this.stack.length && this.stack.pop()
}
MinStack.prototype.getMin = function () {
  let newMin = Infinity
  for (const el of this.stack) {
    if (el < newMin) {
      newMin = el
    }
  }
  return newMin
}

const minStack = new MinStack()
// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[],[-2],[0],[-3],[],[],[],[]]
// Use Testcase
// Output
// [null,null,null,null,-3,null,-3,-2]
// Expected
// [null,null,null,null,-3,null,0,-2]
minStack.push(-2)
minStack.push(0)
minStack.push(-3)
minStack.push(2)
minStack.push(-19)
minStack.pop()
console.log(minStack.top(), minStack.getMin())
