// Ransom note

// Solution - linear O(n)

var canConstruct = function(ransomNote, magazine) {
    let r_len = ransomNote.length;
    let m_len = magazine.length;
    // Create an object to track the characters and their lengths
    let characters = {}
    // for each character in magazine
    // add character as key to the object and increment it's count
    for(let i=0; i<m_len; i++) {
        characters[magazine[i]] = (characters[magazine[i]] || 0) + 1;
    }
    // For each character in the ransomNote
    // if character is present, decrease the count in the object
    // else return false
    for(let i=0; i<r_len; i++) {
        if(characters[ransomNote[i]]) {
            characters[ransomNote[i]] -= 1
        }else{
            return false;
        }
    }
    return true;
};