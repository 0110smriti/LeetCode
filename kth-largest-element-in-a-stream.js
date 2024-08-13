// kth Largest Element in a Stream

/** 
 * Time Complexity:
 * - The 'add' method has a time complexity of O(N log N), where N is the length of the nums array.
 * - This is because the 'sort' method is called every time a new element is added, which sorts the entire array.
 * - This approach is not efficient for large arrays because sorting has to be done every time an element is added.
 */


/**
 * @param {number} k
 * @param {number[]} nums
 * The constructor takes in an integer 'k' and an array of integers 'nums'.
 * It initializes the class with 'k' and 'nums', which will be used to find the k-th largest element.
 */
var KthLargest = function(k, nums) {
    this.k = k;
    this.nums = nums;
};

/** 
 * @param {number} val
 * @return {number}
 * The 'add' method adds a new value 'val' to the nums array, sorts it in descending order,
 * and returns the k-th largest element, which is the (k-1)th index of the sorted array.
 */
KthLargest.prototype.add = function(val) {
    this.nums.push(val);  // Add the new value to the nums array
    this.nums.sort((a, b) => b - a);  // Sort the array in descending order
    return this.nums[this.k - 1];  // Return the k-th largest element
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */