var firstMissingPositive = function(arr) {
    let n = arr.length;
    if(arr.length === 0) return 1;

    let i = 0;
    while(i < n){
        let correctIdx = arr[i] - 1;

        if(arr[i] > 0 && arr[i] <= n && arr[i] !== arr[correctIdx] ){
            [arr[i], arr[correctIdx]] = [arr[correctIdx], arr[i]];
        }else{
            i++;
        }
    }
    console.log(arr, "new");

    for(let j =0; j < n; j++){
        if(arr[j] !== j+1){
            return j+1;
        }
    }
    return n+1;


};
let arr =[1,2,0];

console.log(firstMissingPositive(arr));
