export class Node<T> {
  public item: T | null;
  // eslint-disable-next-line no-use-before-define
  public next: Node<T> | null;

  public constructor (item: T | null = null) {
    this.item = item;
    this.next = null;
  }
}
