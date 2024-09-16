// Sum of Digits of String After Convert

// Time Complexity - O(n)


var getLucky = function(s, k) {
    let num_s = "";
    let len = s.length;
  
    // Convert each character in the string to its corresponding position in the alphabet
    for(let i = 0; i < len; i++) {
      num_s += s.charCodeAt(i) - 'a'.charCodeAt(0) + 1;
    }
  
    let sum = 0;
  
    // Repeat the transformation k times
    while(k > 0) {
      // Sum the digits of the current number string
      sum = num_s.split('').reduce((acc, curr) => acc + parseInt(curr), 0);
      
      // Convert the sum back to a string for the next iteration
      num_s = "" + sum;
  
      // Decrease k as one transformation is complete
      k--;
    }
  
    // Return the final sum after k transformations
    return sum;
  };
  