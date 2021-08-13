/*
Notes:  
* Level 1: O(N^2) Sorts:
    1) Bubble Sort: N^2 comparison, N^2 swaps. In-place O(1) space, "stable" (doesn't alter order of equivalent elements)
    2) Selection Sort: N^2 comparisons, N swaps. In-place O(1) space, not stable
    3) Insertion Sort: N^2 comparisons, N^ swaps (but typically faster than other two). In-place O(1) space, stable, quick for small lists, can accompodate more items as it receives them.

* Level 2: O(N log N) Sorts:
    1) Merge Sort: Avg O(NLogN), Stable. Downside: Space complexity of O(N)
    2) QuickSort: Avg O(NLogN), worst: O(N^2). Space Complexity: O(LogN), not stable usually
    3) Heapsort: Avg O(NLogN), (similar to Selection Sort, but keeps unsorted section as a heap), 
        slower than quicksort, Space complexity: O(1), not stable (arbitrary rearrangement of elements to maintain the heap)
* Level 3: Hybrid Algorithms
    * Typically used in standard libraries (but not in Javascript's?)
    1) Timsort
    2) Introsort
*/

const TEST_ARRAY = [
  5, 6, 1, 220, 3, 8, 7, 15, 14, 155, 0, 400, 350, 43, 98, 97, 3, 101, -5, 874,
  -8, 207, -158, -180,
];

let bubbleSortSwaps = 0;
let bubbleSortIters = 0;
// Bubble Sort: This is ideal solution?
// NOTE: YOU KEEP MESSING UP THE FLAG RESET -- DO NOT PUT IT IN THE FOR LOOP -- IT GOES OUTSIDE
function bubbleSort(arr) {
  let hasSwapBeenMade = false;

  do {
    hasSwapBeenMade = false;
    for (let i = 0; i < arr.length - 1; i++) {
      bubbleSortIters++;
      if (arr[i] > arr[i + 1]) {
        // Swap
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        hasSwapBeenMade = true;
        bubbleSortSwaps++;
      }
    }
  } while (hasSwapBeenMade);

  return arr;
}

const testArray = [...TEST_ARRAY];
console.log('Bubble Sort: ', bubbleSort(testArray));
console.log(
  'Bubble Sort - Swaps: ',
  bubbleSortSwaps,
  'Iters: ',
  bubbleSortIters
); // 45

// console.log(bubbleSort(testArray));

// Selection Sort
// Two methods: 1) with subarrays for unsorted and sorted -- keep
//              going until unsorted array is empty
//              2) Nested for loop, inner keeps starting at current outter
// NOT IDEAL since we use space for two sub arrays
function selectionSortWithSubs(arr) {
  const sortedArray = [];
  const unsortedArray = [...arr];

  // While there are items left in unsortedArray
  while (unsortedArray.length > 0) {
    // Find the smallest value in unsorted array
    let min = unsortedArray[0];
    let minIndex = 0;

    for (let i = 0; i < unsortedArray.length; i++) {
      if (unsortedArray[i] < min) {
        min = unsortedArray[i];
        minIndex = i;
      }
    }
    // Push this iteration's min value onto the end of sorted array
    sortedArray.push(min);

    // And remove that item from the unsorted array
    unsortedArray.splice(minIndex, 1);
  }

  return sortedArray;
}

// const selectionSortResult = selectionSortWithSubs(testArray);
// console.log(selectionSortResult);
let countIters = 0;
let count = 0;

// This seems to be the IDEAL way! Note the outer loop is arr.length - 1
function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      countIters++;
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // Don't swap if minIndex is i
    if (minIndex !== i) {
      //   let temp = arr[i];
      //   arr[i] = arr[minIndex];
      //   arr[minIndex] = temp;
      count++;

      //   OR: Swap in place with array destructoring!
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}

let wtfIters = 0;
let wtf = 0;

// NOT IDEAL -- WAY too many swaps
function selectionSortOther(arr) {
  //Loop till the second last element
  for (let i = 0; i < arr.length - 1; i++) {
    //Loop after the i till the last element
    for (let j = i + 1; j < arr.length; j++) {
      wtfIters++;
      //if jth element is less than the ith element then swap
      //change < to > for sorting in descending order
      if (arr[j] < arr[i]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        wtf++;
      }
    }
  }

  //return the sorted array
  return arr;
}

const data = [...TEST_ARRAY];
const moreData = [...TEST_ARRAY];
console.log('SelectionSort: ', selectionSort(data));
console.log('SelectionSortOther: ', selectionSortOther(moreData));
console.log('Selection Sort - Swaps: ', count, 'Iters: ', countIters); // 45
console.log('Selection Sort (Other) - Swaps: ', wtf, 'Iters Other: ', wtfIters);

// Sort alogorithms by descending speed (Random sortment)
// 1) Quick Sort. 2) Shell Sort. 3) Merge Sort. 4) Heap Sort. 5) Comb Sort. 6) Insertion Sort
// 7) Selection Sort. 8) Cocktail Sort. 9) Bubble Sort
// Sort algo by descending speed (when almost sorted):
// 1) Insertion Sort. 2) Cocktail. 3) Quick. 4) SHell. 5) Merrge Sort. 6) Comb Sort 7) Heap Sort
// 8) Bubble. 9) Selection

// Overall? QUICK??

