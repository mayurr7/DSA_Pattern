var sortColors = function(nums) {

    let start = 0, mid = 0, end  = nums.length-1;
    while(mid < end){
        if(nums[mid] === 0){
            [nums[start], nums[mid]] = [nums[mid], nums[start]];
            start++;
        }else if(nums[mid] === 1){
            mid++;
        }else{
            [nums[mid], nums[end]] = [nums[end], nums[mid]];
            end--;
        }
    }
    return nums;
    // for(let i = 0; i < nums.length-1; i++){
    //     for(let j = i+1; j < nums.length; j++){
    //         if(nums[j] < nums[i]){
    //             [nums[i], nums[j]] = [nums[j], nums[i]];
    //         }
    //     }
    // }
    // return nums;
};
let nums = [1,1,0,2,0,2];
console.log(sortColors(nums));

