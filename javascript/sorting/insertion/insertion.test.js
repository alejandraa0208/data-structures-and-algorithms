const { InsertionSort } = require('./insertion');

describe('Insertion Sort', () => {
  it('should sort an array of numbers in ascending order', () => {
    const input = [5, 2, 9, 3, 6];
    const expected = [2, 3, 5, 6, 9];
    const result = InsertionSort(input);
    expect(result).toEqual(expected);
  });

  it('should sort an array of negative numbers in ascending order', () => {
    const input = [-5, -2, -9, -3, -6];
    const expected = [-9, -6, -5, -3, -2];
    const result = InsertionSort(input);
    expect(result).toEqual(expected);
  });

  it('should sort an already sorted array', () => {
    const input = [1, 2, 3, 4, 5];
    const expected = [1, 2, 3, 4, 5];
    const result = InsertionSort(input);
    expect(result).toEqual(expected);
  });

  it('should handle an empty array', () => {
    const input = [];
    const expected = [];
    const result = InsertionSort(input);
    expect(result).toEqual(expected);
  });

  it('should handle an array with a single element', () => {
    const input = [42];
    const expected = [42];
    const result = InsertionSort(input);
    expect(result).toEqual(expected);
  });
});
