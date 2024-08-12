// Plus One

// Solution - Time O(n)
var plusOne = function(digits) {
    let l = digits.length - 1;
    // Run a loop from reverse
    while(l >=0 ) {
        // call the addOne function on current number
        // update the  array index to store the result
        let n = addOne(digits[l])
        digits[l] = n
        // if result is 0
        if(n === 0) {
            // if index is 0 (first item)
            // add 1 to the front of array and return
            if(l === 0) {
                digits.unshift(1)
                return digits
            }
            l--;
        } else{
            // if result is not 0 simply return the digts array
            return digits;
        }
    }
    return digits;
};

// Function to add 1 to numbers
// if number < 9, return n + 1
// else return 0
const addOne = (n) =>  n < 9 ? n + 1 : 0;