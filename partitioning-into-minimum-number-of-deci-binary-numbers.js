// Partitioning Into Minimum Number Of Deci-Binary Numbers

// Answer is the maximum digit in the string
// how?
// If number is 11 - 11
// If number is 13 - 
// 11
// 01
// 01

// 234   1201  12340......
// 111   1101  11110
// 111   0100  01110
// 011         00110
// 001         00010

// i.e. write that many digits in 1's and 0's

var minPartitions = function(n) {
    let max = n[0]
    let len = n.length;
    for(let i=1; i<len; i++) {
        if(n[i] > max) {
            max = n[i]
        }
    }
    return parseInt(max)
};

