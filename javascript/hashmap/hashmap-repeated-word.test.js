const repeatedWord = require('./hashmap-repeated-word');

test('Test Case 1: Simple case with a repeated word', () => {
  const result = repeatedWord('I love programming. Programming is fun.');
  expect(result).toBe('programming');
});

test('Test Case 2: No repeated words', () => {
  const result = repeatedWord('This is a test sentence without any repeats.');
  expect(result).toBeNull();
});

test('Test Case 3: Case-insensitive check', () => {
  const result = repeatedWord('I have an Apple and a apple.');
  expect(result.toLowerCase()).toBe('apple');
});

