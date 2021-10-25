class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  insert(value) {
    if (!value) return;
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
      this.length++;
    }
    return this;
  }
}

class Solution {
  createLinkedList() {
    return {
      head: null,
      tail: null,
    };
  }

  quickSort(head) {
    const pivotNode = this.chooseRandomPivot(head);
    if (!pivotNode) return head;
    const left = this.createLinkedList();
    const right = this.createLinkedList();
    this.walkThroughHeadAndSet(head, left, right, pivotNode.data);
    return this.plug(
      pivotNode,
      left.head && this.quickSort(left.head),
      right.head && this.quickSort(right.head)
    );
  }

  chooseRandomPivot(head) {
    const elements = [];
    let currentNode = head;
    while (currentNode) {
      elements.push(currentNode);
      currentNode = currentNode.next;
    }
    if (elements.length === 1) return null;
    const i = Math.abs(Math.floor(Math.random() * elements.length - 1));
    return elements[i];
  }

  walkThroughHeadAndSet(head, left, right, pivot) {
    let currentNode = head;
    while (currentNode) {
      if (currentNode.data === pivot) currentNode = currentNode.next;
      if (!currentNode) break;
      const tmp = currentNode.next;
      this.insert(currentNode, currentNode.data < pivot ? left : right);
      currentNode = tmp;
    }
  }

  insert(node, ll) {
    node.next = null;
    if (!ll.head) {
      ll.head = node;
      ll.tail = node;
    } else {
      ll.tail.next = node;
      ll.tail = node;
    }
  }

  plug(pivot, leftHead, rightHead) {
    if (leftHead) {
      let lastLeftNode = leftHead;
      while (lastLeftNode.next) lastLeftNode = lastLeftNode.next;
      lastLeftNode.next = pivot;
    }
    pivot.next = rightHead;
    return leftHead || pivot;
  }

  print(head) {
    const arr = [];
    let currentNode = head;
    while (currentNode) {
      arr.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return console.log(arr);
  }
}
