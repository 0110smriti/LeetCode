// First Unique Character in a String

// Time Complexity - O(n)

var firstUniqChar = function(s) {
    let counts = {};  // Object to store the count and first occurrence index of each character
    let len = s.length;  // Length of the input string

    // First loop: Populate the counts object
    for (let i = 0; i < len; i++) {
        if (!counts[s[i]]) {  // If the character is not yet in the object
            counts[s[i]] = { index: i, count: 1 };  // Store its index and set count to 1
        } else {
            counts[s[i]].count++;  // Increment the count if the character is already in the object
        }
    }

    let index = len;  // Initialize index to the length of the string (which is out of bounds)

    // Second loop: Find the first unique character by checking the counts object
    for (let key in counts) {
        if (counts[key].count === 1 && counts[key].index < index) {
            index = counts[key].index;  // Update index if the current character is unique and appears earlier
        }
    }

    if (index === len) return -1;  // If index is still the length of the string, no unique character was found
    return index;  // Return the index of the first unique character
};