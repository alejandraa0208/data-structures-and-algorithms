function leftJoin(leftMap, rightMap) {
  const result = [];

  for (const [key, value] of leftMap) {
    const leftValue = value;
    const rightValue = rightMap.get(key);

    if (rightValue !== undefined) {
      result.push([key, leftValue, rightValue]);
      rightMap.delete(key); // Remove the key from rightMap
    } else {
      result.push([key, leftValue]);
    }
  }

  return result;
}

module.exports = leftJoin;

