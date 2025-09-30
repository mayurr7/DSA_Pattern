var diStringMatch = function(s) {
    let arr = [];
    let high = s.length,  low = 0;

    for(let i = 0; i < s.length; i++){
        if(s[i] === 'D'){
            arr.push(high--);
        }else{
            arr.push(low++);
        }
    }
    arr.push(low);
    return arr;
};

let  s = "IDID";
console.log(diStringMatch(s));
