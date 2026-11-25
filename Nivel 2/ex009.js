const nums = [3, 8, 1, 12, 5];
cont = 0;
let max;
for (const num of nums){
    if (cont == 0){
        max = num;
        cont ++
    }else{
        if (max < num){
            max = num;
        }
    }
}
console.log(max);