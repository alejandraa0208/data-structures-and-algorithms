const { fizzBuzzTree, TreeNode } = require('./tree-fizz-buzz');

describe('fizzBuzzTree', () => {
  it('should return null for an empty tree', () => {
    const tree = null;
    const result = fizzBuzzTree(tree);
    expect(result).toBe(null);
  });

  it('should transform values divisible by 3 to "Fizz"', () => {
    const tree = new TreeNode(9, [new TreeNode(6), new TreeNode(12)]);
    const result = fizzBuzzTree(tree);
    expect(result.value).toBe('Fizz');
    expect(result.children[0].value).toBe('Fizz');
    expect(result.children[1].value).toBe('Fizz');
  });

  it('should transform values divisible by 5 to "Buzz"', () => {
    const tree = new TreeNode(10, [new TreeNode(25), new TreeNode(7)]);
    const result = fizzBuzzTree(tree);
    expect(result.value).toBe('Buzz');
    expect(result.children[0].value).toBe('Buzz');
    expect(result.children[1].value).toBe('7'); // Not divisible by 3 or 5
  });

  it('should transform values divisible by both 3 and 5 to "FizzBuzz"', () => {
    const tree = new TreeNode(15, [new TreeNode(30), new TreeNode(45)]);
    const result = fizzBuzzTree(tree);
    expect(result.value).toBe('FizzBuzz');
    expect(result.children[0].value).toBe('FizzBuzz');
    expect(result.children[1].value).toBe('FizzBuzz');
  });

  it('should transform values not divisible by 3 or 5 to strings', () => {
    const tree = new TreeNode(7, [new TreeNode(2), new TreeNode(4)]);
    const result = fizzBuzzTree(tree);
    expect(result.value).toBe('7');
    expect(result.children[0].value).toBe('2');
    expect(result.children[1].value).toBe('4');
  });
});

