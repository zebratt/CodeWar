/**
 Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 integers. No floats or empty arrays will be passed.

 For example, when an array is passed like [19,5,42,2,77], the output should be 7.

 [10,343445353,3453445,3453545353453] should return 3453455.

 Hint: Do not modify the original array.
 */

function sumTwoSmallestNumbers(numbers) {
    let min = 0;

    for(let i=0; i<numbers.length; i++){
        if(numbers[i] < numbers[min]){
            min = i;
        }
    }

    //处理一种边界情况，min2的初始值为最小值
    let min2 = min === 0 ? 1 : 0;

    for(let i=0; i<numbers.length; i++){
        if(numbers[i] < numbers[min2] && i !== min){
            min2 = i;
        }
    }

    return numbers[min] + numbers[min2];
}

console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7]));