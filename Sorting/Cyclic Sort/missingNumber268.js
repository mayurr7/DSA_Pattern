var missingNumber = function(arr) {
    let n = arr.length;
   let i =0;
   while(i < n){
    let correctIdx = arr[i];
    if(arr[i] < n && arr[i] !== arr[correctIdx]){
        [arr[i], arr[correctIdx]] = [arr[correctIdx], arr[i]];
    }else{
        i++;
    }
   }

   for(let j = 0; j < n; j++){
    if(arr[j] !== j){
        return j;
    }
   }
   
   return n;
};

let arr =[7,8,9,11,12];
console.log(missingNumber(arr));
