var shortestToChar = function(s, c) {
    
    let ansArr = Array.from(s.length);
    let prev = -Infinity;
    for(let i = 0; i < s.length; i++){
      if(s[i] === c) prev = i;
      ansArr[i] = i - prev;       
    }    
    

    let prevEnd  = Infinity;
      for(let i = s.length-1; i >=0; i--){
        if(s[i] === c) prevEnd = i;
        ansArr[i] = Math.min(ansArr[i], prevEnd - i);       
    } 
    return ansArr;
    
};

let  s = "loveleetcode", c = "e";
console.log(shortestToChar(s, c));
