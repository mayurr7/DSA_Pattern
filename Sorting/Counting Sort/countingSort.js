function countingSort(arr){
    
    let n = arr.length;
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let range = max - min + 1;

    let count = new Array(range).fill(0);

    for(let i = 0; i < n; i++){
        count[arr[i] - min]++;
    }
    console.log(count);

    let sortedArr = [];
    for(let i = 0; i < count.length; i++){
        while (count[i] > 0) {
            sortedArr.push(i + min);
            count[i]--;
        }
    }
    return sortedArr;
    
}

let arr = [3,8,7,6,3,8,6];
console.log(countingSort(arr));
