/*
TODO: I always seeem to compare array[j + 1] < array[j] rather than the corret array[j] < array[j-1]
TODO: I also always seem to miss the else { break }

mark first element as sorted

for each unsorted element X

  'extract' the element X

  for j = lastSortedIndex down to 0

    if current element j > X

      move sorted element to the right by 1

    break loop and insert X here


    
Insertion sort is similiar to how you would sort a hand of playing cards
You start with one card and put it in your sorted pile
You then start with the first card of the unsorted pile, pick it up
and keep moving it towards the front of the sorted pile, dropping it in the
appropriate place (untl the card to the left of it is less than it, or we reach "end" (index 0) of sorted pile)
*/

let iterations1 = 0;
let swapCount1 = 0;
function InsertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i + 1;
    while (j >= 0) {
      iterations1++;
      if (arr[j] < arr[j - 1]) {
        // Move left via swap
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
        swapCount1++;
      }
      j--;
    }
  }

  return arr;
}

const testData = [
  100, 146, 97, 63, 91, 43, 33, 4, 194, 68, 163, 101, 65, 8, 184, 148, 20, 169,
  80, 200, 47, 66, 132, 162, 59, 120, 102, 62, 165, 185, 69, 6, 95, 112, 56,
  167, 12, 166, 40, 94, 105, 92, 81, 49, 74, 189,
];
console.log('Insertion Sort 1: ', InsertionSort([...testData]));
console.log('Swap Count 1: ', swapCount1);
console.log('Iterations 1', iterations1);

let iterations2 = 0;
// Found online and also Colt seems to use this one
// Note: Colt declares the j in its for loop using "var", which makes it still accessible outside the for loop where it is needed
// This is an outdated approach, so we declare before the for loop.
const insertionSortAnother = (arr) => {
  const len = arr.length;

  // Outter loop keeps track of the number we're introducing / currently examining
  // It goes down the sorted list, comparing the latest number (arr[i] with the last one in sorted array
  for (let i = 1; i < len; i++) {
    let currentVal = arr[i];
    let j;

    // Inner loop iterates through the already sorted portion
    for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
      iterations2++;
    }
    arr[j + 1] = currentVal;
  }
  return arr;
};

console.log('Insertion Sort 2: ', insertionSortAnother([...testData]));
console.log('Iteration 2: ', iterations2);

// FOUND ONLINE:

function insertion(array) {
  // If we want the function "Pure" -- it won't mutate the array that we pass in
  const arr = array.slice();
  // or const arr = [...array];

  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      // Start at i (the current element in outter loop being examined) and compare it to the element before it (the largest sorted ele)
      if (arr[j] < arr[j - 1]) {
        // *IF* item in question is < the one before it, swap!
        const temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      } else break; // *ELSE* item in question is > than the one before it (which is already sorted), therefore current item must be in right spot now
      // NOTE: Break is NOT required for this to work. It will just exclude redundant searches through parts of the array that are already sorted, since
      // once we reach a point where our item is greater than the one before we've gone too far. Colt's avoids this in his inner for loop by
      // doing j >= 0 && arr[j] > currentVal.
    }
  }

  return arr;
}

/*
procedure insertionSort( A : array of items )
   int holePosition
   int valueToInsert
	
   for i = 1 to length(A) inclusive do:
	
      // select value to be inserted 
      valueToInsert = A[i]
      holePosition = i
      
      // locate hole position for the element to be inserted 
		
      while holePosition > 0 and A[holePosition-1] > valueToInsert do:
         A[holePosition] = A[holePosition-1]
         holePosition = holePosition -1
      end while
		
      // insert the number at hole position 
      A[holePosition] = valueToInsert
      
   end for
	
end procedure
*/

/*
for i = 1 to length(A)
    x = A[i]
    j = i - 1
    while j >= 0 and A[j] > x
        A[j+1] = A[j]
        j = j - 1
    end while
    A[j+1] = x
 end for 
 */

// If you prefer a while-loop!
/*Function to sort array using insertion sort
    void sort(int arr[])
    {
        int n = arr.length;
        for (int i=1; i<n; ++i)
        {
            int key = arr[i];
            int j = i-1;
            
            // Move elements of arr[0..i-1], that are greater than key, to one position ahead
            // of their current position 
            while (j>=0 && arr[j] > key)
            {
                arr[j+1] = arr[j];
                j = j-1;
            }
            arr[j+1] = key;
        }

*/
