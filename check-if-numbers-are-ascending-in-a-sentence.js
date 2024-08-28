// Check if numbers are acsending in a sentence

// Time Complexity - O(n)

var areNumbersAscending = function(s) {
    // Split the string into words and filter out non-numeric words.
    const words = s.split(' ')
        .filter((word) => parseInt(word)) // Keep only words that can be converted to numbers.
        .map((w) => parseInt(w)); // Convert the numeric words to integers.

    let len = words.length;
    let min = words[0]; // Initialize the minimum value with the first number in the list.

    // Loop through the numbers starting from the second element.
    for (let i = 1; i < len; i++) {
        // If the current number is less than or equal to the previous one, return false.
        if (words[i] <= min) {
            return false;
        }
        // Update the minimum to the current number.
        min = words[i];
    }

    // If all numbers are in strictly increasing order, return true.
    return true;
};