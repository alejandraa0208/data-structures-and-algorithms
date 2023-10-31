function repeatedWord(string) {
  const words = string.toLowerCase().match(/\b\w+\b/g);
  if (!words) return null;

  const wordSet = new Set();

  for (const word of words) {
    if (wordSet.has(word)) {
      return word;
    }
    wordSet.add(word);
  }
  return null;
}

module.exports = repeatedWord;
