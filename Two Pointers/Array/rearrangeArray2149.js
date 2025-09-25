/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let n = nums.length;
    let pos = 0, neg = 1;
    let arr = new Array(n);

    for(let num of nums){
        if(num > 0){
            arr[pos] = num;
            pos+=2;
        }else{
            arr[neg] = num;
            neg+=2;
        }
    }
    return arr;

};

let nums = [28,-41,22,-8,-37,46,35,-9,18,-6,19,-26,-37,-10,-9,15,14,31];
console.log(rearrangeArray(nums));
