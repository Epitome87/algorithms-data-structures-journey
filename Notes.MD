# Data Structures & Algorithms Masterclass - By Colt Steel

## Section 2: Big O Notation

- For a clever "Add up to n numbers" algorithm: return n \* (n + 1) / 2
- Things like assignments to variables, addition, subtraction, multiplication, modulo, increment, decrement, comparisons, etc are all "operations" that we can count to measure potential performance. Exact number doesn't matter! Just how the number of operations scales with n.
- Big O Notation is a way to formalize fuzzy counting. It allows us to talk formally about how the runtime of an algorithm grows as the input grows. Technically: We say that an algorithm is O(f(n)) if the number of simple operations the computer has to do is eventually less than a constant times f(n), as n increases. Example: f(n) could be linear (f(n) = n) or f(n) could be quadratic (f(n) = n^2) or f(n) could be constant (f(n) = 1) etc. Above is read like "there's a function of input of n and it's output is <n, n^2, constant, etc>
- Constants Don't Matter! O(4n) is just O(n). Smaller Terms Don't Matter! O(n + 300) is just O(n). O(n^2 + 5n + 8) is just O(n^2)
- Big O Shorthands: 1) Arithmetic operations are constant. 2) Variable assignment is constant. 3) Accessing elements in an array (by index) or object (by key) is constant. 4) In a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop.
- Space Complexity: Sometimes you'll hear the term **auxiliary space complexity** to refer to space required by the algorithm, NOT including space taken up by the inputs. We don't care about how the input itself grows -- only the repercussions of it inside the algorithm. We assume one is typically talking about auxiliary space, unless mentioned otherwise.
- Space Complexity: Most primitives (booleans, numbers, undefined, null) are constant space. Strings require O(n) space (where n is the string length). Reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects).
- Logarithm: When we see Log2(8) = 3, we are asking: "2, to what power, is equal to 8? The answer is 3!"). Log2(value) = exponent => 2^exponent = value
- Logarithm: Most common bases are 2 (binary) and 10, and sometimes E. We care only about the big picture, so we omit the base.
- Logarithm: Rule of Thumb: The logarithm of a number roughly measures the number of times you can divide that number by 2 **before you get a value that's less than or equal to one**
- Logarithm: Why Care? Certain searching algorithms have lg time complexity. Efficient sorting algorithms involve logs. Recursion sometimes involves logarithmic space complexity.

## Section 3: Analyzing Performance of Arrays & Objects

- Objects: When To Use: 1) You don't need order. 2) You want fast access / insertion and removal. Insertion: O(1). Removal: O(1). Searching: O(N). Access / Change: O(1)
- Objects: Behind the scenes (hash maps)
- Objects: By "searching" we don't mean looking for a key; we mean checking if a given piece of information is in a value somewhere. That is, if we ask "does the value of "Matthew" exist for any key in the object?". We have to search every key and retrieve its value.
- Objects: Methods: 1) Object.keys = O(N). 2) Object.values = O(N). Object.entries = O(N). hasOwnProperty = O(1). Example: student.hasOwnProperty("firstName") (returns true or false), constant because if we are able to access the value of a key in constant time, we should also be able to access if a key exist in the same amount of time!
- Arrays: When To Use: 1) You need order. 2) When you need fast access / insertion and removal (sort of...)
- Arrays: Big O of Arrays: 1) Insertion - it depends... 2) Removal - it depends... 3) Searching - O(N). Access - O(1).
- Arrays: Inserting at beginning of array = O(N), we have to shift each element over to accommodate the new indices. Inserting at the end of array = O(1), there is no extra adjustments needed. Removing at beginning of array = O(N), we have to re-index, just the opposite direction of Insert. Searching: The fastest we can do is O(N): If we have an Array of 1,000 elements and I want to know if "Matthew" is in there, we have to potentially check all 1,000 elements until we finally find it!
- Arrays: Methods: Push / Pop: O(1). Shift / Unshift: O(N). Concat, Slice, Splice: O(N). Sort: O(N \* log N). forEach / Map / Filter / Reducer / etc: O(N)
- Arrays: Concat: Technically O(N + M), the size of Array 1 and the size of Array 2. But O(N) is fine. Expresses the fact that as these arrays grow that you're merging, so is the time that it's going to take, grows in proportional with the size of the total size of the new array at end.

