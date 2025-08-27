function bucketSort(arr){
    if(arr.length < 2) return arr;

    let max = Math.max(...arr);
    let min = Math.min(...arr);

 let bucketSize = Math.max(1, Math.floor((max - min) / (arr.length - 1)));
console.log(bucketSize);

    let bucketCount = Math.floor((max-min)/ bucketSize)+1;
    let buckets = Array.from({length : bucketCount}, () => []);


    for(let num of arr){
        let index = Math.floor((num - min) / bucketSize);
       buckets[index].push(num);
    }

    let  result = [];
    for(let bucket of buckets){
        bucket.sort((a,b) => a - b);
        result.push(...bucket);
    }
    return result;
    
}
let arr =[10, 2, 3, 5, 7];
console.log(bucketSort(arr));
