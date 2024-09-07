// Faulty Keyboard

// Time Complexity - O(n²)

var finalString = function(s) {
    // Initialize an empty string 'str' to build the final string.
    let str = "";
    
    // Get the length of the input string 's'.
    let len = s.length;
    
    // Iterate through each character in the string 's'.
    for(let i = 0; i < len; i++) {
        // If the current character is 'i', reverse the current string 'str'.
        if(s[i] === 'i') {
            str = str.split('').reverse().join('');
        } else {
            // Otherwise, append the current character to the string 'str'.
            str += s[i];
        }
    }
    
    // Return the final constructed string.
    return str;
};