/*


do

  swapped = false

  for i = 1 to indexOfLastUnsortedElement-1

    if leftElement > rightElement

      swap(leftElement, rightElement)

      swapped = true

while swapped

*/

const data = [
  -110, -100, -99, -98, -97, -96, -95, 5, 1, 2, 10, 4, 5, -1, 87, 45, -34, 57,
];
// Results: My original: 170 iters, Colt's original: 153. Colt's second: 125
/*
Explanation: Colt's original solution already began with NOT needlessly searching the end of the array where elements are already sorted.
My original one solution I was taught was always inner-looping through the entire array length ==> BAD!
Colt's revision -- he used a flag to indicate if a swap was made (much like my original one was using -- but I misunderstood why it used this)
Using the flag saves us a lot of iterations for arrays that are already nearly sorted, as you won't keep making needless inner-loop iterations
where no swaps occur (since we know if no swap occured, the array must already be sorted)
For example: [8,1,2,3,4,5,6,7,9] if we don't use a flag, even though on the very first pass 8 is propertly bubbled into place near the end,
we will keep iterating for the remaining elements of the array in the outter loop, even though they are already ordered!
*/

function swap(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

function BubbleSort(array) {
  const length = array.length;

  let hasSwapped = true;

  while (hasSwapped) {
    hasSwapped = false;
    for (let i = 0; i < length - 1; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        hasSwapped = true;
      }
    }
  }

  return array;
}

const testData = [55, 31, 38, 5, 2, 9, 7, 84, 49, 10];
console.log('Bubble Sort: ', BubbleSort(testData));

// Colt's 1st implementation
// This way is better because we don't needlessly check the end of the array where
// the elements are already sorted.
// BEST CASE: O(N) for nearly assorted arrays.
// AVERAGE CASE: O(N^2)
function BubbleSort_Colt1(array) {
  const length = array.length;

  // Note: I'm confused why this works without i needing to be length MINUS 1
  for (let i = length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
  }

  return array;
}

// WHAT TO REMEMBER: i starts at length. until j < i - 1, use flag to short-circuit
function BubbleSort_Colt2__BEST(array) {
  const length = array.length;

  let noSwaps;

  // Note: I'm confused why this works without i needing to be length MINUS 1
  for (let i = length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }

  return array;
}
