class HashTable {
    constructor(size) {
        this.table = new Array(size)
        this.size = size
    }

    hash(key) {
        let total = 0
        for(let i=0; i<key.length; i++) {
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    // set(key, value) {
    //     const idx = this.hash(key)
    //     this.table[idx] = value
    // }

    set(key, val) {
        const idx = this.hash(key)
        const bucket = this.table[idx]
        if(!bucket) {
            this.table[idx] = [[key, val]]
        } else { 
            const sameKeyItem = bucket.find((item) => item[0] === key)
            if(sameKeyItem) {
                sameKeyItem[1] = val
            }else {
                bucket.push([key, val])
            }
        }
    }

    // get(key) {
    //     const idx = this.hash(key)
    //     return this.table[idx]
    // }

    get(key) {
        const idx = this.hash(key)
        const bucket = this.table[idx]
        if(bucket) {
            const sameKeyItem = bucket.find((item) => item[0] === key)
            if(sameKeyItem) {
                return sameKeyItem[1]
            }
        }
        return undefined
    }

    // remove(key) {
    //     const idx = this.hash(key)
    //     this.table[idx] = undefined
    // }

    remove(key) {
        const idx = this.hash(key)
        const bucket = this.table[idx]
        if(bucket) {
            const sameKeyItem = bucket.find((item) => item[0] === key)
            if(sameKeyItem) {
                bucket.splice(bucket.indexOf(sameKeyItem), 1)
            }
        }
        return undefined
    }

    display() {
        for(let i=0; i<this.table.length; i++) {
            if(this.table[i]) {
                console.log(i, this.table[i])
            }
        }
    }
}

const table = new HashTable(50)
table.set("name", "Bruce")
table.set("age", 25)
table.display()
table.get("name")
table.get("age")
// table.remove("name")
table.display()
table.set("mane", "Clark") // Hash Table Collision
table.set("name", "Diana")
table.display()
table.remove("name")
table.display()