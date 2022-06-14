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
    // loop through and add value because we know the digits, can either create new linked list or just update listOne
    // how the fuck to carry the 1?! -> update the value of sumList.next.value by 1
    // need to keep track of prev for sumList because might have to add node
    let sumList = listOne;
    let prev = null;
    while (sumList || listTwo) {
        if (listTwo && sumList) {
            let sum = listTwo.value + sumList.value;
            if (sum > 9) {
                if (sumList.next) {
                    sumList.next.value++;
                } else if (listTwo.next) {
                    listTwo.next.value++;
                } else {
                    sumList.next = new Node(1);
                }
                sumList.value = sum - 10;
            } else {
                sumList.value = sum;
            }
        } else if (listTwo && prev) {
            prev.next = new Node(listTwo.value);
        }
        prev = sumList;
        if (sumList) {
            sumList = sumList.next;
        } 
        if (listTwo) {
            listTwo = listTwo.next;
        }
    }
    return listOne;
}


// console.log(sumListReverse(node1, node4));

/**
 * digits are stored in normal order, can't just add because you don't know the length of array so might be added the tens place to hundreds place, etc
 * store values in array, join, parseInt and sum
 * N = |listOne| && M = |listTwo|
 * Time Complexity: O(N + M)
 * Additional Space Complexity: O(N + M)
 */
const sumList = (listOne, listTwo) => {
    let listOneArray = [];
    let listTwoArray = [];
    while (listOne) {
        listOneArray.push(listOne.value);
        listOne = listOne.next;
    }
    while (listTwo) {
        listTwoArray.push(listTwo.value);
        listTwo = listTwo.next;
    }
    let sumArray = (parseInt(listOneArray.join(""), 10) + parseInt(listTwoArray.join(""), 10)).toString().split("");
    console.log(sumArray);
    let node = new Node(parseInt(sumArray[0], 10));
    let currentNode = node;
    for (let i = 1; i < sumArray.length; i++) {
        currentNode.next = new Node(parseInt(sumArray[i], 10));
        currentNode = currentNode.next;
    }
    return node;
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


console.log(sumList(node1, node4));