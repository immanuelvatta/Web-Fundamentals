/* 
    Array: Second-Largest

    Return the second-largest element of an array, or null if there is none.

    Bonus: do it with one loop and no nested loops
*/

// 2nd largest is 2nd
const nums1 = [2, 3, 1, 4];
const expected1 = 3;

// largest is first
const nums2 = [4, 1, 3, 2];
const expected2 = 3;

// largest duplicated first
const nums3 = [4, 4, 4, 1, 3, 2];
const expected3 = 3;

// 2nd largest is first
const nums4 = [3, 1, 4, 2];
const expected4 = 3;

// largest is 2nd
const nums5 = [3, 4, 2, 1];
const expected5 = 3;

const nums6 = [3, 3];
const expected6 = null;

const nums7 = [2];
const expected7 = null;

const nums8 = [];
const expected8 = null;

// JSDOCS
/**
 * Finds the second largest int from the given array and returns it or null.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {?number} The second largest int from the given array or null.
 *    The ? in front means it's nullable.
 */
function secondLargest(nums = []) {
    // declare variables
    //checks to see if there is at least 2 elements
    if (nums.length < 2){
        return null;
    }
    // initialize two variables largest and second largest
    var largest = nums[0];
    var secondLargest = null;
    //loop through the array
    for (let i = 0; i < nums.length; i++){
        //finding the second largest element
        if (nums[i] > largest){
            secondLargest = largest;
            largest = nums[i];
        }
        //checking to see if largest and 2nd largest are unique
        if (nums[i] > secondLargest && nums[i] != largest){
            secondLargest = nums[i];
        }
    }
    return secondLargest
}
console.log(secondLargest(nums1));
console.log(secondLargest(nums2));
console.log(secondLargest(nums3));
console.log(secondLargest(nums4));
console.log(secondLargest(nums5));
console.log(secondLargest(nums6));
console.log(secondLargest(nums7));
console.log(secondLargest(nums8));