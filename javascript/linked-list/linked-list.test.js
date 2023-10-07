'use strict';

const LinkedList = require('./linked-list');

describe('Testing the Linked List class', () => {

  test('Can successfully instantiate an empty linked list', () => {
    const linkedList = new LinkedList();
    expect(linkedList.head).toEqual(null);
  });

  test('Can properly insert into the linked list', () => {
    const linkedList = new LinkedList();
    linkedList.insert('first');
    expect(linkedList.toString()).toBe('{ first } -> NULL');
  });

  test('The head property will properly point to the first node in the linked list', () => {
    const linkedList = new LinkedList();
    linkedList.insert('first');
    expect(linkedList.head.value).toBe('first');
  });

  test('Can properly insert multiple nodes into the linked list', () => {
    const linkedList = new LinkedList();
    linkedList.insert('first');
    linkedList.insert('second');
    linkedList.insert('third');
    expect(linkedList.toString()).toBe('{ third } -> { second } -> { first } -> NULL');
  });

  test('Will return true when finding a value within the linked list that exists', () => {
    const linkedList = new LinkedList();
    linkedList.insert('first');
    linkedList.insert('second');
    expect(linkedList.includes('second')).toBe(true);
  });

  test('Will return false when searching for a value in the linked list that does not exist', () => {
    const linkedList = new LinkedList();
    linkedList.insert('first');
    linkedList.insert('second');
    expect(linkedList.includes('third')).toBe(false);
  });

  test('Can properly return a collection of all the values that exist in the linked list', () => {
    const linkedList = new LinkedList();
    linkedList.insert('first');
    linkedList.insert('second');
    expect(linkedList.toString()).toBe('{ second } -> { first } -> NULL');
  });

});
