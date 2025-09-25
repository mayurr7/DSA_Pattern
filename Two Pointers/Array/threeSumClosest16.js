var threeSumClosest = function(nums, target) {
    let closetSum = Infinity;

    nums.sort((a,b) => a- b);
   
    // for(let i = 0; i < nums.length - 2; i++){
    //      for(let j = i+1; j < nums.length - 1; j++){
    //          for(let k = j+1; k < nums.length; k++){
    //             let sum = nums[i]+nums[j]+nums[k];
            
    //             if(Math.abs(sum - target) < Math.abs(closetSum - target)){
    //                 closetSum = sum;
    //             }
    //          }
    //     }
    // }


    for(let i = 0; i < nums.length - 2; i++){

        let j = i+1, k = nums.length-1;
        while(j < k){
            let sum = nums[i] + nums[j] + nums[k];

            if(Math.abs(sum - target) < Math.abs(closetSum - target)){
                closetSum = sum;
            }

            if(sum < target){
                j++;
            }else{
                k--;
            }
        }
    }
    return closetSum;
};

let nums = [0,1,2], target = 3;
console.log(threeSumClosest(nums, target));
