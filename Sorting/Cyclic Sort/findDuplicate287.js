var findDuplicate = function(nums) {
     let i = 0;
    console.log("orignal", nums);
    
    while(i < nums.length){
            let correct = nums[i] - 1;
        if(nums[i] !== nums[correct]){
            [nums[i] , nums[correct]] = [nums[correct] ,nums[i]];
        }else{
            i++;
        }
    }
    console.log(nums);
    
    for(let j = 0; j < nums.length; j++){
        if(arr[j] !== j+1){
            return arr[j];
        }
    }

    // let map = new Map();

    // for(let num of nums){
    //     if(map.has(num)) return num;

    //     map.set(num);
    // }
    // return -1;
};

let arr = [3,1,3,4,2,2];
console.log(findDuplicate(arr));

