export class Queues{
    private queue: number[]
    private length:number
    private maxSize:number

    public constructor(maxSize: number){
        this.maxSize=maxSize;
        this.length=0;
        this.queue= new Array<number>(this.maxSize);
    }

    public isFull():boolean{
        return this.length===this.maxSize
    }
    public isEmpty():boolean{
        return this.length===0;
    }
    public enqueue(newNumber:number){
        if(this.isFull()){
            throw new Error('Queue is full');
        }
        this.queue[this.length++] = newNumber;
    }
    public dequeue():number{
        if(this.isEmpty()){
            throw new Error('Queue is Empty');
        }
        const element=this.queue[0];
        for(let i=0;i<this.length;i++){
            this.queue[i]=this.queue[i+1];
        }
        this.length--;
        return element
    }
    public printQueue():void{
        if(this.isEmpty()){
            throw new Error("Queue is Empty cant print");
        }
        for(let i=0;i<this.length;i++){
            console.log(`Node at position : ${i} is: ${this.queue[i]}`)
        }
    }

}