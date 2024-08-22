// Index of first Occurrence in a String

// Time Complexity - O((l1 - l2 + 1) * l2)

var strStr = function(haystack, needle) {
    let l1 = haystack.length;  // Length of the haystack string
    let l2 = needle.length;    // Length of the needle string
    let i = 0;  // Pointer to track the start of the potential match in haystack
    let j = 0;  // Pointer to traverse the haystack string
    let k = 0;  // Pointer to traverse the needle string
    
    // Loop through the haystack until we either find a match or reach the end
    while (j < l1 && k < l2) {
        if (haystack[j] === needle[k]) {
            // If characters match, move both pointers forward
            j++;
            k++;
            // If we have matched the entire needle, return the starting index
            if (k === l2) {
                return i;
            }
        } else if (k > 0 && haystack[j] !== needle[k]) {
            // If characters don't match after some matching characters, reset pointers
            j = i + 1;  // Move j to the next character after the initial match start
            i = i + 1;  // Move i to the next starting point
            k = 0;  // Reset needle pointer to start
        } else {
            // If no match has been found, move both i and j to the next character
            j++;
            i = j;
            k = 0;  // Reset needle pointer to start
        }
    }
    
    // If no match is found, return -1
    return -1;
};