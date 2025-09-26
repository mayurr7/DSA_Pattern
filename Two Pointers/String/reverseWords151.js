var reverseWords = function(s) {
    let arr = s.trim().split(/\s+/);
    console.log(arr);

    let i = 0, j = arr.length-1;

    while(i < j){
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
        j--; 
    }

    return arr.join(" ");
    
};

let  s = "   the    sky is blue";
console.log(reverseWords(s));

