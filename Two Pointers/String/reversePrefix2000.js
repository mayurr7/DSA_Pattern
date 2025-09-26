var reversePrefix = function(word, ch) {
    let arr = word.split("");
    let end = 0;
    for(let i =0; i < arr.length; i++){
        if(arr[i] === ch){
            end = i;
            break;
        }
    }
    let start = 0;
    while(start < end){
        [arr[start], arr[end]] =[arr[end], arr[start]];
        start++;
        end--;
    }

  return arr.join("");    
    
};

let word = "abcd", ch = "z";
console.log(reversePrefix(word,ch));
