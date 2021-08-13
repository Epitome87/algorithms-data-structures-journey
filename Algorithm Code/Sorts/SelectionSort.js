/*
repeat (numOfElements - 1) times

  set the first unsorted element as the minimum

  for each of the unsorted elements

    if element < currentMinimum

      set element as new minimum

  swap minimum with first unsorted position
*/



function SelectionSort(array) {
  const length = array.length;

  for (let i = 0; i < length - 1; i++) {
    let minIndex = i;

    for (let j = i; j < length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    let temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;
  }

  return array;
}

const testData = [55, 31, 38, 5, 2, 9, 7, 84, 49, 10];
console.log('Selection Sort: ', SelectionSort(testData));

const data = [5, -3, 1, 10, 4, 2, -5, 14, 18, 12];

// Colt's First Algo
// Issue: Especially at beginning and end, a needless swap occurs when the minIndex IS i -- so it swaps with itself
// This is most prominent if beginning of array contains a lot of the already-sorted values right away
// We fixed this by introducing if (min !== i)
function swap(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

let count = 0;

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) swap(arr, min, i);
  }

  return arr;
}

console.log(selectionSort([...data]));