## Section 4: Problem-Solving Approach

- Algorithm: A process or set of steps to accomplish a certain task.
- How to improve? 1) Device a plan for solving problems. 2) Master common problem solving patterns. This section covers approaches for problem solving.
- Problem Solving Steps: 1) Understand the Problem. 2) Explore Concrete Examples. 3) Break It Down. 4) Solve / Simplify. 5) Look Back & Refactor.
- 1. Understand The Problem - Ask yourself (or interviewer) this: 1) Can I restate the problem in my own words? 2) What are the inputs that go into the problem? 3) What are the outputs that should come from the solution to the problem? 4) Can the outputs be determined from the inputs? In other words, do I have enough info to solve the problem? (You may not be able to answer this question until you set about solving the problem. That's okay; it's still worth considering the question at this early stage.) 5) How should I label the important pieces of data that are a pat of the problem?
- 2. Explore Concrete Examples - Coming up with examples can help you understand the problem better. Examples also provide sanity checks that your eventual solution works how it should. (Unit Tests, User Stories). Write down a few simple examples. Progress to more complex examples. Explore examples with empty inputs. Explore examples with edge cases. Explore examples with invalid inputs (maybe not in interviews).
- 3. Break It Down - Take the actual steps of the problem and write it down. Doesn't have to be valid syntax or full pseudo code, just little comments serving as a guide. Communicate to the interviewer what steps you are going to try to take. You can throw in hints: "Does that sound like it'll work?". This forces you to think about the code you'll write before you write it, and helps you catch any lingering conceptual issues or misunderstandings before you dive in and have to worry about details (e.g. language syntax).
- 4. Solve / Simplify - Solve the problem, but if you can't...Solve a simpler problem! Ignore the part that's giving you a hard time -- focus on everything else. Instead of making zero progress, it's better to do the stuff you know how to do at least. While doing so, you may gain insight into the harder part of the problem. Simplification Steps: _ Find the core difficulty in what you're trying to do. _ Temporarily ignore that difficulty. _ Write a simplified solution. _ Then incorporate that difficulty back in (if you can).
- 5. Look Back & Refactor - Strive for achieving something beyond "the code works!" How's it read? How easy is it to understand? How efficient? Refactoring Questions - _ Can you check the result? _ Can you derive the result differently? _ Can you understand it at a glance? _ Can you use the result or method for some other problem?** \*Can you improve the performance of your solution?** _ Can you think of other ways to refactor? (Does it follow company guidelines, conventions of the language) _ How have other people solved this problem? Ask questions after about the most effective way to solve this (if interview) -- seem genuinely interested!
- CODE SNIPPET: Instead of if-else, consider: array[i] = ++array[i] || 1; This line is saying that if array[i] is truthy, increment it, otherwise set it to 1;

## Section 5: Problem Solving Patterns

