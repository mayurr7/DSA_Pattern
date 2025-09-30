var mergeAlternately = function(word1, word2) {
    let merged = [];
    let i = 0; j = 0;

    while(i < word1.length || j < word2.length){
        if(i < word1.length){
            merged.push(word1[i]);
            i++;
        }
        if(j < word2.length){
            merged.push(word2[j]);
            j++;
        }
        
    }
    return merged.join('');

};

let word1 = "abc", word2 = "pqr";
console.log(mergeAlternately(word1, word2));



// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r