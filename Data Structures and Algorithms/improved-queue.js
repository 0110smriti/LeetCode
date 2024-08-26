// Improved Queue using Objects and front and rear pointers

class Queue {
    constructor() {
        this.queue = {}
        this.rear = 0
        this.front = 0
    }

    isEmpty() {
        return this.front === this.rear
    }

    peek() {
        return this.queue[this.front]
    }

    enqueue(value) {
        this.queue[this.rear] = value
        this.rear++
    }

    dequeue() {
        if(!this.isEmpty()) {
            return this.queue[this.front++]
        }
        return null
    }

    print() {
        console.log(this.queue)
    }
}

const q = new Queue()
console.log(q.isEmpty())
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
console.log(q.isEmpty())
q.print()
console.log(q.peek())
console.log(q.dequeue())
console.log(q.peek())
q.dequeue()
q.dequeue()
q.dequeue()
console.log(q.isEmpty())
q.print()