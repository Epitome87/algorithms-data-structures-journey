/*

for each (unsorted) partition

set first element as pivot

  storeIndex = pivotIndex + 1

  for i = pivotIndex + 1 to rightmostIndex

    if element[i] < element[pivot]

      swap(i, storeIndex); storeIndex++

  swap(pivot, storeIndex - 1)

*/

function pivot(array, start = 0, end = array.length - 1) {
  let pivotValue = array[start];
  let pivotIndex = start;

  for (let i = start + 1; i < array.length; i++) {
    if (pivotValue > array[i]) {
      pivotIndex++;
      swap(array, i, pivotIndex);
    }
  }
  swap(array, start, pivotIndex);

  return pivotIndex;
}

function quickSort(array, start = 0, end = array.length - 1) {
  if (start < end) {
    let pivot = pivot(array, start, end);
    quickSort(array, start, pivot - 1);
    quickSort(array, pivot + 1, end);
  }
  return array;
}
