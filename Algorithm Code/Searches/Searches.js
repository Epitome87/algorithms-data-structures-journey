let binaryCount = 0;

// Binary Search
// IDEAL if you must use recursion
function binarySearch(arr, target, start = 0, end = arr.length - 1) {
  binaryCount++;
  // Base case
  if (start > end) return -1;

  const mid = Math.floor((start + end) / 2);

  if (arr[mid] === target) return mid;

  if (target < arr[mid]) end = mid - 1;
  else start = mid + 1;

  return binarySearch(arr, target, start, end);
}

const binaryData = [3, 5, 7, 11, 13, 17, 19, 23];
console.log(
  'Binary Search: ',
  'index: ',
  binarySearch(binaryData, 23),
  'Count: ',
  binaryCount
);

let binaryCountIterative = 0;
function binarySearchIterative(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    binaryCountIterative++;
    // Alter the start and end appropriately
    let mid = Math.floor((start + end) / 2);

    // Determine if the midpoint is our target
    if (arr[mid] === target) return mid;

    if (target < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return -1;
}

const binaryDataIterative = [3, 5, 7, 11, 13, 17, 19, 23];
console.log(
  'Binary Search Iterative - ',
  'Index Found: ',
  binarySearchIterative(binaryDataIterative, 23),
  'Count: ',
  binaryCountIterative
);
