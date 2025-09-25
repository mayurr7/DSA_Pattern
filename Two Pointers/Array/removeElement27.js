var removeElement = function(nums, val) {
    let n = nums.length-1;
    let i = 0,j = n, count =0;
        while(i <= j){
            if(nums[i] === val ){
                [nums[i], nums[j]] = [nums[j], nums[i]];
                j--;
            }else if(nums[j] === val){
                j--;
            }else{
                i++;
            }

        }
    return i;
};

let nums = [0,1,2,2,3,0,4,2], val = 0;
console.log(removeElement(nums,val));
