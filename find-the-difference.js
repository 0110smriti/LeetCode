// Find the difference

// Solution - Time O(n) -> linear

// Make use of hashmaps
// for first string, store the count of every character in map
// for string t, if the charcter is not found in the object, return that character
// if count is found for that character, then decrease the count by 1
var findTheDifference = function(s, t) {
    let char_counts = {}
    let len = s.length;
    for(let i=0; i<len; i++) {
        char_counts[s[i]] = (char_counts[s[i]] || 0) + 1;
    }
    let t_len = t.length;
    for(let i=0; i<t_len; i++) {
        if(!char_counts[t[i]]) {
            return t[i]
        }else{
           char_counts[t[i]] -= 1 
        }
    }
};