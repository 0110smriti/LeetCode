// Queues - FIFO

class Queue {
    constructor() {
        this.queue = []
    }

    enqueue(value) {
        this.queue.push(value)
    }

    dequeue() {
        if(this.isEmpty()) {
            return null
        }
        return this.queue.shift()
    }

    isEmpty() {
        return this.queue.length === 0
    }

    peek() {
        if(!this.isEmpty()) {
            return this.queue[0]
        }
        return null
    }

    print() {
        return this.queue.toString()
    }
}

const q = new Queue()
console.log(q.isEmpty())
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)
console.log(q.isEmpty())
console.log(q.print())
console.log(q.dequeue())
console.log(q.peek())
console.log(q.print())
console.log(q.dequeue())
console.log(q.dequeue())
console.log(q.dequeue())
console.log(q.peek())
console.log(q.print())