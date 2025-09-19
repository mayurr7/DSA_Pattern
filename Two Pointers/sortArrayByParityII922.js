var sortArrayByParityII = function(nums) {
    let n = nums.length;
    let i = 0, j = 1;
    while(i < n && j < n){
       if(nums[i] % 2 !== 0){
            if(nums[j] % 2 === 0){
                [nums[i], nums[j]] = [nums[j], nums[i]];
            }else{
                j+=2;
            }
       }else{
            i+=2;
       }
    }
    return nums;
};

let nums = [2,3,1,1,4,0,0,4,3,3];
console.log(sortArrayByParityII(nums));
