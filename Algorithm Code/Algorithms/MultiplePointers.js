/*
This file contains algorithms that utilize the "Multiple Pointers" pattern.
*/

/*
sumZero:
Write a function called sumZero which accepts a SORTED array of integers. The function should find the first pair
where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair doesn't exist

Ex:
sumZero([-3,-2,-1,0,1,2,3])     // [-3, 3]
sumZero([-2,0,1,3])             // Undefined
sumZero([1,2,3])                // Undefined
*/

const sumZero_data = [
  -491, -468, -454, -453, -447, -440, -439, -434, -432, -429, -396, -377, -376,
  -355, -343, -322, -320, -309, -298, -261, -254, -248, -235, -224, -204, -194,
  -179, -174, -163, -157, -153, -143, -118, -109, -92, -79, -68, -64, -63, -53,
  -50, -47, -42, -41, -36, -27, -24, -20, -19, 11, 15, 16, 22, 27, 29, 41, 51,
  70, 76, 85, 86, 91, 107, 110, 117, 126, 128, 131, 149, 176, 177, 194, 212,
  214, 225, 226, 234, 252, 272, 284, 288, 294, 308, 315, 316, 320, 326, 329,
  339, 345, 369, 387, 409, 419, 436, 438, 440, 462, 475, 481,
];

// My SECOND attempt: After realizing it's SORTED, we can use the properties of
// a sorted array
// Things to note: We could probably stop once elements are > 0
let count2 = 0;
function sumZero_2nd(arr) {
  for (let i = 0; i < arr.length; i++) {
    // If we reach this point and found no pairs, return undefined
    if (arr[i] > 0) return undefined;

    for (let j = i + 1; j < arr.length; j++) {
      count2++;
      if (arr[i] + arr[j] === 0) return [arr[i], arr[j]];
    }
  }
}

sumZero_2nd([...sumZero_data]); // Undefined
count2;

let count = 0;
// Time O(N)
function sumZero(arr) {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;

  let sum = null;

  // While the pointers haven't crossed over
  while (leftPointer < rightPointer) {
    count++;
    sum = arr[leftPointer] + arr[rightPointer];
    if (sum === 0) return [arr[leftPointer], arr[rightPointer]];
    if (sum < 0) rightPointer--;
    else leftPointer++;
  }
}

// sumZero([-3,-2,-1,0,1,2,3])     // [-3, 3]
sumZero([-6, -4, -2, 0, 1, 3, 8, 10]); // Undefined
console.log('GOOD RAN: ', count);
count;

// My first attempt: WORKS! O(N^2) though
let count1 = 0;
function sumZero_BAD(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      count1++;
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}
// sumZero([-3,-2,-1,0,1,2,3])     // [-3, 3]
// count1;
sumZero_BAD([-6, -4, -2, 0, 1, 3, 8, 10]); // Undefined
console.log('BAD RAN: ', count1);

/**
 * Given an array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number.

Return the indices of the two numbers (1-indexed) as an integer array answer of size 2, where 1 <= answer[0] < answer[1] <= numbers.length.

The tests are generated such that there is exactly one solution. You may not use the same element twice.
Example 1:

Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.
Example 2:

Input: numbers = [2,3,4], target = 6
Output: [1,3]
Example 3:

Input: numbers = [-1,0], target = -1
Output: [1,2]
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let leftPointer = 0;
  let rightPointer = numbers.length - 1;

  while (leftPointer < rightPointer) {
    let sum = numbers[leftPointer] + numbers[rightPointer];
    if (sum === target) return [leftPointer + 1, rightPointer + 1];
    if (sum < target) leftPointer++;
    else rightPointer--;
  }
};

/*
countUniqueValues
Implement a function which accepts a sorted array,
and counts the unique values in the array. There
can be negative numbers in array, but it will always
be sorted.

Ex:
countUniqueValues([1,1,1,1,1,1, 2]);	// 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,12]); // 7
countUniqueValues([-2-1,-1,0,1]);	// 4
*/

// First attempt when given told the algo -- got right!!!
// Although I forgot to return i + 1 (just i) until I recognized it was always off by 1
function countUniqueValues(arr) {
  if (arr.length < 2) return arr.length;
  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      arr[++i] = arr[j];
    }
  }

  return i + 1;
}

const data = [-2, -2, -1, 3, 4, 6, 6, 8, 9, 12, 12];

const results = [];
results.push(countUniqueValues(data));
console.log(data);
results.push(countUniqueValues([]));
results.push(countUniqueValues([5]));
results.push(countUniqueValues([-1, -1, 0, 1, 2, 2, 3]));

for (let result of results) console.log(result);
