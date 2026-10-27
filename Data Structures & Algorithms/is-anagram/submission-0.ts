class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length){
            return false;
        }

        const charCount = new Map<string, number>();

  // 1. Count frequencies of characters in string 's'
  for (const char of s) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  // 2. Subtract frequencies using string 't'
  for (const char of t) {
    if (!charCount.has(char)) {
      return false; // Character not in 's' or we used too many of them
    }

    const currentCount = charCount.get(char)!; // '!' tells TS it's defined
    if (currentCount === 1) {
      charCount.delete(char); // Clean up memory if count hits 0
    } else {
      charCount.set(char, currentCount - 1);
    }
  }

  // 3. If the map is completely empty, it's a valid anagram
  return charCount.size === 0;

    }
}
