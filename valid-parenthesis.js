// Valid Paranthesis


// Time Complexity - O(n)

var isValid = function(s) {
    let stack = [];  // Initialize a stack to keep track of opening brackets
    let len = s.length;  // Get the length of the input string
    
    // Object to map closing brackets to their corresponding opening brackets
    const pairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    // Iterate through each character in the string
    for (let i = 0; i < len; i++) {
        // If the character is an opening bracket, push it onto the stack
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            stack.push(s[i]);
        } else if (s[i] === ')' || s[i] === '}' || s[i] === ']') {
            // If the character is a closing bracket, pop the top element from the stack
            const prev_bracket = stack.pop();
            
            // Check if the popped bracket matches the corresponding opening bracket
            if (prev_bracket !== pairs[s[i]]) {
                return false;  // If not, the string is not valid
            }
        }
    }
    
    // If the stack is not empty, it means there are unmatched opening brackets
    if (stack.length > 0) {
        return false;
    }
    
    // If all brackets are matched and the stack is empty, return true
    return true;
};

isValid("()")
isValid("()[]{}")
isValid("(]")
isValid("([{")