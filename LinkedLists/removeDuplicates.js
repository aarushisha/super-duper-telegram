class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const removeDuplicates = (head) => {
    // iterate through the linked list, noting which values are there, if run into value again, remove the node
    // have pointer on prev and current?
    let valueCounts = {};
    let currentNode = head;
    let prev = null;
    while (currentNode) {
        console.log("prev", prev);
        console.log("current", currentNode)
        let next = currentNode.next;
        if (valueCounts[currentNode.value]) {
            // delete node
            console.log("DELETE", currentNode.value);
            if (prev) {
                prev.next = next;
            }
            currentNode.next = null;
        } else {
            valueCounts[currentNode.value] = true;
            prev = currentNode;
        }
        currentNode = next;
    }
    return head;
}

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(2);
let node4 = new Node(1);
let node5 = new Node(1);
let node6 = new Node(6);


node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;

console.log(removeDuplicates(node1));