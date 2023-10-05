const validateBrackets = require('./brackets');

describe('validateBrackets', () => {
  it('should return true for balanced brackets', () => {
    expect(validateBrackets('')).toBe(true); // Empty string is balanced
    expect(validateBrackets('{}')).toBe(true); // Balanced curly brackets
    expect(validateBrackets('()')).toBe(true); // Balanced round brackets
    expect(validateBrackets('[]')).toBe(true); // Balanced square brackets
    expect(validateBrackets('{[()]}')).toBe(true); // Mixed balanced brackets
    expect(validateBrackets('{[()]()}')).toBe(true); // Nested balanced brackets
  });

  it('should return false for unbalanced brackets', () => {
    expect(validateBrackets('{')).toBe(false); // Unbalanced curly bracket
    expect(validateBrackets('[')).toBe(false); // Unbalanced square bracket
    expect(validateBrackets('(')).toBe(false); // Unbalanced round bracket
    expect(validateBrackets('}')).toBe(false); // Unbalanced curly bracket
    expect(validateBrackets(']')).toBe(false); // Unbalanced square bracket
    expect(validateBrackets(')')).toBe(false); // Unbalanced round bracket
    expect(validateBrackets('{[()]')).toBe(false); // Unbalanced nested brackets
    expect(validateBrackets('{[()]}(')).toBe(false); // Extra closing bracket
  });

  it('should return true for strings with no brackets', () => {
    expect(validateBrackets('Hello, World!')).toBe(true);
    expect(validateBrackets('12345')).toBe(true);
  });
});
