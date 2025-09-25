var singleNumber = function(nums) {
    // let map = new Map();
   
    // for(let num of nums){
    //     map.set(num, (map.get(num) || 0) + 1);
    // }
    // console.log(map);

    // for(let [key, val] of map){
    //     if(val ===  1)return key;
    // }

    // Using xor

    let result = 0; 
    for(let num of nums){
        result ^= num;
    }
    return result;
    
};
let nums = [4,5,6,4,5];
console.log(singleNumber(nums));
