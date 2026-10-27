class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
       if (s.length !== t.length) {
        return false;
    }

    // A typed array of size 26 for letters 'a' through 'z'
    // Int32Array is heavily optimized in V8 (JavaScript's engine)
    const count = new Int32Array(26);
    const aCharCode = 97; // ASCII code for 'a'

    // Increment for s, decrement for t all in one single loop
    for (let i = 0; i < s.length; i++) {
        count[s.charCodeAt(i) - aCharCode]++;
        count[t.charCodeAt(i) - aCharCode]--;
    }

    // Check if all counts balanced out to 0
    for (let i = 0; i < 26; i++) {
        if (count[i] !== 0) {
            return false;
        }
    }

    return true;
}
}
