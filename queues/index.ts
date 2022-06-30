import { Queues } from "./queue";

const maxSize =3;
const queue = new Queues(maxSize);

queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

const deleteValue = queue.dequeue();
console.log(`value to delete is: ${deleteValue}`)

queue.printQueue();