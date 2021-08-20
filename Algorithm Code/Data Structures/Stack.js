/****************** Stack Data Structure **********************
- Pushing Pseudocode:
  * The function should accept a value
  * Create a new node with that value
  * If there are no nodes in teh stack, set the first and last property to be the newly created node
  * If there is at least one node, create a variable that stores the current first property on the stack
  * Reset the first property to be the newly created node
  * Set the next property on the node to be the previously created variable
  * Increment the size of the stack by 1, and return it

- Popping Pseudocode:
  * If there are no nodes in the stack, return null
  * Else, create a temporary variable to store the first property on the stack
  * If there is only 1 node, set the first and last property to be null
  * If there is more than one mode, set the first property to be the next property on the current first
  * Decrement the size by 1
  * Return the value of the node removed
***************************************************************/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // Add an item to the Stack
  push(value) {
    // Create a new Node
    let newNode = new Node(value);

    // If Stack is empty...
    if (!this.first) {
      // Our newly-created Node is the first, and last, in the Stack
      this.first = newNode;
      this.last = newNode;
    } else {
      // Stack not empty, so...
      // Note our current (soon to be old) "first"
      let temp = this.first;

      // Our "first" is now the newly-created Node
      this.first = newNode;

      // And its "next" our old first
      this.first.next = temp;
    }

    // Increment size, and return it
    return ++this.size;
  }

  // Remove an item from the Stack
  pop(value) {
    // If Stack is empty...
    if (!this.first) return null;

    // Note our current "first" pointer
    let temp = this.first;

    //  If we only have one item in the Stack
    if (this.first === this.last) {
      // Update our "last" pointer
      this.last = null;
    }

    // More than one it em in Stack, our first now points to its "next"
    this.first = this.first.next;

    // Decrement the size of Stack by 1
    this.size--;

    // And finally, return the value of the item that was removed
    return temp.value;
  }
}
