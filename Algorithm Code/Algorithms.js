/*

LeetCode
Google Tech Dev Guide



Algo Expert Problems:

Easy: 25
Validate Subsequence
Two Number Sum
Sorted Squared Array
Tournament Winner
Non-Constructible Change
Find Closest Value in BST
Branch Sums
Node Depths
Depth-first Search
Minimum Waiting Time
Class Photos
Tandem Bicycle


Medium: 55
River Sizes
Three Number Sum
Smallest Difference
Move Element To End
Monotonic Array
Spiral Traverse
Longest Peak
Array of Products
First Duplicate Value
Merge Overlapping Intervals
BST Construction
Validate BST

Hard: 46
Shift Linked List
Four Number Sum
Subarray Sort
Largest Range
Min Rewards
Zigzag Traverse
Same  B STs
Validate Three Nodes
Max Path Sum In Binary Tree
Find Nodes Distance K
Max Sum Increasing Subsequence...
Longest Common Subsequence


Very Hard: 34
Max Profit With K Transa...
Apartment Hunting
Calender Matching
Waterfall Streams
Minimum Area Rectangle
Line Through Points
Right Smaller Than
Iterative In-Order Trav..
Flattern Binary Tree
Right Sibling Tree
All Kinds..

*/

/*
Validate Subsequence
    * Given two non-empty arrays of integer, function that determines
whether the second array is a subsequence of the first. A subsequence of an array is
a set of nubmers that aren't necessarily adjacent in the array but that are in the same order as they appear
in the array. For instance, [ 1, 2, 4] form a sub of the array [ 1, 2, 3, 4 ], and so do [2, 4].
Note that a single number in an array and that array itself are both valid subs of the array
*/

function isSubsequence(array, sequence) {
  let sequenceIndex = 0;
  let arrayIndex = 0;

  //   while (arrayIndex < array.length)
  while (arrayIndex < array.length && sequenceIndex < sequence.length) {
    if (array[arrayIndex] == sequence[sequenceIndex]) {
      sequenceIndex++;
      //   if (sequenceIndex == sequence.length) {
      //     return true;
      //   }
    }

    arrayIndex++;
  }

  //   return false;
  return sequenceIndex == sequence.length;
}

const arr = [1, 2, 3, 4];
const sequence1 = [1, 3, 4];
const sequence2 = [2, 4];
isSubsequence(arr, sequence1);
isSubsequence(arr, sequence2);

/*
LeetCode
Trapping Rain Water

Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

 

Example 1:


Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. 
In this case, 6 ununits of rain water (blue section) are being trapped.

Example 2:

Input: height = [4,2,0,3,2,5]
Output: 9
 

Constraints:

n == height.length
0 <= n <= 3 * 104
0 <= height[i] <= 105


// MY THOUGHT PROCESS:
Rain can only collect if the left and right side of an element have height
Rain can only collect up to the shorter of the sides

So, for each element in the elevation map...
1) Check if neighbor's height > 0
2) Grab the shorter of those two neighbors' heights
*/

/**
 * @param {number[]} height
 * @return {number}
 */
function trap(height) {
  // If invalid height or empty array, no rain collected
  if (height === null || height.length === 0) return 0;

  let result = 0;
  let level = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    let lower = height[height[left] < height[right] ? left++ : right--];
    level = Math.max(level, lower);
    result += level - lower;
  }

  return result;
  // Time: O(N)
  // Space: O(1)
}

let input = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
let output = trap(input); // Expects 6

// Another solution -- not as fast
// Source: https://www.youtube.com/watch?v=ZI2z5pq0TqA
function trapAlternative(height) {
  if (height === null || height.length === 0) return 0;

  let left = 0;
  let right = height.length - 1;
  let leftMax = height[left];
  let rightMax = height[right];
  let result = 0;

  while (left < right) {
    if (leftMax < rightMax) {
      left++;
      leftMax = Math.max(leftMax, height[left]);
      result += leftMax - height[left];
    } else {
      right--;
      rightMax = Math.max(rightMax, height[right]);
      result += rightMax - height[right];
    }
  }

  return result;
}

