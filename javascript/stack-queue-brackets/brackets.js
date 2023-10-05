function validateBrackets(str) {
  const stack = [];

  for (const char of str) {
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    } else if (char === ')' || char === ']' || char === '}') {
      if (stack.length === 0) {
        return false; // Unbalanced: no matching opening bracket
      }
      const top = stack.pop();
      if (!isMatching(top, char)) {
        return false; // Unbalanced: mismatched brackets
      }
    }
  }

  return stack.length === 0; // Balanced if stack is empty
}

function isMatching(opening, closing) {
  return (
    (opening === '(' && closing === ')') ||
    (opening === '[' && closing === ']') ||
    (opening === '{' && closing === '}')
  );
}

module.exports = validateBrackets;
