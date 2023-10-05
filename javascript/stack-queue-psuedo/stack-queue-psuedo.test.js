const { PseudoQueue, Stack } = require('./stack-queue-psuedo');

describe('PseudoQueue', () => {
  let pseudoQueue;

  beforeEach(() => {
    pseudoQueue = new PseudoQueue();
  });

  it('should enqueue and dequeue elements correctly', () => {
    pseudoQueue.enqueue(10);
    pseudoQueue.enqueue(15);
    pseudoQueue.enqueue(20);

    expect(pseudoQueue.dequeue()).toBe(10);
    expect(pseudoQueue.dequeue()).toBe(15);
    expect(pseudoQueue.dequeue()).toBe(20);
    expect(pseudoQueue.dequeue()).toBeNull();
  });

  it('should handle enqueue and dequeue with multiple elements', () => {
    pseudoQueue.enqueue(5);
    pseudoQueue.enqueue(10);
    pseudoQueue.enqueue(15);

    expect(pseudoQueue.dequeue()).toBe(5);
    expect(pseudoQueue.dequeue()).toBe(10);

    pseudoQueue.enqueue(20);

    expect(pseudoQueue.dequeue()).toBe(15);
    expect(pseudoQueue.dequeue()).toBe(20);
    expect(pseudoQueue.dequeue()).toBeNull();
  });

  it('should handle dequeue when the queue is empty', () => {
    expect(pseudoQueue.dequeue()).toBeNull();
  });

  it('should handle enqueue and dequeue with mixed operations', () => {
    pseudoQueue.enqueue(5);
    pseudoQueue.enqueue(10);

    expect(pseudoQueue.dequeue()).toBe(5);

    pseudoQueue.enqueue(15);

    expect(pseudoQueue.dequeue()).toBe(10);
    expect(pseudoQueue.dequeue()).toBe(15);
    expect(pseudoQueue.dequeue()).toBeNull();
  });
});
