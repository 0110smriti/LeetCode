// Linked List

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size
    }

    prepend(value) {
        const newNode = new Node(value)
        if(this.isEmpty()) {
            this.head = newNode
        }else{
            newNode.next = this.head
            this.head = newNode
        }
        this.size++
    }

    append(value) {
        const node = new Node(value)
        if(this.isEmpty()) {
            this.head = node
        }
        else {
            let curr = this.head
            while(curr.next !== null) {
                curr = curr.next
            }
            curr.next = node
        }
        this.size++
    }

    insert(index, value) {
        if(index > this.size + 1 || index <= 0) {
            console.log("Cannot insert")
        }
        else if(index === 1) {
            this.prepend(value)
        }
        else if(index === this.size + 1) {
            this.append(value)
        }else {
            const node = new Node(value)
            let curr = this.head;
            let prev = null;
            let count = 1;
            while(count < index) {
                prev = curr;
                curr = curr.next;
                count++;
            }
            prev.next = node;
            node.next = curr;
            this.size++;
        }

    }

    remove(index) {
        if(index <=0 || index > this.size) {
            return null
        }
        if(index === 1) {
            const removedNode = this.head
            this.head = this.head.next;
            this.size--;
            return removedNode.value;
        }
        let curr = this.head;
        let prev = null;
        let count = 1;
        while(count < index) {
            prev = curr;
            curr = curr.next;
            count++;
        }
        const removedNode = curr;
        prev.next = curr.next
        this.size--;
        return removedNode.value
    }

    removeValue(value) {
        if(this.isEmpty()) {
            console.log("List is Empty")
            return null;
        }
        if(this.head.value == value) {
            console.log("same as val")
            const removedNode = this.head;
            this.head = this.head.next;
            this.size--;
            return removedNode.value
        }
        let prev = null;
        let curr = this.head;
        while(curr !== null && curr.value !== value) {
            prev = curr;
            curr = curr.next;
        }
        if(curr === null) {
            console.log("Node not found")
            return null
        }
        const removedNode = curr;
        prev.next = curr.next;
        this.size--;
        return removedNode.value;
    }
    
    print() {
        if(this.isEmpty()) {
            return null
        }
        let curr = this.head
        let str = ''
        while(curr !== null) {
            str += curr.value + " "
            curr = curr.next
        }
        console.log(str)
    }

    search(value) {
        if(this.isEmpty()) {
            return -1
        }
        let curr = this.head;
        let position = 1;
        while(curr!==null) {
            if(curr.value === value) {
                return position
            }
            curr = curr.next;
            position++;
        }
        return -1
    }

    reverse() {
        let prev = null;
        let curr = this.head;
        while(curr !== null) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
    }
}

const list = new LinkedList()
console.log("Empty:", list.isEmpty())
list.prepend(3)
list.prepend(1)
console.log(list.getSize())
list.append(4)
list.insert(2,2)
list.print()
list.insert(5,5)
list.insert(1,0)
list.print()
console.log(list.getSize())
console.log(list.remove(1))
list.print()
list.remove(5)
list.print()
list.remove(2)
list.print()
list.remove(4)
list.insert(2,2)
list.append(5)
list.prepend(0)
list.print()
console.log(list.removeValue(0))
list.print()
console.log(list.removeValue(16))
console.log(list.removeValue(5))
list.print()
console.log(list.removeValue(3))
list.print()
list.insert(3,3)
list.append(5)
list.append(6)
list.print()
console.log(list.search(5))
console.log(list.search(15))
console.log(list.search(0))
console.log(list.search(1))
list.print()
list.reverse()
list.print()