class TreeNode {
    constructor(value) {
      this.val = value;
      this.parent = this.left = this.right = null;
    }
  }
  
  class Tree {
    constructor() {
      this.root = null;
    }
  
    add(value) {
      let node = new TreeNode(value);
      if (!this.root) {
        this.root = node;
      }
      else {
        let n = this.root,
          branch;
        while (n) {
          branch = value < n.val ? 'left' : 'right';
          if (!n[branch]) {
            break;
          }
          n = n[branch];
        }
        node.parent = n;
        n[branch] = node;
      }
    }
  }
/**
 * create a balanced tree by adding the middle node (parent), then the children
 * so add the parent before adding the left/right
 * 
 * N = |values|
 * Time: O(n log n)
 * Additional Space: O(N)
 */
const makeBalancedTree = (values) => {
    let tree = new Tree();
    if (values && values.length) {
        add(tree, values, 0, values.length - 1);
    }
    return tree;
}

const add = (tree, values, start, end) => {
    if (start === end) {
        tree.add(values[start]);
    } else if (start < end) {
        let mid = start + Math.floor((end - start) / 2);
        tree.add(values[mid]);
        add(tree, values, start, mid - 1);
        add(tree, values, mid + 1, end);
    }
}

console.log(makeBalancedTree([1, 2, 3, 4, 5]));