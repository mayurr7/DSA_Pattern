var pivotArray = function(nums, pivot) {
    let i = 0, j = 0, k= 0;
    let arr1 = [];
    let arr2 = [];
    let arr3 = [];

    for(let num of nums){
        if(num < pivot) {
            arr1[i] = num;
            i++;
        }else if(num === pivot) {
            arr2[j] = num;
            j++;
        }else{
            arr3[k] = num;
            k++;
        }
        
    }
    console.log(arr2,"arr 2");
    return;
    
    let result = [...arr1,...arr2,...arr3];
    // console.log("sd",result);
    
    return result;
};

let nums = [9,12,5,10,14,3,10];
console.log(pivotArray(nums,10));
