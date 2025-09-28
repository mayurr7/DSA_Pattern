var isPalindrome = function(s) {
    
    let str = s.toLowerCase().replace(/[^a-zA-Z0-9]/g,'');
    console.log(str[str.length-1]);
    
    
    // let arr = str.split('');
    if(str.length < 1) return true;

    let i = 0, j= str.length-1;
    while(i < j){
        if(str[i] !== str[j]){
            return false;
        }
        i++;
        j--;
    }

    return true;
  

    
    
};

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

let s = "A man, a plan, a canal: Panama ";
console.log(isPalindrome(s));