- Step 2 of how do you improve -- Problem-solving patterns!
- Some Patterns... _ Frequency Counter. 2_ Multiple Pointers. _ Sliding Window. _ Divide & Conquer. _ Dynamic Programming. _ Greedy Algorithms. _ Backtracking. _ Many more!
- Frequency Counter Patterns: This pattern uses objects or sets to collect values/frequencies of values. This can often avoid the need for nested loops or O(N^2) operations w/ arrays/strings. Useful in algorithms when you have multiple pieces of data -- multiple inputs --and you need to compare them to see if they consist of similar values, if they are anagrams of one another, if a value is contained inside of another value. In particular if you need to see if they consist of the same individual pieces, if numbers consist of same digits just in different order.
- Multiple Pointers Pattern: Creating pointers or values that correspond to an index or position & move towards the beginning, end or middle based on certain conditions. Very efficient for solving problems with minimal space complexity as well. Usually have some linear structure, and we're searching for pair of values. Work towards each other, in same direction, etc.
- **EXTREMELY IMPORTANT** When we're passing Arrays (and objects?) into functions and then changing those arrays in the function, it changes the input array as well!
- Sliding Window Pattern: This pattern involves creating a **window** which can either be an array or number from one position to another. Depending on a certain condition, the window either increases or closes (and a new window is created). Very useful for keeping track of subset of data in an array/string etc. Useful for when we're looking for a subset of data that is continuous in some way.
- Sliding: Useful for longest sequence of unique characters, max subarray sum (max sum of n consecutive elements)
- Divide & Conquer Pattern: This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data. This pattern can tremendously decrease time complexity. Divide into smaller pieces, doing something to each smaller piece. Example: Binary Search.

## Section 6: Optional Challenges

## Section 7: Recursion

- What is recursion?
  A process (a function in our case) that calls itself.
- Why should I care?
  It's everywhere
  _ JSON.parse / JSON.stringy - often written recursively
  _ document.getElementById and DOM traversal algorithms
  _ Object traversal
  _ More complex data structures \* Sometimes cleaner alternative to iteration
- The Call Stack - Behind the Scenes
  Any time a function is involved, it's placed (pushed) on the top of the call stack
  When JS sees the return keyword or when function ends, the compiler will remove (pop)
- How Recursive Functions Work
  Invoke the same function w/ a different input until you reach your base case
  Base Case: the condition when the recursion ends
- Common Recursion Pitfalls
  - No base case, or incorrect base case
  - Forgetting to return, or returning the wrong thing
  - Can result in a Stack overflow -- too many calls on the stack!
- Helper Method Recursion - Common Pattern
  - Main outer function, with a function defined in it that calls itself recursively
  - Useful if we need to collect/build results up, which would otherwise be lost on each new call of recursive function
    function collectOdd(array) {
    let result = [];
    funciton helper(helpernput) {
    // Logic, push data into result, then call itself again
    }
    helper(arr);
    return result;
    }
    collectOdd(arrayData);
- Pure Recursion - No Helper Method, Self-contained
  function collectOdd(arr) {
  let newArr = [];
  if (arr.length === 0) return newArr;
  if (arr[0] % 2 !=== 0) newArr.push(arr[0]);
  newArr = newArr.concat(collectOdd(arr.slice(1)));
  return newArr;
  }
  - Pure Recursion Tips:
    - For arrays, use methods like slice, the spread operator, and concat that make copies of arrays so you do not mutate them
    - Remember that strings are immutable, so you'll need to use methods like slice, substr, or substring to make copies of strings
    - To make copies of objects, use Object.assign, or the spread operator

## Section 8: Optional - Recursion Problem Set

## Section 9: Optional - Challenging Recursion Problems

## Section 10: Searching Algorithms

- Objectives:
  - Describe what a searching algo is
  - Implement linear search on arrays
  - Implement binary search on sorted arrays
  - Implement a naive string searching algorithm
  - Implement the KMP string searching algorithm
- Linear Search:
  - Just look at every single element, in order, to see if it's what we want
    - Not necessarily bad - especially if data is unsorted
  - JavaScript has search! Behind the scenes, these functions are doing a linear search:
    - indexOf, includes, find, findIndex
  - Linear Search Psuedocode:
    - Function accepts an array and a value
    - Loop through the array and check if the current array element is === the value
    - If it is, return the index at which the element is found
    - If the value is never found, return -1
  - Big O:
    - Best: O(1) Average: O(n) Worst: O(n)
