
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let pivot = -1;

    for(let i = nums.length-2; i >= 0; i--){
        if(nums[i] < nums[i+1]){
            pivot = i;
            break;
        }
    }
    // console.log("pivot",pivot);
    
    if(pivot === -1){
        return nums.sort((a,b) => a-b);
    }

    for(let i = nums.length-1; i >= 0; i--){
        if(nums[i] > nums[pivot]){
            [nums[i], nums[pivot]] = [nums[pivot], nums[i]];
            break;
        }
    }
    // console.log(nums, "pivot swapp");
    

    let i = pivot+1, j = nums.length-1;
    while(i < j){
        [nums[i], nums[j]] = [nums[j], nums[i]];
        i++;
        j--;
    }
    return nums;

};

let nums = [2,3,1];
console.log(nextPermutation(nums));
