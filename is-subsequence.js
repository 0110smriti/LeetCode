// Is subsequence

// Time complexity - O(n)

var isSubsequence = function(s, t) {
    let t_pointer = 0; // Pointer for string 't'
    let s_pointer = 0; // Pointer for string 's'
    const t_len = t.length;
    const s_len = s.length;
    
    // If 's' is an empty string, it's trivially a subsequence of 't'.
    if (s === "") return true;

    // If 's' is longer than 't', it cannot be a subsequence.
    if (s_len > t_len) return false;

    // Traverse the string 't'
    while (t_pointer < t_len) {
        // Check if the current character in 't' matches the current character in 's'
        if (t[t_pointer] === s[s_pointer]) {
            s_pointer++; // Move the pointer in 's' forward
            // If we have matched all characters in 's', return true
            if (s_pointer === s_len) {
                return true;
            }
        }
        t_pointer++; // Move the pointer in 't' forward
    }

    // If we exit the loop without finding all characters of 's', return false
    return false;
};