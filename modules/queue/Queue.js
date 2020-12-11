class Queue {
  generateQitem(data, next = null) {
    return {
      value: data,
      last: null,
      next,
    };
  }

  constructor() {
    // Set initial data.
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(data) {
    // Add some data to the queue.
    //if there is nothing in the q
    if (this.head === null) {
      this.head = this.generateQitem(data);
    }
    //if there is only the head
    else if (this.tail === null) {
      this.tail = this.head;
      this.head = this.generateQitem(data, this.tail);
      this.tail.last = this.head;
    }
		else {
      const oldHead = this.head;
      this.head = this.generateQitem(data, oldHead);
      oldHead.last = this.head;
    }
    this.length++;
  }

  dequeue() {
    //remove the oldest task from the queue
    if (this.length === 1) {
      const data = this.head;
      this.length--;
      this.head = null;
      return data;
    }
    const oldTail = this.tail;
    this.tail = this.tail.last;
    this.tail.next = null;
    oldTail.last = null;
    oldTail.next = null;
    this.length--;
    return oldTail;
  }

  show() {
    // Return the next item in the queue.
    return this.tail;
  }

  all() {
    // Return all items in the queue.
    const queue = new Array(this.length);
    let item = this.tail;
    for (let i = 0; i < this.length; i++) {
      queue[i] = item;
      item = item.last;
    }
    return queue;
  }
}

module.exports = Queue;
