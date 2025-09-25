/**
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = function(n) {
    let arr = n.toString().split("").map(Number);
    // console.log(arr);  

    let pivot  = -1;
    for(let i = arr.length-2; i>=0; i--){
        if(arr[i] < arr[i+1]){
            pivot = i;
            break;
        }
    }

if(pivot === -1) return -1;    

   for(let i = arr.length-1; i > pivot; i--){
        if(arr[i] > arr[pivot]){
            [arr[i], arr[pivot]] = [arr[pivot], arr[i]];
            break;
        }
   }
//    console.log(arr);

   let i =pivot+1, j = arr.length-1;
   while(i < j){
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
        j--;
   }

   let num = Number(arr.join(""));

    if (num > 2147483647) return -1;
   console.log(2**31-1);
   
    return num;
   

};

let n = 213;
console.log(nextGreaterElement(n));
