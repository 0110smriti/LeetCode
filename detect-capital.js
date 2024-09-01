// Detect Capital

// Time Complexity - O(n)

var detectCapitalUse = function(word) {
    let len = word.length; // Store the length of the word
    if(len === 1) return true; // If the word has only one character, it's always correctly capitalized

    // Case 1: The first letter is lowercase, all subsequent letters must be lowercase
    if(word[0] >= 'a' && word[0] <= 'z') {
        for(let i=1; i<len; i++) {
            // If any subsequent letter is uppercase, return false
            if(word[i] >= 'A' && word[i] <= 'Z') {
                return false;
            }
        }
        return true; // All letters are lowercase
    }

    // Case 2: The first letter is uppercase, and the second letter is uppercase
    if(word[0] >= 'A' && word[0] <= 'Z' && word[1] >= 'A' && word[1] <= 'Z') {
        for(let i=2; i<len; i++) {
            // If any subsequent letter is lowercase, return false
            if(word[i] >= 'a' && word[i] <= 'z') {
                return false;
            }
        }
        return true; // All letters are uppercase
    }

    // Case 3: The first letter is uppercase, and the second letter is lowercase
    if(word[0] >= 'A' && word[0] <= 'Z' && word[1] >= 'a' && word[1] <= 'z') {
        for(let i=2; i<len; i++) {
            // If any subsequent letter is uppercase, return false
            if(word[i] >= 'A' && word[i] <= 'Z') {
                return false;
            }
        }
        return true; // All subsequent letters are lowercase
    }
};