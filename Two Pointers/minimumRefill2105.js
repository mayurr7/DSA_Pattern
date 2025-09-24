var minimumRefill = function(plants, capacityA, capacityB) {
    let orignalCapA = capacityA;
    let orignalCapB = capacityB;
    let refill = 0, i = 0, j = plants.length-1;

    while(i < j){
            if(plants[i] > capacityA){
                refill++;
                capacityA = orignalCapA;
            }
            capacityA -= plants[i];
            i++;

            if(plants[j] > capacityB){
                refill++;
                capacityB = orignalCapB;
            }
            capacityB -= plants[j];
            j--;

        if (i === j) {
            if (plants[i] > Math.max(capacityA, capacityB)) {
                refill++;
            }
         }
     }
    return refill;
};

let plants = [1,2,4,4,5], capacityA = 6, capacityB = 5;
console.log(minimumRefill(plants,capacityA,capacityB));
