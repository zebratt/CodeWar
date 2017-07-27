/**
 Given an array, find the int that appears an odd number of times.
 There will always be only one integer that appears an odd number of times.
 **/

function findOdd(A) {
    let o = {};

    for(let i=0; i<A.length; i++){
        let num = A[i];

        if(o[num] === undefined){
            o[num] = true;
        }else{
            o[num] = !o[num];
        }
    }

    let result;

    Object.keys(o).map(function(key){
        if(o[key]){
            result = key;
        }
    });

    return parseInt(result);
}

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]));