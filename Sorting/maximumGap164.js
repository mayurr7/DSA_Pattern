var maximumGap = function(arr) {

    if(arr.length <= 2) return 0;

    for(let i =0; i < arr.length-1; i++){
        for(let j =0; j < arr.length - i- 1; j++){
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] =  [arr[j+1], arr[j]];
            }
        }
    }
    console.log(arr);
    
    let i = arr.length-1;
    let count =0;

    while(i > 0){
        let count1  = arr[i] - arr[i-1];
        count = Math.max(count, count1);
        i--;
    }

    return count;

};

let arr = [3,6,12,1,8,3,6,4,7,8,9,2,1,36];
console.log(maximumGap(arr));

