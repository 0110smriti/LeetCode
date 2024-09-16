// Third Maximum Number

// Time Complexity - O(n)

var thirdMax = function(nums) {
    let max = Number.NEGATIVE_INFINITY;  // Variable to store the maximum value
    let s_max = Number.NEGATIVE_INFINITY;  // Variable to store the second maximum value
    let t_max = Number.NEGATIVE_INFINITY;  // Variable to store the third maximum value
    const len = nums.length;  // Length of the input array
    
    for (let i = 0; i < len; i++) {
        // Update max, s_max, and t_max if nums[i] is greater than max
        if (nums[i] > max) {
            t_max = s_max;  // Move second max to third max
            s_max = max;    // Move max to second max
            max = nums[i];  // Update max with the current number
        }
        // Update s_max and t_max if nums[i] is between max and s_max
        else if (nums[i] > s_max && nums[i] < max) {
            t_max = s_max;  // Move second max to third max
            s_max = nums[i];  // Update second max with the current number
        }
        // Update t_max if nums[i] is between s_max and t_max
        else if (nums[i] > t_max && nums[i] < s_max) {
            t_max = nums[i];  // Update third max with the current number
        }
    }
    
    // If t_max wasn't updated (i.e., less than three unique numbers), return max
    if (s_max === t_max || t_max === Number.NEGATIVE_INFINITY) {
        return max;
    }
    
    return t_max;  // Return the third maximum number
};