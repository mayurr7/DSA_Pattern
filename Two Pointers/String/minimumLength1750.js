var minimumLength = function(s) {
       let i = 0, j = s.length - 1;
   
    let char = '';

    while (i < j && s[i] === s[j]) {         
            char = s[i];

            while(i <= j && s[i] === char){
                i++;
            }

            while(i <= j && s[j] === char){
                j--;
            }
        
        
    }return j-i+1;
};

let s = "cabaabac";
console.log(minimumLength(s));


// Input: s = "cabaabac"
// Output: 0
// Explanation: An optimal sequence of operations is:
// - Take prefix = "c" and suffix = "c" and remove them, s = "abaaba".
// - Take prefix = "a" and suffix = "a" and remove them, s = "baab".
// - Take prefix = "b" and suffix = "b" and remove them, s = "aa".
// - Take prefix = "a" and suffix = "a" and remove them, s = "".