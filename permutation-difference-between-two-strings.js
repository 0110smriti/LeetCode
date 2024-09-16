// Permutation Difference Between Two Strings

// Time Complexity - O(n^2)

var findPermutationDifference = function(s, t) {
    let diff = 0;  // Initialize the difference count to 0
    let n = s.length;  // Get the length of the string s (assume s and t are of the same length)
    
    // Iterate through each character in string s
    for(let i = 0; i < n; i++) {
        // Find the position of the character s[i] in string t
        // and calculate the absolute difference between current index in s (i) and the index in t
        diff += Math.abs(i - t.indexOf(s[i]));
    }
    
    return diff;  // Return the total difference
};
