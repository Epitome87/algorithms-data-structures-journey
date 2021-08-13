/*
Using Sliding Window Pattern: O(N)!
Basically, instead of recalculating n amount of numbers each time,
we create a "slider" by keeping track of our maxSum, adding the next element (arr[i])
we wish to visit, and subtracted the element that is no longer in our n-range (arr[i-n])
If new sum is greater than our current max sum, set it as the max sum.
*/
function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;

  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

/*
Naive solution! Nested looping
*/
function maxSubarraySum(arr, num) {
  if (num > arr.length) return null;

  let max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}
