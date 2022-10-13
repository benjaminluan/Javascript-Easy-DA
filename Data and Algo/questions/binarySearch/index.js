/** Binary Search **
 *
 * Given a sorted array 'nums' and an integer 'target', return
 * the index of the target.
 *
 * Note: Your solutions' time complexity must be faster than O(n).
 *
 * @example
 * binarySearch([1, 2, 4, 9, 12], 9) -> 3
 * binarySearch([-2, -1, 4, 5, 7], -1) -> 1
 * binarySearch([-1, 4, 18, 20], 18) -> 2
 *
 */
const binarySearch = (nums, target) => {
  for (i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    } else if (i === nums.length - 1 && nums[i] != target) {
      return console.log('none')
    }
  }
};

binarySearch([1, 2, 4, 0, 12], 9);

module.exports = binarySearch;
