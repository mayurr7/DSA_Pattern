var maxArea = function(height) {
    let maxSum = -Infinity;
    let i = 0, j = height.length-1;

    while(i < j){
       let width = j - i;
       let h = Math.min(height[i], height[j]);
       let area = width * h;
       
       maxSum = Math.max(maxSum, area);

       if(height[i] < height[j]){
        i++;
       }else{
        j--;
       }
    }
    return maxSum;

};

let height = [1,0,1];
console.log(maxArea(height));
