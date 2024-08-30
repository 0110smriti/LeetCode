const TailedLinkedList = require('./tailed-linked-list')

class QueueLinkedList {
    constructor() {
        this.list = new TailedLinkedList()
    }

    enqueue = (value) => {
        this.list.append(value)
    }
    
    dequeue = () => {
        return this.list.removeFromFront()
    }

    peek() {
        if(this.isEmpty()){
            return null
        }
        return this.list.head.value
    }

    isEmpty() {
        return this.list.isEmpty()
    }

    getSize() {
        return this.list.getSize()
    }

    print() {
        this.list.print()
    }
    
}

const queue = new QueueLinkedList()
console.log("Is empty?", queue.isEmpty())
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
console.log(queue.getSize())
queue.print()
console.log(queue.dequeue())
console.log(queue.peek())
queue.print()

