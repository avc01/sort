"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedListCollection = void 0;
const Sorter_1 = require("../Sorter");
class LinkedListCollection extends Sorter_1.Sorter {
    constructor() {
        super(...arguments);
        this.head = null;
    }
    add(data) {
        const node = new Node(data);
        if (!this.head) {
            this.head = node;
            return;
        }
        let tail = this.head;
        while (tail.next)
            tail = tail.next;
        tail.next = node;
    }
    get length() {
        if (!this.head)
            return 0;
        let counter = 1;
        let node = this.head;
        while (node.next) {
            counter++;
            node = node.next;
        }
        return counter;
    }
    at(index) {
        if (!this.head)
            throw new Error("Index out of bounds");
        let counter = 0;
        let node = this.head;
        while (node) {
            if (index === counter)
                return node;
            counter++;
            node = node.next;
        }
        throw new Error("Index out of bounds");
    }
    compare(leftIndex, rightIndex) {
        if (!this.head)
            throw new Error("List is empty");
        return this.at(leftIndex).value > this.at(rightIndex).value;
    }
    swap(leftIndex, rightIndex) {
        let leftNode = this.at(leftIndex);
        let rightNode = this.at(rightIndex);
        let leftHand = leftNode.value;
        leftNode.value = rightNode.value;
        rightNode.value = leftHand;
    }
    print() {
        if (!this.head)
            return;
        let node = this.head;
        while (node) {
            console.log(node.value);
            node = node.next;
        }
    }
}
exports.LinkedListCollection = LinkedListCollection;
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
