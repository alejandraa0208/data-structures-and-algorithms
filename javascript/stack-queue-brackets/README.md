# Challenge

Multi-bracket Validation.

## Whiteboard Process

![Brackets](./Screenshot%202023-10-04%20at%2010.03.32%20PM.png)

## Approach & Efficiency

### Approach

Initialize an empty stack to keep track of opening brackets encountered while processing the string.

Iterate through each character in the input string:

If the character is an opening bracket ('(', '[', or '{'), push it onto the stack.
If the character is a closing bracket (')', ']', or '}'), perform the following checks:
If the stack is empty, return false because there is no matching opening bracket.
Pop the top element from the stack and check if it matches the current closing bracket:
If they match, continue to the next character.
If they do not match, return false because the brackets are unbalanced.
After processing all characters in the string, check if the stack is empty:

If the stack is empty, return true because all brackets are balanced.
If the stack is not empty, return false because there are unmatched opening brackets.

Time Complexity
The time complexity of this approach is O(n), where n is the length of the input string. We iterate through the string once, and each character operation (push, pop, and comparisons) takes constant time.

Space Complexity
The space complexity is O(n) in the worst case. In the worst case scenario, if the string contains only opening brackets, they will all be pushed onto the stack.

## Solution

function validateBrackets(str) {

  const stack = [];

  for (const char of str) {

    if (char === '(' || char === '[' ||

    char === '{') {

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

// Example usage:

console.log(validateBrackets("{[()]}")); // true

console.log(validateBrackets("{[(])}")); // false
