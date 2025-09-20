var rotate = function(nums, k) {
    let n = nums.length;
    k = k % n;
    rotateArray(nums, 0, n-1);
    rotateArray(nums, 0, k-1);
    rotateArray(nums, k, n-1);

    return nums;
    
};

function rotateArray(nums, i , j){
    while(i < j){
        [nums[i], nums[j]] = [nums[j], nums[i]];
        i++;
        j--;
    }
}
let nums = [-1,-100,3,99], k = 2;
console.log(rotate(nums,k));
