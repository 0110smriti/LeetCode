// Maximum score after splitting a string


// Time Complexity - O(n)
var maxScore = function(s) {
    const len = s.length; // Get the length of the input string
    let left = s[0] === '0' ? 1 : 0; // Initialize the left score based on the first character
    let right = 0; // Initialize the right score

    // Calculate the initial right score by counting all '1's in the string except the first character
    for(let i = 1; i < len; i++) {
        if(s[i] === '1') {
            right++;
        }
    }

    let max = left + right; // Initialize the maximum score with the initial left and right scores

    // Iterate through the string from the second character to the second last character
    for(let i = 1; i < len - 1; i++) {
        if(s[i] === '0') {
            left++; // Increment left score if the current character is '0'
        } else {
            right--; // Decrement right score if the current character is '1'
        }

        // Update the maximum score if the current left + right score is greater than the previous maximum
        if(left + right > max) {
            max = left + right;
        }
    }

    return max; // Return the maximum score
};