/********************** Queue Data Structure ***************************************
- Enqueue Pseudocode:
  - This function accepts some value
  - Create a new node using that value passed to the function
  - If there are no nodes in the queue, set this node to be the first and last property of the queue
  - Otherwise, set the next property on the current last to be that node, and then set the last property of the queue to be that node

- Dequeue Pseudocode:
  - If there is no first property, just return null
  - Store the first property in a variable
  - See if the first is the same as the last (check if there is only 1 node). If so, set the first and last to be null
  - If there is more than 1 node, set the first property to be the next property of first
  - Decrement the size by 1
  - Return the value of the node dequeued
************************************************************************************/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // Add an item to the Queue
  enqueue(value) {
    // Create a new Node
    let newNode = new Node(value);

    // If Queue is empty...
    if (!this.first) {
      // Our newly-created Node is the first, and last, in the Queue
      this.first = newNode;
      this.last = newNode;
    } else {
      // Queue not empty: Set our current last's "next" property to be our new Node
      this.last.next = newNode;
      // ...And then update our last to now reference the newly-created Node
      this.last = newNode;
    }

    // Increment size of Queue by 1, and then return its current size
    return ++this.size;
  }

  // Remove an item from the Queue
  dequeue() {
    // If Queue is empty...
    if (!this.first) return null;

    // Note our current "first" pointer
    let temp = this.first;

    // If we only have one item in the Queue...
    if (this.first === this.last) {
      // Update our "last" pointer
      this.last = null;
    }

    // More than one item in Queue, our first now points to its "next"
    this.first = this.first.next;

    // Decremetn the size of Queue by 1
    this.size--;

    // And finally, return the value of the item that was removed
    return temp.value;
  }
}
