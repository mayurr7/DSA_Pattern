var validPalindrome = function(s) {
    let i = 0, j = s.length-1;
    while(i < j){
        while(i < j && s[i] === s[j]){
            i++;
            j--
        }

        return (checkPalindrome(s, i+1, j) || checkPalindrome(s, i, j-1));

    }
    return true;
};

 const checkPalindrome = (s, i, j) => {
    while(i < j){
        if(s[i] !== s[j]) return false;

        i++;
        j--;
    }
    return true;
}

// Input: s = "abca"
// Output: true
// Explanation: You could delete the character 'c'.

let s = "eddkklde";
console.log(validPalindrome(s));
