import { Node } from './node';

export class LinkedList<T> {
  private head: Node<T>;
  private tail: Node<T>;

  public constructor () {
    this.head = new Node<T>();
    this.tail = new Node<T>();
    this.head.next = this.tail;
  }

  public isEmpty (): boolean {
    return this.head.next === this.tail;
  }

  public insertFirst (item: T): void {
    const newNode = new Node<T>(item);

    newNode.next = this.head.next;
    this.head.next = newNode;
  }

  public insertLast (item: T): void {
    const newNode = new Node<T>(item);

    let point: Node<T> | null = this.head;

    while (point && point.next !== this.tail) {
      point = point.next;
    }

    if (point) {
      newNode.next = this.tail;
      point.next = newNode;
    }
  }

  public contains (item: T): boolean {
    if (this.isEmpty()) {
      throw new Error('List is empty');
    }
    let point: Node<T> | null = this.head;

    while (point && point.next !== this.tail) {
      if (point.next && point.next.item === item) {
        return true;
      }
      point = point.next;
    }
    return false;
  }

  public remove (itemToDelete: T): void {
    if (this.isEmpty()) {
      throw new Error('List is empty');
    }

    let aux: Node<T> | null = null;

    let currentNode: Node<T> = this.head;

    while (currentNode.next && currentNode.next.item !== itemToDelete) {
      currentNode = currentNode.next;
    }

    if (currentNode.next) {
      aux = currentNode.next;
      currentNode.next = currentNode.next.next;
      aux.next = null;
    }

    // return aux && aux.item ? aux.item : null;
  }

  public removeFirst (): T | null {
    if (this.isEmpty()) {
      throw new Error('List is empty');
    }

    const point: Node<T> | null = this.head.next;

    if (point) {
      this.head.next = point.next;
      point.next = null;
    }

    return point ? point.item : null;
  }

  public getFirst (): T | null {
    if (this.isEmpty()) {
      throw new Error('List is empty');
    }
    return this.head.next ? this.head.next.item : null;
  }

  public listContent (): void {
    let point = this.head.next;

    while (point && point !== this.tail) {
      console.log(`Element of the list: ${point.item}`);
      point = point.next;
    }
  }
}
