var reverseStr = function(s, k) {
    let arr = s.split("");
console.log(arr);


    for(let i = 0; i < arr.length; i+= 2 * k){
        let start = i;
        let j =  Math.min(i+k-1, arr.length-1);

        while(start < j){
            [arr[start], arr[j]] = [arr[j], arr[start]];
            start++;
            j--;
        }
    }
    return arr.join("");
    
    
};

let s = "abcdefg", k = 3;
console.log(reverseStr(s,k));
