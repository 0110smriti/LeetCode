// Goat Latin

// Time Complexity - O(n*m)

// Object to store vowels for quick lookup
const vowel = {
    "a": "a",
    "e": "e",
    "i": "i",
    "o": "o",
    "u": "u",
    "A": "A",
    "E": "E",
    "I": "I",
    "O": "O",
    "U": "U",
}

var toGoatLatin = function(sentence) {
    let output = '';  // Initialize an empty string for the final Goat Latin sentence
    sentence = sentence.split(' ');  // Split the sentence into an array of words

    // Loop through each word in the sentence
    for (let i = 0; i < sentence.length; i++) {
        let word = sentence[i];  // Get the current word
        
        // Check if the first letter is a vowel
        if (vowel[word[0]]) {
            word += "ma";  // If the word starts with a vowel, append "ma"
        } else {
            // If the word starts with a consonant, move the first letter to the end and add "ma"
            word = word.substr(1) + word[0] + "ma";
        }
        
        // Add "a" repeated (i+1) times at the end of the word
        for (let j = 0; j <= i; j++) {
            word += "a";
        }
        
        // Add the word to the output string with a space if it's not the last word
        output += word + (i !== sentence.length - 1 ? ' ' : '');
    }
    
    return output;  // Return the final Goat Latin sentence
};