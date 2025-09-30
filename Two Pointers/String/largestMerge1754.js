var largestMerge = function(word1, word2) {
    let merged = [];
let i = 0, j =0;
    while(i < word1.length || j < word2.length){
        
        
        if(word1.slice(i) > word2.slice(j)){
            merged.push(word1[i]);
            i++;
         }else{
            merged.push(word2[j]);
           j++;
        }
    }
    
    return merged.join('');
};

let  word1 = "abcabc", word2 = "abdcaba";
console.log(largestMerge(word1, word2));
// "abdcabcabcaba"

// Input: word1 = "cabaa", word2 = "bcaaa"
// Output: "cbcabaaaaa"