var reverseVowels = function(s) {
    let arr= s.split("");
    let vowels = new Set(['a','e','i','o','u','A','E','I','O','U']);

    let i =0, j = arr.length-1;
    while(i < j){
       while(i < j && !vowels.has(arr[i])) i++;
       while(i < j && !vowels.has(arr[j])) j--;

       [arr[i], arr[j]] = [arr[j], arr[i]];
       i++;
       j--;
    }
    return arr.join("");
};

let s = "IceCreAm";
console.log(reverseVowels(s));
