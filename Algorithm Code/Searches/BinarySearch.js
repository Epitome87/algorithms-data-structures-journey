let countBinarySearch = 0;

function BinarySearch(array, target, start = 0, end = array.length) {
  while (start <= end) {
    countBinarySearch++;
    let mid = Math.floor((start + end) / 2);

    if (array[mid] === target) return mid;
    if (target < array[mid]) end = mid - 1;
    else start = mid + 1;
  }

  return -1;
}

const sortedArray = [
  2, 5, 10, 12, 15, 17, 19, 20, 28, 31, 32, 34, 36, 37, 39, 43, 45, 47, 53, 59,
  65, 70, 75, 79, 81, 84, 89, 90, 93, 95, 100, 103, 113, 117, 123, 124, 128,
  130, 136, 140, 146, 149, 161, 166, 167, 174, 178, 181, 182, 184,
];

let target = 28;
console.log('Binary Search  - Index: ', BinarySearch(sortedArray, target));
console.log('               - Count : ', countBinarySearch);
