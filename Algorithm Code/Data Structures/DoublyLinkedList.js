class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    // Create a new Node
    let newNode = new Node(value);

    //  If list is empty (can also check if length === 0)
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Set the tail's "next" to be the newly-created Node
      this.tail.next = newNode;

      // Set this newly-created Node's "previous" to be our current (soon to be old) "tail"
      newNode.previous = this.tail;

      // Set the tail to be the newly-created node
      this.tail = newNode;

      // Set this newly-created Node's "next" to be null -- no items exist past this node yet
      // newNode.next = null; // Not necessary; we do this by default in Node constructor
    }

    // Increment length to reflect adding the new node
    this.length++;

    // Return the list
    return this;
  }

  pop() {
    // If empty List, nothing to remove!
    if (!this.head) {
      return undefined;
    }

    // Store our current tail; we want to return this as the value we removed!
    let removedNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // Change tail to be its previous
      this.tail = removedNode.previous;

      // Ensure there is no pointer to a next node from our tail, as our tail is the last item
      this.tail.next = null;

      // Also clean up the pointers for our removed node
      removedNode.prev = null;
    }

    // Decrement the length
    this.length--;

    // Return the item that was removed, as stored earlier
    return removedNode;
  }

  shift() {
    if (!this.head) return undefined;

    // Store the current head
    let removedHead = this.head;

    // Simple case for when there is only one Node in list
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // Update the head to be the "next" of the old head
      this.head = removedHead.next;

      // Set the new head's previous property to null
      this.head.previous = null;

      // Set the old head's "next" to be null
      removedHead.next = null;
    }

    // Decrement the length of the list by 1
    this.length--;

    // Return the old head that was just removed
    return removedHead;
  }

  // Create new node
  // Set its next to be the current head
  // Set the current head's previous to be new node
  // Set head to be new node
  unshift(value) {
    // Create a new Node with the value passed in
    let newNode = new Node(value);

    // If the list is empty...
    if (!this.head) {
      // The head and tail point to the same new Node
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Set the previous pointer of the old head to be the new Node
      this.head.previous = newNode;

      // Set the next pointer of the newly-created Node to be the old head
      newNode.next = this.head;

      // And set the new head to be the newly-created Node
      this.head = newNode;
    }

    // Increment the length of the list
    this.length++;

    // Finally, returned the Doubly Linked List
    return this;
  }

  get(index) {
    // Check if the index is valid
    if (index < 0 || index >= this.length) return null;

    let count;
    let current;

    // If the index is closer to start of the list than the end...
    if (index <= this.length / 2) {
      count = 0;
      current = this.head;
      while (count != index) {
        current = current.next;
        count++;
      }
    }
    // If the index is closer to the end of the list than the start of it...
    else {
      count = this.length - 1;
      current = this.tail;
      while (count != index) {
        current = current.previous;
        count--;
      }
    }

    return current;
  }

  set(index, value) {
    const foundNode = this.get(index);
    if (foundNode != null) {
      foundNode.value = value;
      return true;
    }

    return false;
  }

  insert(index, value) {
    // Ensure the desired index is valid
    if (index < 0 || index > this.length) return false;

    // If the list is empty, simply use unshift
    if (index === 0) return !!this.unshift(value);
    // If we want to insert at the end, simply use push
    else if (index === this.length) return !!this.push(value);

    // Otherwise, we're inserting in another location: Need new logic!
    let preNode = get(index - 1);
    let newNode = new Node(value);
    let postNode = preNode.next;

    // Update the pre-Node's link - it points next to the newly-created Node
    preNode.next = newNode;

    // Set the newly-created Node's links
    newNode.next = postNode;
    newNode.previous = preNode;

    // Update the post-Node's link - it points previous to the newly-created Node
    postNode.previous = newNode;

    // Increment the length of the list by 1
    this.length++;

    return true;
  }

  remove(index) {
    // Ensure the desired index is valid
    if (index < 0 || index >= this.length) return undefined;

    // If we want to remove the first item, simply use shift
    if (index === 0) return this.shift();

    // If we watn to remove the last item, simply use pop
    if (index === this.length - 1) return this.pop();

    // Otherwise, we wish to remove an item in another locaton: Create new logic for that!
    let removedNode = this.get(index);
    let preNode = removedNode.previous;
    let postNode = removedNode.next;

    // Update the links of the Nodes that come before and after the removed Node
    preNode.next = postNode; // May see written as removedNode.prev.next = removedNode.next -- UGLY!
    postNode.previous = preNode; // May see written as removedNode.next.prev = removedNode.prev -- UGLY!

    // Clean up the links for the Node we are removing
    removedNode.next = null;
    removedNode.previous = null;

    // Decrement the length of the list by 1
    this.length--;

    return removedNode;
  }
}
