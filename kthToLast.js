class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const getKthToLast = (k, head) => {
    if (!head) {
        return null;
    }
    // 2 pointers, one at the start and one that is k ahead of start, then skip over one until right.next = null
    let left = head;
    let right = head;
    for (let i = 0; i < k; i++) {
        right = right.next;
        if (!right) {
            return null;
        }
    }
    while (right.next) {
        right = right.next;
        left = left.next;
    }
    return left.value;
}


let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);
let node6 = new Node(6);


node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;

console.log(getKthToLast(3, node1));