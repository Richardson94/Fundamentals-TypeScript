export class Queue<T> {
  private queue: T[];
  private length: number;
  private maxSize: number;

  public constructor (maxSize: number) {
    this.maxSize = maxSize > 0 ? maxSize : 10;
    this.length = 0;
    this.queue = new Array<T>(this.maxSize);
  }

  public isFull (): boolean {
    return this.length === this.maxSize;
  }

  public isEmpty (): boolean {
    return this.length === 0;
  }

  public enqueue (newNumber: T) {
    if (this.isFull()) {
      throw new Error('Queue is full');
    }
    this.queue[this.length++] = newNumber;
  }

  public dequeue (): T {
    if (this.isEmpty()) {
      throw new Error('Queue is empty');
    }
    const element = this.queue[0];
    for (let i = 0; i < this.length; i++) {
      this.queue[i] = this.queue[i + 1];
    }
    this.length--;
    return element;
  }

  public peek (): T {
    if (this.isEmpty()) {
      throw new Error('Queue is empty');
    }
    return this.queue[0];
  }

  public queueContains (element: T): boolean {
    console.log('Queue Contains');
    for (let i = 0; i < this.length; i++) {
      if (element === this.queue[i]) {
        return true;
      }
    }
    return false;
  }

  public printQueue (): void {
    console.log('Queue content:');
    for (let i = 0; i < this.length; i++) {
      console.log(`Node at possition: ${i} is: ${this.queue[i]}`);
    }
  }
}
