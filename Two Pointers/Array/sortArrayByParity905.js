var sortArrayByParity = function(nums) {
    let i =0, j = nums.length-1;
    while(i < j){
        if(nums[i] % 2 !== 0 && nums[j] % 2 === 0){
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++;
            j--;

        }else if(nums[i] % 2 === 0){
            i++;
        }else{
            j--;
        }
    }
    console.log(nums);
    
    return nums;
};

let nums = [5,9,3,4,5,2,1,11,2];
console.log(sortArrayByParity(nums));
