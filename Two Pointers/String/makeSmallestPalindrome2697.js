var makeSmallestPalindrome = function(s) {
    let arr = s.split('');
 
    
    let i = 0, j = arr.length-1;

    while(i <  j){
     
        if(arr[i] !== arr[j]){
            let smaller = arr[i] < arr[j] ? arr[i] : arr[j];

            arr[i] = smaller;
            arr[j] = smaller;
        }
        i++;
        j--;
    }
    return arr.join('');
};


let s = "abcd";
console.log(makeSmallestPalindrome(s));


// Input: s = "abcd"
// Output: "abba"
// Explanation: The minimum number of operations to make "abcd" a palindrome is 2, and the lexicographically smallest palindrome string we can get by modifying two characters is "abba".