var findDisappearedNumbers = function(nums) {
    let n = nums.length;
    let i = 0;
    while(i < n){
        let corrIdx = nums[i]-1;
        if(nums[i] <= n && nums[i] !== nums[corrIdx] ){
            [nums[i], nums[corrIdx]] = [nums[corrIdx], nums[i]];
        }else{
            i++;
        }
    }
    let result = [];
    for(let j = 0;  j < n; j++){
        if(nums[j] !== j+1){
            result.push(j+1);
        }
    }
    return result;
    
};

let nums =[4,3,2,7,8,2,3,1];
console.log(findDisappearedNumbers(nums));
