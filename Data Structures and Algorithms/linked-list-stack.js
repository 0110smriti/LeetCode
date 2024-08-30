const TailedLinkedList = require('./tailed-linked-list')

class StackLinkedList {
    constructor() {
        this.stack = new TailedLinkedList()
    }

    push = (value) => {
        this.stack.prepend(value)
    }
    
    pop = () => {
        return this.stack.removeFromFront()
    }

    peek() {
        if(this.isEmpty()){
            return null
        }
        return this.stack.head.value
    }

    isEmpty() {
        return this.stack.isEmpty()
    }

    getSize() {
        return this.stack.getSize()
    }

    print() {
        this.stack.print()
    }
    
}

const list = new StackLinkedList()
console.log("IS empty?", list.isEmpty())
list.push(20)
list.push(10)
list.push(30)

list.print()
console.log(list.pop())
console.log(list.peek())
list.print()

