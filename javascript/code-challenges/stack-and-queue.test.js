const { Stack, Queue } = require('./stack-and-queue');

describe('Stack', () => {
  it('can successfully push onto a stack', () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.peek()).toBe(1);
  });

  it('can successfully push multiple values onto a stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.peek()).toBe(3);
  });

  it('can successfully pop off the stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    expect(stack.pop()).toBe(2);
  });

  it('can successfully empty a stack after multiple pops', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.pop();
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
  });

  it('can successfully peek the next item on the stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    expect(stack.peek()).toBe(2);
  });

  it('can successfully instantiate an empty stack', () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toBe(true);
  });

  it('calling pop on empty stack raises an exception', () => {
    const stack = new Stack();
    expect(() => stack.pop()).toThrowError('Stack is empty');
  });

  it('calling peek on empty stack raises an exception', () => {
    const stack = new Stack();
    expect(() => stack.peek()).toThrowError('Stack is empty');
  });
});

describe('Queue', () => {
  it('can successfully enqueue into a queue', () => {
    const queue = new Queue();
    queue.enqueue(1);
    expect(queue.peek()).toBe(1);
  });

  it('can successfully enqueue multiple values into a queue', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.peek()).toBe(1);
  });

  it('can successfully dequeue out of a queue the expected value', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.dequeue()).toBe(1);
  });

  it('can successfully peek into a queue, seeing the expected value', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.peek()).toBe(1);
  });

  it('can successfully empty a queue after multiple dequeues', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.dequeue();
    queue.dequeue();
    expect(queue.isEmpty()).toBe(true);
  });

  it('can successfully instantiate an empty queue', () => {
    const queue = new Queue();
    expect(queue.isEmpty()).toBe(true);
  });

  it('calling dequeue on empty queue raises an exception', () => {
    const queue = new Queue();
    expect(() => queue.dequeue()).toThrowError('Queue is empty');
  });

  it('calling peek on empty queue raises an exception', () => {
    const queue = new Queue();
    expect(() => queue.peek()).toThrowError('Queue is empty');
  });
});
