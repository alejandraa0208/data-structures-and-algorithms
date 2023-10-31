# Challenge

Find the first repeated word in a book.

## Feature Tasks

Write a function called repeated word that finds the first word to occur more than once in a string
Arguments: string
Return: string

## Whiteboard Process

 No whiteboard needed.

## Approach & Efficiency

The approach for solving the "repeatedWord" problem is as follows:

1. Convert the input string to lowercase to ensure case-insensitive comparison.

2. Use a regular expression to extract words from the string. In JavaScript, you can use str.match(/\b\w+\b/g) to achieve this.

3. Initialize an empty Set called "wordSet" to keep track of unique words encountered.

4. Iterate through each word extracted from the string.

5. For each word, check if it is already in the "wordSet."

6. If it is, return the word as the first repeated word.

7. If not, add the word to the "wordSet."

8. If no repeated word is found after processing all words, return null to indicate that there are no repeated words in the string.

The time complexity of this approach is O(n), where n is the number of words in the input string. We iterate through the words once to check for duplicates and add them to the Set. The space complexity is also O(n) because, in the worst case, all unique words from the string are stored in the Set.
