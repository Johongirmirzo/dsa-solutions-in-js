/**
 *
 * Given an integer array nums, return all the triplets
 * [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k,
 * and nums[i] + nums[j] + nums[k] == 0.
 * Notice that the solution set must not contain duplicate triplets.
 */

const threeSum = (numbers, target = 0) => {
  const triplets = []
  numbers.sort((a, b) => a - b)
  for (let i = 0; i < numbers.length - 2; i++) {
    if (i > 0 && numbers[i - 1] === numbers[i]) continue
    let leftP = i + 1
    let righP = numbers.length - 1
    while (leftP < righP) {
      const sum = numbers[i] + numbers[leftP] + numbers[righP]
      if (sum === target) {
        triplets.push([numbers[i], numbers[leftP], numbers[righP]])
        leftP++
        while (numbers[leftP] === numbers[leftP - 1] && leftP < righP) {
          leftP++
        }
      } else if (sum < target) {
        leftP++
      } else {
        righP--
      }
    }
  }
  return triplets
}
console.log(threeSum([-2, 0, 0, 2, 2]))
console.log(threeSum([-2, 0, 1, 1, 2], 0))
console.log(threeSum([0, 0, 0, 0], 0))
console.log(threeSum([-1, 0, 1, 2, -1, -4], 0))
console.log(threeSum([-1, 0, 1], 0))
console.log(threeSum([0, 1, 1], 0))