let outputOther = trap(input);

function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let value1 = nums[i];

    for (let j = i + 1; j < nums.length; j++) {
      if (value1 + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

const nums1 = [2, 7, 11, 15];
const target1 = 9;
twoSum(nums1, target1);

const nums2 = [3, 2, 4];
const target2 = 6;
twoSum(nums2, target2);

const nums3 = [3, 3];
const target3 = 6;
twoSum(nums3, target3);

// Better way: With hash tables
// function twoSumHash(nums, target) {
//     Map<Integer, Integer> map = new HashMap<>();
//         for (int i = 0; i < nums.length; i++) {
//             map.put(nums[i], i);
//         }
//         for (int i = 0; i < nums.length; i++) {
//             int complement = target - nums[i];
//             if (map.containsKey(complement) && map.get(complement) != i) {
//                 return new int[] { i, map.get(complement) };
//             }
//         }
//         // In case there is no solution, we'll just return null
//         return null;
//     }

/*
LeetCode;
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
Example 4:

Input: x = 0
Output: 0
 

Constraints:

-231 <= x <= 231 - 1


DECISION: DEFINITELY LOOK MORE INTO THIS!!!!
*/
function reverseInteger(x) {
  let isNegative = false;
  if (x < 0) {
    isNegative = true;
    x = -x;
  }

  let reverse = 0;
  while (x > 0) {
    reverse = reverse * 10 + (x % 10);
    x = parseInt(x / 10);
  }
  if (reverse >= Math.pow(2, 31) - 1 || reverse < Math.pow(-2, 31)) {
    return 0;
  }

  return isNegative ? -reverse : reverse;
}

const num1 = 123;
const num2 = -123;
const num3 = 120;
const num4 = 0;

reverseInteger(num1); // Expect: 321
reverseInteger(num2); // Expect: -321
reverseInteger(num3); // Expect: 21
reverseInteger(num4); // Expect: 0

/*
Remove Duplicates


Good solution? 
var removeDuplicates = function(nums) {
    nums.splice(0, nums.length, ...(new Set(nums)));
};

Another good?
var removeDuplicates = function(nums) {
    let i = 0;
    for(let j = 1; j < nums.length; j++){
        if(nums[i] != nums[j]){
            i++;
            nums[i]=nums[j];
        }
    }
    return i+1;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // Index we should place the new number at (if it's unique)
  let index = 1; // Start at 1 because first element (0) is always unique

  // From the start of the array until the second to last element (as we look-ahead
  // by one element in our loop)...
  for (let i = 0; i < nums.length - 1; i++) {
    // If the 2 adjacent numbers are NOT the same...
    if (nums[i] !== nums[i + 1]) {
      // Place the NEXT number at our current tracked index
      nums[index] = nums[i + 1];
      // And increment our index
      index++;
    }
    // If the 2 adjacent numbers ARE the same...
    // The for loop increments without setting any values
    // and without incrementing our tracked index.
  }

  // Index also stores the length of this non-duplicate array
  return index;

  // nums now has elements from nums[0] to nums[index - 1] that are non-duplicates
  // It still however holds duplicate values from nums[index] and onward; we ignore them for this challenge
};

// Count how many times each character in a string occurs
// Only alpha-numeric
function charCount(str) {
  // Create an (empty?) object
  const result = {};

  // Since case does not matter, lowercase the entire string before further processing
  str = str.toLowerCase();

  // Iterate over each character in the string...
  for (let char of str) {
    // If not valid character...
    if (!/[a-z0-9]/.test(char)) continue;

    // Faster alternative
    // let code = char.charCodeAt(0);
    // if (!(code > 47 && code < 58) && // numeric 0-9
    //     !(code > 64 && code < 91) && // upper alpha (A-Z)
    //     !(code > 96 && code < 123)) { continue; }

    // If character is not already a key in the object, make it one and set to 1
    // if (!obj.hasOwnProperty(str[i])) {
    if (!result[char] > 0) {
      result[char] = 1;
    }
    // Else if char is already a key in the objtect, increment its value by 1
    else {
      result[char] += 1;
    }

    // Else not valid character, do not add to resultect
  }

  // Return the resultect at end
  return result;
}

charCount("Matthew McGrath! 420. 6$'9");

// 55% slower than the method below
function isAlphaNumeric(str) {
  return /^[a-zZ-Z0-9]+$/.test(str);
}

// Faster than regular expression method
function isAlphaNumeric(str) {
  let code;

  for (let i = 0, length = str.length; i < length; i++) {
    code = str.charCodeAt(i);
    if (
      !(code > 47 && code < 58) && // numeric 0-9
      !(code > 64 && code < 91) && // upper alpha (A-Z)
      !(code > 96 && code < 123)
    ) {
      return false;
    }
  }
  return true;
}

// Write a function called same, which accepts 2 arrays.
// The function should return true if every value in the
// array has its corresponding value squared in the second array.
// The frequency of values must be the same.
// Examples:
// same([1,2,3], [4,1,9])   // true
// same([1,2,3], [1,9])     // false
// same([1,2,1], [4,4,1])   // false (not same frequency)

// O(N^2) method: Nested loops
function sameMeh(array1, array2) {
  if (array1.length !== array2.length) return false;
  for (let i = 0; i < array1.length; i++) {
    let squaredValue = array1[i] * array1[i];
    let wasSquareFound = false;
    for (let j = 0; j < array2.length; j++) {
      if (array2[j] === squaredValue) {
        // Found
        wasSquareFound = true;
        // Remove this item from future checking
        array2.splice(j, 1);
      }
    }

    if (wasSquareFound === false) return false;
  }

  return true;
}
sameMeh([3, 6], [9, 36]);

// O(N^2) Nested loops (technically 1 loop, but indexOf is itself looping)
// Better than above due to shortness
function same(arr1, arr2) {
  // If the arrays aren't even same size, 2nd one must not hold all squares
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] * arr1[i]);
    if (correctIndex === -1) return false;
    // Remove this found value from the array (solves frequency cases)
    arr2.splice(correctIndex, 1);
  }

  return true;
}

// Refactored with the "Frequency Coutner Pattern" in mind!
// O(N)! 3 seperate loops (not nested) is faster!
// Doesn't matter how many items are in object, it's O(1) to access object data!
function sameBest(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }

  return true;
}

sameBest([2, 4, 3], [16, 4, 9]);

// EVEN BETTTERRRR! Refactor to use only one object
function sameBESTEST(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  const frequencyCounter = {};

  for (let val of arr1) {
    let square = val * val;
    frequencyCounter[square] = (frequencyCounter[val] || 0) + 1;
  }

  // Iterate through the second array
  for (let item of arr2) {
    // Key must exist
    if (!frequencyCounter[item]) return false;

    // Decrement the key
    // let updatedFrequency = frequencyCounter[item] -= 1;
    frequencyCounter[item] -= 1;
    let updatedFrequency = frequencyCounter[item];

    // Make sure the value is greater than zero

    if (updatedFrequency < 0) return false;
  }

  return true;
}

sameBESTEST([2, 4, 1, 4], [1, 4, 16, 1]);

// frequencyCounter1 looks like: { 1: 1, 2: 2, 3: 1}
// FrequencyCoutner2 looks like:             { 1: 1, 4: 2, 9: 1}

/* */

/* 
Anagrams:
Given 2 strings, write function to determine if
the second string is anagram of first.
Anagram is a word, phrase, or name form by rearranging
the letters of another, such as cinema, formed from
iceman
*/

// Using Frequency Counter Pattern O(N) MY ATTEMPT
// NOTE: I always miss the trivial case of comparing the length's at the start!
function isValidAnagram(str1, str2) {
  // Forgot to do this!
  if (str1.length !== str2.length) return false;

  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  for (let char of str1) {
    if (frequencyCounter1[char]) {
      frequencyCounter1[char] += 1;
    } else {
      frequencyCounter1[char] = 1;
    }
  }

  for (let char of str2) {
    if (frequencyCounter2[char]) {
      frequencyCounter2[char] += 1;
    } else {
      frequencyCounter2[char] = 1;
    }
  }

  for (let key in frequencyCounter1) {
    console.log(key);
    // Is that key also in counter2?
    if (!frequencyCounter2[key]) return false;
    // If so, is the frequency (val) the same?
    if (frequencyCounter2[key] != frequencyCounter1[key]) return false;
  }

  return true;
}

isValidAnagram('ahewtmt', 'matthew');

// Colt's solution
function isValidAnagram(first, second) {
  if (first.length !== second.length) return false;

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // If letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // Can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) return false;
    // Otherwise, we found the letter, so subtract 1 from its frequency (so we know how many more we still need to find)
    else lookup[letter] -= 1;

    // Explanation for decrementing the frequency:
    // If we encounter a 0, it means we get a char in 2nd str that dididn't exist in 1st str
    // Example: if we have "anagrams", "nagaramm" (instead of "anagram" and "nagaram"),
    // when we reach the s in first str, all our keys have value of 0 except s:1
    // When we run the code to check the extra m at end of 2nd str, we  run: if (!lookup["m"])
    // Since lookup["m"] is falsey (it's 0), we return false
  }

  return true;
}

/*
Given a non-negative integer x, compute and return the square root of x.

Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.

Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.

/*Returns the square root of n. Note that the function */
function squareRoot(n) {
  /*We are using n itself as initial approximation
   This can definitely be improved */
  let x = n;
  let y = 1;
  let e = 0.000001; /* e decides the accuracy level*/
  while (x - y > e) {
    x = (x + y) / 2;
    y = n / x;
  }
  return x;
}

/*
        # approach: Newton's method for root-finding

        result = x
        while not result * result - x < 1:
            result = (result + x / result) / 2

        return int(result)
*/

/**
 * Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// MY RETARDED FAILED ATTEMPT
var removeElement = function (nums, val) {
  let currentIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      currentIndex++;
    } else {
      nums[currentIndex] = nums[i];
    }
  }

  return currentIndex;
};

// ACTUAL GOOD ANSWER: Faster than 79.65%, but only less memory than 12.38%?!
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  // Counter for keeping track of elements other than val
  let count = 0;
  // Loop through all the elements of the array
  for (let i = 0; i < nums.length; i++) {
    // If the element is not val
    if (nums[i] !== val) {
      nums[count++] = nums[i];
    }
  }
  return count;
};

/*


var removeElement = function(nums, val) {
  // We increment this counter every time we come across an item we want to keep
  let count = 0;
  
  for (let i = 0; i < nums.length; i++) {
      i;
    // Only increment our counter if the element is not val
    if (nums[i] !== val) {
        nums[count] = nums[i];
        count++;
    }
    i;
    nums;
    nums[i];
    console.log("i: ", i, "Nums: ", nums);
  }
    
  return count;
};

const data = [4,2,3,5,3,6];
removeElement(data, 3);
data;

i:  0 Nums i:  4 Nums:  [ 4, 2, 3, 5, 3, 6 ]
i:  1 Nums i:  2 Nums:  [ 4, 2, 3, 5, 3, 6 ]
i:  2 Nums i:  3 Nums:  [ 4, 2, 3, 5, 3, 6 ]    // Here we find our 1st occurence of valu to remove
i:  3 Nums i:  5 Nums:  [ 4, 2, 5, 5, 3, 6 ]    // First change -- note it happened on next iteration after finding it
i:  4 Nums i:  3 Nums:  [ 4, 2, 5, 5, 3, 6 ]    // No change
i:  5 Nums i:  6 Nums:  [ 4, 2, 5, 6, 3, 6 ]    // Change occured -- again one iteration after first noting val was found
[ 4, 2, 5, 6, 3, 6 ]

Basically: We need our own index tracker (other than i) because when we find a target value to remove, we wish to have it overwriten
// with the next value. To ensure an overwrite, we increment our own index tracker every time there is a value we DONT want to remove (ensuring it remains),
// so when we find a target value and don't increment our index tracker, the next loop we'll be 1 index behind (or n behind, n being how many targets we've foudn so far)
*/
