function FizzBuzz(n){
    if(n % 3 === 0 && n % 5 === 0){
        console.log("FizzBuzz");
    }else if (n % 3 === 0){
        console.log("Fizz");
    }else if (n % 5 === 0){
        console.log("Buzz");
    }
    return n
}

console.log(FizzBuzz(3));
console.log(FizzBuzz(5));
console.log(FizzBuzz(7));
console.log(FizzBuzz(15));