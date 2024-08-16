// Happy Number

var isHappy = function(n) {
    // An object to keep track of previous sum values
    let results = {}
    let temp = n
    // run a loop until temp is 1
    while(temp!=1) {
        // get the sum of square of digits
        temp = sumOfDigits(temp)
        // if the sum is already found in the object return false
        // it means a loop is present
        if(results[temp]) {
            return false;
        }
        // otherwise add an entry in the loop to keep track
        else{
            results[temp] = 1
        }
    }
    return true;
};

// Function to get sum of sqaure of the digits
const sumOfDigits = (num) => num.toString().split('').reduce((prev, n) => prev + Number(n)*Number(n), 0)