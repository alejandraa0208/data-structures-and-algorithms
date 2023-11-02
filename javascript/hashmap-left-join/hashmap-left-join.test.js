const leftJoin = require('./hashmap-left-join');

describe('leftJoin', () => {

  it('should handle empty maps', () => {
    const leftMap = new Map();
    const rightMap = new Map();

    const result = leftJoin(leftMap, rightMap);
    expect(result).toEqual([]);
  });

  it('should handle maps with no common keys', () => {
    const leftMap = new Map([
      ['apple', 'red'],
      ['banana', 'yellow'],
    ]);

    const rightMap = new Map([
      ['cherry', 'red'],
      ['date', 'brown'],
    ]);

    const expectedResult = [
      ['apple', 'red'],
      ['banana', 'yellow'],
    ];

    const result = leftJoin(leftMap, rightMap);
    expect(result).toEqual(expectedResult);
  });

  it('should handle maps with null or undefined values', () => {
    const leftMap = new Map([
      ['key1', null],
      ['key2', undefined],
      ['key3', 'value'],
    ]);

    const rightMap = new Map([
      ['key1', 'rightValue'],
      ['key2', 'rightValue'],
      ['key3', null],
    ]);

    const expectedResult = [
      ['key1', null, 'rightValue'],
      ['key2', undefined, 'rightValue'],
      ['key3', 'value', null],
    ];

    const result = leftJoin(leftMap, rightMap);
    expect(result).toEqual(expectedResult);
  });
});