- Binary Search:
  - Much faster form of search. Can eliminate half the remaining elements at a time. Only works on sorted data!
  - Binary Search Psuedocode:
    - Function accepts an array and a value
    - Create a left pointer at start of the array, and a right pointer at the end of the array
    - While the left pointer comes before the right pointer
      - Create a pointer in the middle
      - If you find value you want, return index
      - If value is too small, move the left pointer up
      - If value is too large, move the right pointer down
    - If you never find the value, return -1
  - Big O:
    - Worst and Average: O(log n) Best case: O(1)
    - Every time we double the data, we add only one step!
    - Can ask: 2 to what power gives me the length of the data? That power is the number of steps!
      Example: 2 to what power gives me 256? 8!
- Searching for Substrings in a String:
  - "Naive" String Search
    - Psuedocode:
      _ Loop over the longer string
      _ Loop over the shorter string
      _ If the chars don't match, break out of the inner Loop
      _ If the chars do match, keep going
      _ If you complete the inner loop and find a match, increment the count of matches
      _ Return the count
      function naiveStringSearch(str, pattern) {
      let count = 0;
      for (let i = 0; i <= str.length - pattern.length; i++) {
      for (let j = 0; j < pattern.length; j++) {
      if (str[i + j] !== pattern[j]) break;
      if (j === pattern.length - 1) count++;
      }
      }
      return count;
      }

## Section 11: Bubble Sort

- Sorting: Why do we need to learn this? - Sorting is a common task, so it's good to know how it works. - There are many different ways to sort things, and different techniques have their own advantages and disadvantages. - Good to know what algorithm default JavaScript (and others) use behind the scenes, and therefore what it's good and bad at.
- JS built-in sort: Bad on numbers! It's doing so according to their Unicode values of their corresponding to strings. That's by calling just .sort() with no params. You can also specify a comparator function in the sort param: this tells JS how to sort. The comparator looks at pairs of elements (and and b), determines their sort order based on the return value: if it returns negative number, a should come before b. If positive number, b comes before a.
- Bubble Sort: The largest values bubble up to the top, one at a time. Many swaps can happen during each iteration.
- Bubble Sort psuedocode: 1) Start looping from the end of the array towards the beginning, with a variable called i. 2) Start an inner loop with a variable called j, from the beginning until i - 1. 3) If arr[j] is greater than arr[j+1], swap those two values!

## Section 12: Selection Sort

- Selection Sort: Similar to bubble, but instead of first placing large values into sorted position at the end of array, it places small values into sorted position one at a time -- making at most one swap per iteration.
- Selection Sort pseudo code: 1) Store the 1st element as the smallest value you've seen so far. 2) Compare this item to the next item in the array until you find a smaller number. 3) If a smaller number is found, designate that smaller number to be the new "minimum" (this is an **index** of where that value was found, not the value!) and continue until the end of the array. 4) If the "min" is not the value (index) you initially began with, swap the two values. 5) Repeat this process, starting with the **next** element, until the array is sorted.
- Selection Sort: Complexity of O(N^2) (even though technically it's N comparisons for each item , then N - 1, then N - 2, etc).
- Selection Sort: Potentially better than Bubble Sort if you want to minimize the number of swaps you're making. Usually minimizing swaps isn't a big concern, though.

## Section 13: Insertion Sort

- Insertion Sort: Builds up the sort by gradually creating a larger left portion which is always sorted. Takes each element and insert it exactly where it should go within the sorted portion. It does this by swapping backwards until it is in place.
- Insertion psuedocode: 1) Start by picking the second element in the array (first element is already considered sorted). 2) Now compare the second element with the one before it and swap if necessary. 3) Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e the left side) to place the element in the correct place. 4) Repeat until array is sorted. 5) Return array!
- Insertion Sort: Worst (and average) case for Space Complexity is O(N^2) (quadratic). If data is almost all sorted, bad if it's completely reversed. Good at online algorithms.
- **ONLINE ALGORITHM** Algorithm that can work as data is coming in -- as it is receiving new data.

## Section 14: Comparing Bubble, Selection, and Insertion sort

    Algorithms      Time (Best)     Time (Avg)      Time (Worst)        Space
    Bubble          O(N)            O(N^2)          O(N^2)              O(1)
    Insertion       O(N)            O(N^2)          O(N^2)              O(1)
    Selection       O(N^2)          O(N^2)          O(N^2)              O(1)

