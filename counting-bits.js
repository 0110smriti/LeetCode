// Counting Bits

// Solution 1 - O(n^2)
// Steps-
// 1. Convert every number to binary string
// 2. Count number of 1's in the string

var countBits = function(n) {
    // use n.toString(2) to convert to binary string
    let ans = []
    for(let i=0; i<=n; i++){
        ans.push(count_ones(i.toString(2)))
    }
    return ans
};

const count_ones = (s) => {
    let l = s.length;
    let c = 0;
    for(let i=0;i<l;i++){
        if(s[i] == '1') {
            c++
        }
    }
    return c;
} 



// Solution 2 - O(n), Space- O(n)
// 0 -> 0, 1 -> 1
// If number is even, it has same number of 1's as number/2
// If number is odd, it has previous number's number of 1's + 1 1's
// Use DP to store the solutions

var countBits = function(n) {
    if(n === 0) return [0]
    let bits_count = [0,1]
    for(let i=2; i<=n; i++) {
        if(i%2 === 0){
            bits_count.push(bits_count[i/2])
        }else{
            bits_count.push(bits_count[i-1] + 1)
        }
    }
    return bits_count
};