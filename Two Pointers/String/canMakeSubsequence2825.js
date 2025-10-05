var canMakeSubsequence = function(str1, str2) {
    let i = 0, j = 0;

    while(i < str1.length &&j < str2.length){
        if((str1[i] === str2[j]) || str1.charCodeAt(i)+1 === str2.charCodeAt(j) || (str1[i] === 'z' && str2[j] === 'a')){
            j++;
        }

            i++;
        
    }
    return j === str2.length;
};

let str1 = "abc", str2 = "ba";
console.log(canMakeSubsequence(str1,str2));


