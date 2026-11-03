class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const seen = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const current = nums[i];
        const complement = target - current;

        // Check if the complement already exists in our map
        if (seen.has(complement)) {
            return [seen.get(complement)!, i];
        }

        // Otherwise, record the current number and its index
        seen.set(current, i);
    }

    return [];
    }
}
