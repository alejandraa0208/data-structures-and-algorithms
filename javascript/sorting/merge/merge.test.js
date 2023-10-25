const mergeSort = require('./merge');

describe('Merge Sort', () => {
  it('should sort an array of numbers in ascending order', () => {
    const input = [38, 27, 43, 3, 9, 82, 10];
    const expected = [3, 9, 10, 27, 38, 43, 82];
    const result = mergeSort(input);
    expect(result).toEqual(expected);
  });

  it('should sort an array of negative numbers in ascending order', () => {
    const input = [-5, -2, -9, -3, -6];
    const expected = [-9, -6, -5, -3, -2];
    const result = mergeSort(input);
    expect(result).toEqual(expected);
  });

  it('should sort an already sorted array', () => {
    const input = [1, 2, 3, 4, 5];
    const expected = [1, 2, 3, 4, 5];
    const result = mergeSort(input);
    expect(result).toEqual(expected);
  });

  it('should handle an empty array', () => {
    const input = [];
    const expected = [];
    const result = mergeSort(input);
    expect(result).toEqual(expected);
  });

  it('should handle an array with a single element', () => {
    const input = [42];
    const expected = [42];
    const result = mergeSort(input);
    expect(result).toEqual(expected);
  });
});
