var reverseWords = function(s) {
    let arr = s.split(' ');
    console.log(arr);

    for(let i = 0; i < arr.length; i++){
        let strArr = arr[i].split('');
        let j = 0, k = strArr.length-1;
        while(j < k){
            [strArr[j], strArr[k]] = [strArr[k], strArr[j]];
            j++;
            k--
        }        
        arr[i] = strArr.join('');
        
    }
    return arr.join(' ');
    
};


//Input: s = "Let's take LeetCode contest"
//Output: "s'teL ekat edoCteeL tsetnoc"


let s = "Let's take LeetCode contest";
console.log(reverseWords(s));