- Recap:

  - Bubble, Selection, and Insertion sort are all roughly equivalent
  - All have avg time complexities that are quadratic
  - Can perform better on some very small data sets - so not complete waste of time to know!

    Sections 15 - 17: Intermediate Sorting Algorithms O(n log n)

## Section 15: Merge sort

- Introduction:
  - Combination of two things - merging and sorting
  - Exploits the fact that arrays of 0 or 1 elements are always sorted
  - Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array
- Merging:

  - In order to implement Merge Sort, it's useful to implement a function responsible for merging two sorted array
    - Given two arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all
      the elements in the two input arrays
    - This function should run in O(n + m) time and O(n + m) space and should not modify the parameters passed to it
  - Merging Arrays Psuedocode:

    - Create an empty array, take a look at the smallest values in each input
    - While there are still values we haven't loked at...
      _ If the value in the first array is smaller than the value in the second array, push the value in the first array into our results
      and move onto the next value in the first array
      _ If the value in the first array is larger than the value in the second array, push the value in the second array into our results
      and move onto the next value in the second array \* Once we exhaust one array, push in all remaining values from the other array

      ```js
      function merge(arr1, arr2) {
        const mergedArray = [];
        let i = 0;
        let j = 0;

        while (i < arr1.length && j < arr2.length) {
          if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
          } else {
            mergedArray.push(arr2[j]);
            j++;
          }
        }

        while (i < arr1.length) {
          mergedArray.push(arr1[i]);
          i++;
        }
        while (j < arr2.length) {
          mergedArray.push(arr2[j]);
          j++;
        }

        return mergedArray;
      }
      ```

- Merge Sort Psuedocode:
  _ Break up the array into halves until you have arrays that are empty or have one element
  _ Once you have smaller sorted arrays, merge those arrays with the other sorted arrays until you are back at the full length of the array \* Once the array has been merged back together, return the merged (and sorted!) array

  ```js
  function mergeSort(array) {
    if (array.length <= 1) return array;

    let mid = Math.floor(array.length / 2);
    const left = mergeSort(array.slice(0, mid));
    const right = mergeSort(array.slice(mid));
    return merge(left, right);
  }
  ```

- Big O of Merge Sort:
  - Time, best, average, and worst: O(n log n)
  - Space: O(n)
    Doesn't care what the input is; going to keep spliting it in half in all scenario
  - How many times do we have to split an array of length nNto get single element arrays? log N
  - Where's the N in n log n come in?
    Each time we split it, we have n comparisons done in the merge helper function
    Thus: O(log n) decomposition x O(n) comparisons per decomposition
    Therefore, O(n log n)
  - O(n log n) is the best we can get for a sorting algorithm, unless the algo itself takes advantage of soem weird quirk in the data
    (Example: radix sort uses particular quirk of numbers to sort faster, but only on numbers)

## Section 16: Quick Sort

- Intro:
  - Like Merge Sort, exploits fact that arrays of 0 or 1 element are always sorted
  - Works by selecting one element ("pivot") and finding the index where the pivot should end up in the sorted away
  - Once pivot is positioned appropriately, Quick Sort can be applied on either side of the pivot
- Pivot Helper Intro:
  - In order to implement merge, it's useful to first implement a funciton responsible for ararnging elements in an array on either side of pivot
    - Given an array, this helper funciton should designate an element as the pivot
    - It should then rearrange elements in teh array so that all values less than the pivot are m oved to the left of the pivot
      and all values greater than the pivot are moved to the right of the pivot
    - The order of elements on either side of the pivot does not matter
    - The helper should do this IN PLACE -- it should not create new array
    - When complete, the helper should return the index of the pivot
  - Picking a pivot:
    - The runtime of quick sort depends in part on how one selecst the pivot
    - Ideally, the pivot should be chosen so that it's roughly the median value in the data set you're sorting
    - For somplicity, we'll choose the pivot to be the first element (we'll talk about consequence of this later)
  - Psuedocode:
    - It will help to accept 3 args: array, start index, end index (can default to 0 and the array length - 1 respectively)
    - Grab the pivot from the start of the array
    - Store the current pivot index in a variable (this will keep track of where the pivot should end up)
    - Loop through the array from start until end:
      - If the pivot is greater than current element, increment the pivot index variable and the nswap the current element w/ the element at the pivot index
    - Swap the starting element (i.e. the pivot) w/the pivot index
    - Return the pivot index
