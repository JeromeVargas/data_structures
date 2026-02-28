interface Node<T> {
  value: T;
  next: Node<T> | null;
}

export class LinkedList<T> {
  head: Node<T> | null;
  length: number;

  constructor() {
    this.head = null;
    this.length = 0;
  }

  insertAtHead(data: T): void {
    const newNode = new LinkedListNode(data, this.head);
    this.head = newNode;
    this.length++;
  }

  getByIndex(index: number): Node<T> | null {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current?.next || null;
    }
    return current;
  }

  insertAtIndex(index: number, value: T): void {
    if (index < 0 || index > this.length) {
      return;
    }
    if (index === 0) {
      this.insertAtHead(value);
      return;
    }

    const newNode = new LinkedListNode(value);
    const previous = this.getByIndex(index - 1);
    newNode.next = previous?.next || null;
    if (previous) {
      previous.next = newNode;
    }
    this.length++;
  }

  removeHead(): void {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
    this.length--;
  }

  removeAtIndex(index: number): void {
    if (index < 0 || index >= this.length) {
      return;
    }
    if (index === 0) {
      this.removeHead();
      return;
    }

    const previous = this.getByIndex(index - 1);
    if (previous && previous.next) {
      previous.next = previous.next.next;
      this.length--;
    }
  }

  static fromValues<T>(...values: T[]): LinkedList<T> {
    const ll = new LinkedList<T>();
    for (let i = values.length - 1; i >= 0; i--) {
      ll.insertAtHead(values[i]);
    }
    return ll;
  }

  print() {
    let output = "";
    let current = this.head;

    while (current) {
      output += `${current.value} -> `;
      current = current.next;
    }

    console.log(`${output}null`);
  }
}

class LinkedListNode<T> implements Node<T> {
  value: T;
  next: Node<T> | null;

  constructor(value: T, next: Node<T> | null = null) {
    this.value = value;
    this.next = next;
  }
}
