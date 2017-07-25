/**
 Snail Sort

 Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

 array = [[1,2,3],
 [4,5,6],
 [7,8,9]]
 snail(array) #=> [1,2,3,6,9,8,7,4,5]
 For better understanding, please follow the numbers of the next array consecutively:

 array = [[1,2,3],
 [8,9,4],
 [7,6,5]]
 snail(array) #=> [1,2,3,4,5,6,7,8,9]
 */

const CircularQueue = require('../common/CircularQueue');

snail = function(array){
    const n = array.length;
    const result = [];
    const d = new CircularQueue([
        {x: 0, y: 1},
        {x: 1, y: 0},
        {x: 0, y: -1},
        {x: -1, y: 0}
    ]);
    let cur = d.next();
    const m = new Map();

    if(array[0][0] === undefined){
        return [];
    }

    for(let x=0, y=0; result.length < n * n;){
        result.push(array[x][y]);
        m.set(`${x}-${y}`, 1);

        // Change direction when
        // 1. meet edge
        // 2. position has met
        if(x + cur.x < 0 || x + cur.x >= n || y + cur.y < 0 || y + cur.y >= n || m.has(`${x + cur.x}-${y + cur.y}`)){
            cur = d.next();
        }

        x += cur.x;
        y += cur.y;
    }

    return result;
};

array = [[1,2,3],
    [8,9,4],
    [7,6,5]];

console.log(snail(array));