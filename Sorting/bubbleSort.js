function bubbleSort(arr){
    let n  = arr.length;
console.log(arr);

    for(let i = 0; i < n - 1; i++){
        let isSwapp = false;

        for(let j = 0; j < n - i - 1; j++){
            if(arr[j] > arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1], arr[j]];
                isSwapp = true;
            }
           
        }
         if(!isSwapp) break;
    }
    
    return arr;
}

let arr = [5,3,8,4,2];
console.log(bubbleSort(arr));
