// Reverse Vowels of a string

// Time Complexity - O(n)

var reverseVowels = function(s) {
    const vowels = 'aeiouAEIOU';  // Define a string containing all vowels (both lowercase and uppercase)
    let l = 0;  // Initialize a pointer 'l' to the start of the string
    let r = s.length - 1;  // Initialize a pointer 'r' to the end of the string
    const s_array = s.split('');  // Convert the string into an array to allow in-place modifications
    
    // Loop until the two pointers meet
    while (l < r) {
        // Move the 'l' pointer right until a vowel is found or 'l' crosses 'r'
        while (l < r && !vowels.includes(s_array[l])) {
            l++;
        }
        
        // Move the 'r' pointer left until a vowel is found or 'r' crosses 'l'
        while (l < r && !vowels.includes(s_array[r])) {
            r--;
        }
        
        // Swap the vowels at the 'l' and 'r' positions
        [s_array[l], s_array[r]] = [s_array[r], s_array[l]];
        
        // Move both pointers towards the center
        l++;
        r--;
    }
    
    return s_array.join('');  // Convert the array back to a string and return it
};