- Quick Sort - Psuedocode:
  _ Call the pivot helper on the full array
  _ When the helper returns the updated pivot index, recursively call the pivot helper on the subarray to the left of that index
  and the subarray to the right of that index \* The base case occurs when you consider a subarray with less than 2 elements (start === end or end < start)

  ```js
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
  ```

```js
function quickSort(array, start = 0, end = array.length - 1) {
  if (start < end) {
    let pivot = pivot(array, start, end);
    quickSort(array, start, pivot - 1);
    quickSort(array, pivot + 1, end);
  }
  return array;
}
```

## Section 17: Radix Sort

- TODO

## Section 18: Data Structures - Introduction

- Data Structures
  - What do they do?
    - Data structures are collections of values, the relationships among them, and the functions or operations that can be applied to the data
  - Why So Many?
    - Different data structures excel at different things. Soem are highly specialized, while others (like arrays) are more generally used.
  - Why Care?
    - JavaScript doesn't support any of these out of the box
    - The more time you spend as a dev, the more likely you'll need to use one of these data structures
    - Worked with many of them unkowingly already!
    - INTERVIEWS!!!
  - There Is No One "Best" Data Structures
    - They all excel in different situation
    - Working w/ map/location data? Use a Graph!
    - Need ordered list with fast inserts/removals at the beginning and end? Use a Linked List!
    - Web scraping nested HTML? Use a Tree!
    - Need to write a scheduler? Use a Binary Heap!
- ES2015 Class Syntax Overview
  - JS impelments the IDEA of classes -- but it's not real object-oriented programming
  - Class: Blueprint for creating objects with pre-defined properties and methods
  - Classes are syntantical sugar over prototype based inheritance. Does not introduce a new OOP inheritance model to the language
  - Example:
    class Student {
    constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    }
    }
    - The method to create new objects MUST be called constructor.
    - The class keyword creates a constant, so you can not redefined it.
  - Creating Objects From Classes
    - We use the "new" keyword:
      - let firstStudent = new Student("Colt", "Steele");
- Adding Instance Methods:
  - Provide functionality that lives on a single instance of the class
- Adding Class Methods:
  - Static keyword defines a static method for a class
    - Static methods are called without instantiating their class and cannot be called through a class instance.
    - Often used to create utlity functions for an applied
  - Example:
    class Student { constructor() static EnrollStudents() }
    Student.EnrollStudents();

## Section 19: Singly-Linked List

- Singly-Linked List Introduction
  - What is a Linked List?
    - A data structure that contains a head, tail, and length
    - Consist of nodes, and each node has a value and a pointer to "next" node or null
    - No index to reference like with an array
    - Each node only connected one direction to next node. No pointer to previous node
  - Head: Beginning of Linked List
  - Tail: End of Linked List
  - Comparisons w/ Arrays:
    Lists Arrays
    - Don't have indexes \* Indexed in order
    - Connected via ndoes w/a "next" pointer \* Insertion and deletion can be expensive
    - Random access is not allowed \* Can quickly be accessed at a specific index
- Starter Code & Push Intro
  - Push - Psuedocode:
    - This function accepts a value
    - Creates a new node using the value passed to the function
    - If there is no head property on list, set the head & tail to be the newly created node
    - Otherwise, set the next property on the tail to be the new ndoe and set the tail proeprty on the list to be the newly created node
    - Increment the length by 1
    - Return the SinglyLinkedList
