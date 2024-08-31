class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set()
        }
    }

    addEdge(v1, v2) {
        if(!this.adjacencyList[v1]) {
            this.addVertex(v1)
        }
        if(!this.adjacencyList[v2]) {
            this.addVertex(v2)
        }
        this.adjacencyList[v1].add(v2)
        this.adjacencyList[v2].add(v1)
    } 

    hasEdge(v1, v2) {
        return (this.adjacencyList[v1].has(v2) && this.adjacencyList[v2].has(v1))
    }

    removeEdge(v1, v2) {
        if(this.hasEdge(v1,v2)){
            this.adjacencyList[v1].delete(v2)
            this.adjacencyList[v2].delete(v1)
        }
    }

    removeVertex(v) {
        if(!this.adjacencyList[v]) {
            return
        }

        for(let adv of this.adjacencyList[v]) {
            this.removeEdge(v, adv)
        }

        delete this.adjacencyList[v]
    }

    display() {
            for(let v in this.adjacencyList) {
                console.log(  v + " -> " + [...this.adjacencyList[v]])
            }
    }
}

const graph = new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex("C")
graph.addEdge("A","B")
graph.addEdge("B","C")
graph.display()
console.log(graph.hasEdge("A", "B"))
console.log(graph.hasEdge("A", "C"))
graph.removeEdge("A","B")
graph.display()
console.log("----")
graph.removeVertex("A")
graph.display()
console.log("----")
graph.removeVertex("B")
graph.display()