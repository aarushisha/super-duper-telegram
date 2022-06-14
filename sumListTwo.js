class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

/**
 * Walk through both lists in step summing each digit. Where the sum is greater
 * than 10 then maintain a carry value. Where one list is longer than the other
 * then copy the rest of the digits across adding any carry values.
 * 
 * N = max(|listOne|, |listTwo|)
 * Time Complexity: O(N || M) (whichever one is longer)
 * Additional Space Complexity: O(N) used to create new list
 */
const sumListReverse = (listOne, listTwo) => {
    let head = { next: null }, // psuedo-node
        tail = head,
        carry = 0,
        nodeOne = listOne,
        nodeTwo = listTwo,
        sum;
    
    while (nodeOne && nodeTwo) {
        sum = nodeOne.value + nodeTwo.value + carry;
        if (sum >= 10) {
            carry = 1;
            sum -= 10;
        } else {
            carry = 0;
        }
        tail = tail.next = new Node(sum);
        nodeOne = nodeOne.next;
        nodeTwo = nodeTwo.next;
    }

    nodeOne = nodeOne || nodeTwo // go through whatever is remaining of the longer list
    while (nodeOne) {
        sum = nodeOne.value + carry;
        if (sum >= 10) {
            carry = 1;
            sum -= 10;
        } else {
            carry = 0;
        }
        tail = tail.next = new Node(sum);
        nodeOne = nodeOne.next;
    }
    if (carry > 0) { // check for any remaining carry to add another node
        tail.next = new Node(carry);
    }
    return head.next;
}

let node1 = new Node(9);
let node2 = new Node(9);
let node3 = new Node(6);

node1.next = node2;
node2.next = node3;

let node4 = new Node(1);
let node5 = new Node(0);
let node6 = new Node(2);

node4.next = node5;
node5.next = node6;

console.log(sumListReverse(node1, node4));