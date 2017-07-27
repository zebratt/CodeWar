/**
 * @fileOverView: Circular Queue
 * @author: xuejian.xu
 * @date: 2017/7/25.
 */

class CircularQueue {
    constructor(arr){
        this.arr = arr || [];
        this.index = -1;
    }

    get length(){
        return this.arr.length;
    }

    next(){
        return this.arr[++this.index%this.length]
    }
}

module.exports = CircularQueue;