// QuickSort:
// 1) Find the 'pivot" element in the array
// 2) Start the left pointer at first element of the array
// 3) Start the right pointer at last element of the array
// 4) Compare the element pointing with left pointer and if it's less than the pivot element
//  then move the left poitner to the right (add 1 to the left index). Continue this until left
//  side element is greater than or equal to the pivot element
// 5) Compare the element pointing with the right poitner and if it's greater than pivot element, then move
//  the right pointer to the left (subtract 1 to the right index). Continue this until right
//  side element is less than or equal to the pivot element
// 6) Check if left pointer is less than or equal to right pointer, then saw the elements in locations of these pointers
// 7) Increment the left pointer and decrement the right poitner
// 8) If index of left poitner is still less than the index of the right, then repeat the process; else return the index of the left pointer

const data = [58, 12, 18, 10, 35, 78, 64, 11, 16, 2, 74, 75, 29];

/*
TO DO: Figure out why this first insertion sort and second both work -- yet seem opposite!
I kinda did the second one myself.
*/
// Seems to be an ideal one. Boils down to while loop vs for loop
function insertionSort(arr) {
  let length = arr.length;

  for (let i = 1; i < length; i++) {
    // Choosing the first element in our unsortd subarray
    let current = arr[i];
    // The last element of our sorted subarray
    let j = i - 1;
    // Swap while we have not reached start of array or current is > arr[j]
    while (j >= 0 && current < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }

  return arr;
}

insertionSort([...data]);

// Seems to be a good one too, for loop instead of while
const insertionSortAnother = (arr) => {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    let el = arr[i];
    let j;

    for (j = i - 1; j >= 0 && arr[j] > el; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = el;
  }
  return arr;
};

// One I attempted: Seems to work but feels way different
function insertionSortOther(arr) {
  // Start with item at i = 0 (or maybe 1?)
  // Note value of item at i + 1
  // Move it leftward until it is sorted - swap along way

  for (let i = 0; i < arr.length; i++) {
    let j = i + 1;
    while (j >= 0) {
      if (arr[j] < arr[j - 1]) {
        // Move left via swap
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
      j--;
    }
  }

  return arr;
}

test([...data]);

/*
EXPLANATION: 
let inputArr = [5, 2, 4, 6, 1, 3];
First Iteration:

Sorted array: 5
Unsorted array: 2, 4, 6, 1, 3

The first element in our unsorted array is 2.
2 < 5, so we move 5 one place to the right.
Sorted array: _, 5

2 is placed in its right spot.
Second Iteration:

Sorted array: 2, 5
Unsorted array: 4, 6, 1, 3

The first element in our unsorted array is 4.
4 < 5, so we move 5 one place to the right.
Sorted array: 2, _, 5

4 !< 2, so we don't move 2.
4 is placed in its right spot.
Third Iteration:

Sorted array: 2, 4, 5
Unsorted array: 6, 1, 3

The first element in our unsorted array is 6.
6 !< 5, so we don't move 5.
Sorted array: 2, 4, 5

6 is placed in its right spot.
This is repeated until we're greeted with a sorted array: 1, 2, 3, 4, 5, 6
We can notice an invariant in each of these iterations. For the k-th iteration of our loop, the interval of [0,k] is guaranteed to be sorted.
*/

let quickSortSwaps = 0;

function swap(items, leftIndex, rightIndex) {
  let temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;

  quickSortSwaps++;
}

function partition(items, left, right) {
  let pivot = items[Math.floor((right + left) / 2)]; // Middle element
  let leftPointer = left;
  let rightPointer = right;

  while (leftPointer <= rightPointer) {
    while (items[leftPointer] < pivot) {
      leftPointer++;
    }

    while (items[rightPointer] > pivot) {
      rightPointer--;
    }

    if (leftPointer <= rightPointer) {
      swap(items, leftPointer, rightPointer);
      leftPointer++;
      rightPointer--;
    }
  }

  return leftPointer;
}

let quickSortIters = 0;

function quickSort(items, left, right) {
  quickSortIters++;

  let index;

  if (items.length > 1) {
    index = partition(items, left, right); // Index returned from partition

    if (left < index - 1) {
      // More elements on the left side of the pivot
      quickSort(items, left, index - 1);
    }

    if (index < right) {
      // More elements on the right side of pivot
      quickSort(items, index, right);
    }
  }

  return items;
}

const quickData = [
  5, 6, 1, 220, 3, 8, 7, 15, 14, 155, 0, 400, 350, 43, 98, 97, 3, 101, -5, 874,
  -8, 207, -158, -180,
];
const resultQuickData = quickSort(quickData, 0, quickData.length - 1);
console.log('QuickSort Results: ', resultQuickData);
console.log('QuickSort - Swaps: ', quickSortSwaps, 'Iters: ', quickSortIters); // 45

/*
Another QuickSort solution

const pivot = (arr, start = 0, end = arr.length + 1) => {
  const swap = (list, a, b) => [list[a], list[b]] = [list[b], list[a]];

  let pivot = arr[start],
      pointer = start;

  for (let i = start; i < arr.length; i++) {
    if (arr[i] < pivot  ) {
      pointer++;
      swap(arr, pointer, i);
    }
  };
  swap(arr, start, pointer);

  return pointer;
}

const quickSort = (arr, start = 0, end = arr.length) => {
  let pivotIndex = pivot(arr, start, end);

  if (start >= end) return arr;
  quickSort(arr, start, pivotIndex);
  quickSort(arr, pivotIndex + 1, end);

  return arr;
};

*/
