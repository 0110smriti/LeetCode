// Majority Element

// Solution 1 - Space O(n), Time - O(n)
// Use Hash map
// Store element and it's count in an object/map
// Traverse through the object and return the key where value is greater than half of length of the array
var majorityElement = function(nums) {
    const counts = {}
    let l = nums.length;
    for(let i=0; i<l; i++) {
     counts[nums[i]] = (counts[nums[i]] || 0) + 1;
    }
    for(k in counts){
     if(counts[k] > l/2) {
         return k
     }
    }
 };


// Solution 2 - Time O(n)
// Boyer-Moore majority voting algorithm
var majorityElement = function(nums) {
    let ans = 0;
    let counts = 0;
    let l = nums.length;
    for(let i=0; i<l; i++) {
        if(counts === 0) {
            ans = nums[i];
        }
        if(ans === nums[i]) {
            counts++;
        }else{
            counts--;
        }
    }
    return ans;
};