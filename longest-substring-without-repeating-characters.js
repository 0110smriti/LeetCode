// Longest substring without repeating characters

var lengthOfLongestSubstring = function(s) {
    // Assign both pointers to 0
    let i =0;
    let j = 0;

    // Create a set to keep track of unique characters
    const set = new Set()
    let l = s.length;
    let max = 0;

    // run a loop till second pointer is less than length of array
    while(j<l) {
        // if set doesn't have the element
        // add it to the set
        // calculate & update max length
        // increment the pointer
        if(!set.has(s[j])) {
            set.add(s[j]);
            max = Math.max(max, set.size);
            j++;
        }
        // if set already has the element
        // delete the element of first pointer
        // increment the first pointer
        else{
            set.delete(s[i]);
            i++;
        }
    }
    return max
};