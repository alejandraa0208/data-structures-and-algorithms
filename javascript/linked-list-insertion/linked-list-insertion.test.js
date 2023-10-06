const LinkedList = require('./index'); // Adjust the import path as needed

describe('Testing the Linked List class', () => {

  test('Can successfully add a node to the end of the linked list', () => {
    const linkedList = new LinkedList();
    linkedList.append('first');
    expect(linkedList.toString()).toBe('{ first } -> NULL');
  });

  test('Can successfully add multiple nodes to the end of a linked list', () => {
    const linkedList = new LinkedList();
    linkedList.append('first');
    linkedList.append('second');
    linkedList.append('third');
    expect(linkedList.toString()).toBe('{ first } -> { second } -> { third } -> NULL');
  });

  test('Can successfully insert a node before a node located in the middle of a linked list', () => {
    const linkedList = new LinkedList();
    linkedList.append('first');
    linkedList.append('third');
    linkedList.insertBefore('third', 'second');
    expect(linkedList.toString()).toBe('{ first } -> { second } -> { third } -> NULL');
  });

  test('Can successfully insert a node before the first node of a linked list', () => {
    const linkedList = new LinkedList();
    linkedList.append('first');
    linkedList.insertBefore('first', 'newFirst');
    expect(linkedList.toString()).toBe('{ newFirst } -> { first } -> NULL');
  });

  test('Can successfully insert a node after a node in the middle of the linked list', () => {
    const linkedList = new LinkedList();
    linkedList.append('first');
    linkedList.append('second');
    linkedList.insertAfter('first', 'newNode');
    expect(linkedList.toString()).toBe('{ first } -> { newNode } -> { second } -> NULL');
  });

  test('Can successfully insert a node after the last node of the linked list', () => {
    const linkedList = new LinkedList();
    linkedList.append('first');
    linkedList.insertAfter('first', 'second');
    expect(linkedList.toString()).toBe('{ first } -> { second } -> NULL');
  });

});
