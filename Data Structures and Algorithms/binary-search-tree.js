class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insertNode(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNodeinTree(this.root, newNode);
    }
  }

  insertNodeinTree(root, newNode) {
    if (root.value > newNode.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNodeinTree(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNodeinTree(root.right, newNode);
      }
    }
  }

  search(root, value) {
    if (!root) {
      return false;
    }
    if (root.value === value) {
      return true;
    }
    if (root.value > value) {
      return this.search(root.left, value);
    } else {
      return this.search(root.right, value);
    }
  }

  max(root) {
    if (!root) {
      return root;
    }
    if (root.right === null) {
      return root.value;
    } else {
      return this.max(root.right);
    }
  }

  min(root) {
    if (!root) {
      return root;
    }
    if (root.left === null) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }

  // DFS
  preorder(root) {
    if (root) {
      console.log(root.value);
      this.preorder(root.left);
      this.preorder(root.right);
    }
  }

  // DFS
  inorder(root) {
    if (root) {
      this.inorder(root.left);
      console.log(root.value);
      this.inorder(root.right);
    }
  }

  // DFS
  postorder(root) {
    if (root) {
      this.postorder(root.left);
      this.postorder(root.right);
      console.log(root.value);
    }
  }

  // BFS
  levelOrder() {
    const queue = [];
    queue.push(this.root);
    while (queue.length) {
      let curr = queue.shift();
      console.log(curr.value);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }

  delete(value) {
    this.root = this.deleteNodeFromTree(this.root, value);
  }

  deleteNodeFromTree(root, value) {
    if(!root) {
        return root;
    }
    if(root.value > value) {
        root.left = this.deleteNodeFromTree(root.left, value)
    }
    else if(root.value < value) {
        root.right = this.deleteNodeFromTree(root.right, value)
    } else {
        if(root.left === null && root.right === null) {
            return null;
        }
        if(!root.left) {
            return root.right;
        }
        if(!root.right) {
            return root.left;
        }
        root.value = this.min(root.right)
        root.right = this.deleteNodeFromTree(root.right, root.value)
    }
    return root
  }
}

const bst = new BinarySearchTree();
bst.insertNode(10);
bst.insertNode(5);
bst.insertNode(3);
bst.insertNode(15);
bst.insertNode(7)

console.log("Search - 10", bst.search(bst.root, 10));
console.log("Search - 5", bst.search(bst.root, 5));
console.log("Search - 3", bst.search(bst.root, 3));
console.log("Search - 15", bst.search(bst.root, 15));
console.log("Search - 7", bst.search(bst.root, 7));
console.log("Max value is -", bst.max(bst.root));
console.log("Minimum value is -", bst.min(bst.root));
console.log("DFS Preorder -");
bst.preorder(bst.root);
console.log("DFS Inorder -");
bst.inorder(bst.root);
console.log("DFS Postorder -");
bst.postorder(bst.root);
console.log("BFS or LevelOrder -");
bst.levelOrder();
bst.delete(10)
console.log("_____")
bst.levelOrder()
