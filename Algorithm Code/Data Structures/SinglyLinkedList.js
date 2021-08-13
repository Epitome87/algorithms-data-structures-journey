class Node {
  constructor(val) {
    this.value = val;
    // Point to the next node in the list
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    // Beginning of the list
    this.head = null;
    // End of the list
    this.tail = null;
  }

  // Inserts a new node at the end of the list
  push(val) {
    const newNode = new Node(val);
    // If empty SinglyLinkedList
    if (!this.head) {
      this.head = newNode;
    } else {
      // Add onto the end of current tail
      this.tail.next = newNode;
    }
    // Move the tail marker over to the new node
    this.tail = newNode;
    this.length++;

    // Return the entire list
    return this;
  }

  // Removes a node from the end of the list
  pop() {
    if (!this.head) return undefined;

    let currentNode = this.head;
    let preTail = this.head;
    while (currentNode.next) {
      preTail = currentNode;
      currentNode = currentNode.next;
    }
    this.tail = preTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    // Return node that was removed
    return currentNode;
  }

  // Removes node from the beginning of the list
  shift() {
    if (!this.head) return null;
    // Perhaps rename currentHead to "nodeToRemove"?
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return currentHead;
  }

  // Add new node to the beginning of the list
  unshift(val) {
    let newNode = new Node(val);

    // If no head
    if (!this.head) {
      newNode.next = null;
      // this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      // this.head = newNode;
    }
    this.head = newNode;

    this.length++;

    return this;
  }

  // Retrieves the node at the specified position
  // get(index) {
  //   if (index < 0 || index >= this.length) return null;

  //   let counter = 0;
  //   let currentNode = this.head;
  //   while (counter !== index) {
  //     currentNode = currentNode.next;
  //     counter++;
  //   }

  //   return currentNode;
  // }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  set(index, value) {
    let foundNode = this.get(index);

    if (!foundNode) return false;

    foundNode.value = value;

    return true;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;

    if (index === length) {
      return !!this.push(value);
    }
    if (index === 0) {
      return !!this.unshift(value); // coerce to boolean. same as doing { return this.shift(value);  return true}
    }
    // Any other index
    let newNode = new Node(value);
    let previous = this.get(index - 1);
    let temp = previous.next;
    previous.next = newNode;
    newNode.next = temp;
    this.length++;

    return true;
  }

  remove(index) {
    // If index is invalid ("outside" list)
    if (index < 0 || index > this.length) return null;
    // If index is end of list, simply pop
    if (index === this.length - 1) return this.pop();
    // If index is beginning, simply shift
    if (index === 0) return this.shift();

    // Findi the node before the nodeToRemove
    let previousNode = this.get(index - 1);

    // We want to return the removed node later
    let removedNode = previousNode.next;

    // Set the node after the node to remove ( = C )  as the new node after the node before the node to remove ( = A )
    previousNode.next = removedNode.next; // From A -> B -> C to A ->

    // Decrease the List's length by 1
    this.length--;

    // Return the node that was just removed
    return removedNode;
  }

  // STRUGGLING TO UNDERSTAND :()
  reverse() {
    let currentNode = this.head;
    this.head = this.tail;
    this.tail = currentNode;

    let previousNode = null;
    let nextNode = null;

    for (let i = 0; i < this.length; i++) {
      nextNode = currentNode.next;
      currentNode.next = previousNode;

      previousNode = currentNode;
      currentNode = nextNode;
    }
  }
}
