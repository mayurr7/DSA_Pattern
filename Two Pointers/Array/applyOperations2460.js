/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function (nums) {
    for (let i = 0; i < nums.length-1; i++) {
        if (nums[i] === nums[i + 1]) {
            nums[i] *= 2;
            nums[i + 1] = 0;
        }
    }
    let i = 0,j= 1;
    while(j < nums.length){
        if(nums[i] !== 0){
            i++;
            j = Math.max(j,i+1);
        }else if(nums[j] === 0){
            j++;
        }else{
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++;
            j++;
        }
    }
   
    return nums;
};


let nums =[349,349,514,514,0,0,835,835,835,0]
console.log(applyOperations(nums));
