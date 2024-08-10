// Contains Duplicate

// Solution - space - O(n), time - O(n)

var containsDuplicate = function(nums) {
    let len = nums.length;
    // create an object
    let count = {}
    for(let i=0; i<len; i++) {
        // if the number is not present in the object as key
        // add the number to the object
        if(!count.hasOwnProperty(nums[i])) {
            count[nums[i]] = 1
        }
        else{
            // if key is already present
            // it means the number is repeated
            // return true directly
            return true;
        }
    }
    return false;
};