- Pop - Intro:
  - Removing a node from the end of the Singly Linked List
  - Pop - Psuedocode:
    - If there are no nodes in the list, return undefined
    - Otherwise, loop through the list until you reach the tail (technically trying to get the node right BEFORE the tail)
    - Set the next property to be the 2nd to last node
    - Decrement the length of the list by 1
    - Return the value of the ndoe removed
- Shift
  - Removing a node from the beginning of the Linked List
  - Shift - Psuedocode:
    - If there are no nodes, return undefined
    - Store the current head property in a variable
    - Set the head property to be the current head's next property
    - Decrement the length by 1
      - (Fix: Tail won't be null if shift leads to empty list. So we add a check: if (length === 0, set tail to null))
    - Return the value of the node removed
- Unshift
  - Adding a new node to the beginning of the Linked List
  - Unshift - Psuedocode:
    - This function should accept a value that you're Adding
    - Create a new node using the value passed to the function
    - If there is no head property on the list, set the head & tail to be the newly created node
    - Otherwise, set the newly created node's next property to be the current head property on the list
    - Set the head property on the list to be that newly created node
    - Increment the length of the list by 1
    - Return the linked list
- Get
  - Retrieving a node by its position in the Linked List (have to manually count from the start, unlike Array)
  - Get - Psuedocode:
    - This function should accept an index
    - If the index is less than zero or greater than or equal to the length of the list, return null
    - Loop through the list until you reach the index & return the node at that specific index
- Set
  - Changing the value of a node based on its position in the Linked List
  - Set - Psuedocode:
    - This function should accept an index and a value
    - Use your get function to find the specific node
    - If the node is not found, return false
    - If the node is found, set the value of that node to be the value passed to the function and return true
- Insert
  - Adding a node to the Linked List at a specific position
  - Unlike Set, which updates an existing node, this is inserting a new node!
  - Insert - Psuedocode:
    - If the index is less than 0 or greater than the length, return false
    - If the index is the same as the length, just push a new node to the end of the list (via our push method!)
    - If the index is 0, unshift a new node to the start of the list (via our unshift method!)
    - Otherwise, using the "get" method, access the node at the index - 1 (previous node to where we want to insert)
    - Set the "next" property on that ndoe to be the new node
    - Set the next property on the new node to be the previous "next"
    - Increment the length
    - Return true
- Remove
  - Removing a node from the Linked List at a specific position
  - Remove - Psuedocode:
    - If the index is less than 0 or greater than the length, return undefined
    - If the index is the same as the length - 1, pop
    - If the index is 0, shift
    - Otherwise, using the "get" method, access the ndoe at the index - 1
    - Set the "next" property on that node to be the "next" of the next node
    - Decrement the length
    - Return the value of the node removed
- Reverse
  - Reversing the Linked List...IN PLACE!
  - Common challenge for interviews
  - Reverse - Psuedocode:
    - Swap the head and tail
    - Create a variable called "next"
    - Create a variable called "prev"
    - Create a variable called ndoe and initialize it to the head property
    - Loop through the list
      - Set the "next" to be the "next" property on whatever node is
      - Set the next property on the node to be whatever "prev" is
      - Set the "prev" to be the value of the node variable
      - Set the node variable to be the value of the next variable
- Big O of Linked List

  - Insertion - O(1) \* Wins over array!
  - Removal - It depends...O(1) or O(N) \* O(1) from beginning, O(N) from end or elsewhere
  - Searching - O(N) _ Have to start search from the start _ Loss over array's constant-time
  - Access - O(N) _ Have to start access from the start _ Loss over array's constant-time
  - Recap:
    - Excellent alt to arrays when insert/deltion at beginning are frequently required
    - Arrays contain a built in index whereas Linked Lists do not
    - Idea of list data structure that consists of ndoes is the foundation for other data structures like Stacks & Queues
    -

  const data = Array.apply(null, { length: 10 }).map(Function.call, Math.random);
```
