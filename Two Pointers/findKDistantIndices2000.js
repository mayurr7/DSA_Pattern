
var findKDistantIndices = function(nums, key, k) {
    let result = new Set();
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === key){
            let start = Math.max(0, i - k);
            let end = Math.min(nums.length-1, i + k);

            for(let j = start; j <= end; j++){
                result.add(j);
            }

        }
    }
    return Array.from(result).sort((a,b)=> a - b);
};

let nums = [2,2,2,2,2], key = 2, k = 2;
console.log(findKDistantIndices(nums, key, k));
