// Longest Common Prefix

// Time Complexity - O(n*m)

var longestCommonPrefix = function(strs) {
    // Initialize the prefix as an empty string
    let prefix = "";

    // Find the length of the shortest string in the array
    let len = strs.reduce((prev, curr) => curr.length < prev ? curr.length : prev, strs[0].length);

    // Initialize an index variable to iterate over the characters
    let i = 0;

    // Iterate through the characters up to the length of the shortest string
    while (i < len) {
        // Compare the current character of each string with the first string
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== strs[j-1][i]) {
                // If a mismatch is found, return the current prefix
                return prefix;
            }
        }
        // If all strings have the same character at index i, add it to the prefix
        prefix += strs[0][i];
        i++;
    }

    // Return the longest common prefix
    return prefix;
};