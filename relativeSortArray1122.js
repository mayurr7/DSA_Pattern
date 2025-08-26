var relativeSortArray = function(arr1, arr2) {
        let map = new Map();

        for(let i=0; i< arr1.length; i++){
            let count= map.get(arr1[i]) || 0;
            map.set(arr1[i], count  + 1);
        }
        // console.log(map);

        let result = [];
        for(let i =0; i < arr2.length; i++){
            let val = arr2[i];
            let count =  map.get(val) || 0;
            // console.log(val, count);
            
            while(count > 0){
                result.push(val);
                count--;
            }
            map.delete(val);
        }
    //     console.log(result, "arr");
    // console.log(map);

    let remaining = [];
    for(let [key, value] of map){
        while(value > 0){
            remaining.push(key);
            value--;
        }
    }
    remaining.sort((a,b)=> a-b);
     result.push(...remaining);
    return result;
    
        
};
let arr1 = [2,3,1,3,2,4,6,7,9,2,19,7];
let arr2 =[2,1,4,3,9,6];
console.log(relativeSortArray(arr1, arr2));
