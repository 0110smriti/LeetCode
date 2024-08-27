class CircularQueue {
    constructor(capacity) {
        this.queue = new Array(capacity)
        this.capacity = capacity
        this.size = 0
        this.front = -1
        this.rear = -1
    }

    isEmpty() {
        return this.size === 0
    }

    isFull() {
        return this.capacity ===  this.size
    }

    len() {
        return this.size
    }

    enqueue(value) {
        if(!this.isFull()) {
            this.rear = (this.rear + 1) % this.capacity
            this.queue[this.rear] = value
            this.size = this.size + 1
            if(this.front === -1) {
                this.front = this.rear
            }
        } else 
        console.log("List is Full!")
    }

    dequeue() {
        if(!this.isEmpty()) {
            const dequeued_item = this.queue[this.front]
            this.queue[this.front] === null
            this.front = (this.front + 1) % this.capacity
            this.size = this.size - 1
            if(this.isEmpty()) {
                this.rear = -1
                this.front = -1
            }
            return dequeued_item
        }
        else {
            return null
        }
    }

    peek() {
        if(this.isEmpty()) return null;
        return this.queue[this.front]
    }

    print() {
        if(this.isEmpty()) {
            console.log("Empty list")
        }
        else {
            let i;
            let str = ""
            for(i=this.front; i !== this.rear; i=(i+1)% this.capacity) {
                str += this.queue[i] + " "
            }
            str +=  this.queue[i]
            console.log(str)
        }
    }
}

const cq = new CircularQueue(5)
console.log(cq.isEmpty())
cq.enqueue(1)
cq.enqueue(2)
cq.enqueue(3)
cq.enqueue(4)
cq.enqueue(5)

console.log(cq.isFull())
cq.print()
console.log(cq.peek())
console.log(cq.dequeue())
console.log(cq.peek())
cq.print()
cq.enqueue(6)
cq.print()
