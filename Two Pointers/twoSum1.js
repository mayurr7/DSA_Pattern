var twoSum = function(nums, target) {
    let map = new Map();
    for(let i =0; i < nums.length; i++){
        let number = target - nums[i];
       if(map.has(number)){
        return [map.get(number),i];
       }
       map.set(nums[i],i);

    }
};

let nums = [2,7,11,15], target = 9;
console.log(twoSum(nums,target));
