/**
 If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

 Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

 Note: If the number is a multiple of both 3 and 5, only count it once.
 */

function solution(number){
    const bases = [3,5];
    const result = [];

    bases.forEach(function(base){
        for(let i = 1; i * base < number; i++){
            result.push(i * base);
        }
    });

    return sum(unique(result));
}

function unique (arr) {
    return Array.from(new Set(arr))
}

function sum(arr){
    return arr.reduce(function(a, b){
        return a + b;
    }, 0)
}

/*
best one

function solution(number){
    var sum = 0;

    for(var i = 1;i< number; i++){
        if(i % 3 == 0 || i % 5 == 0){
            sum += i
        }
    }
    return sum;
}*/
