import { Sorter } from "../Sorter";

export class LinkedListCollection extends Sorter {
  public head: Node | null = null;

  add(data: number) {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;
    while (tail.next) tail = tail.next;
    tail.next = node;
  }

  get length(): number {
    if (!this.head) return 0;

    let counter = 1;
    let node = this.head;

    while (node.next) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  at(index: number): Node {
    if (!this.head) throw new Error("Index out of bounds");

    let counter = 0;
    let node: Node | null = this.head;

    while (node) {
      if (index === counter) return node;
      counter++;
      node = node.next;
    }

    throw new Error("Index out of bounds");
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) throw new Error("List is empty");
    return this.at(leftIndex).value > this.at(rightIndex).value;
  }

  swap(leftIndex: number, rightIndex: number): void {
    let leftNode = this.at(leftIndex);
    let rightNode = this.at(rightIndex);
    let leftHand = leftNode.value;
    leftNode.value = rightNode.value;
    rightNode.value = leftHand;
  }

  print(): void {
    if (!this.head) return;

    let node: Node | null = this.head;
    while (node) {
      console.log(node.value);
      node = node.next;
    }
  }
}

class Node {
  public next: Node | null = null;
  constructor(public value: number) {}
}
