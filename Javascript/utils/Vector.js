/**
 * @fileOverView: Vector
 * @author: xuejian.xu
 * @date: 2017/7/25.
 */

class Vector {
    constructor(arr){
        this.arr = arr;
    }

    get length(){
        return this.arr.length;
    }

    get(idx){
        return this.arr[idx];
    }

    add(v){
        if(this.length !== v.length){
            throw Error('Length not equal!');
        }

        this.arr = this.arr.map((el, idx)=>{
            return el + v.get(idx);
        });

        return this;
    }

    subtract(v){
        if(this.length !== v.length){
            throw Error('Length not equal!');
        }

        this.arr = this.arr.map((el, idx)=>{
            return el - v.get(idx);
        });

        return this;
    }

    dot(v){
        if(this.length !== v.length){
            throw Error('Length not equal!');
        }

        return this.arr.map((el, idx)=>{
            return el * v.get(idx);
        }).reduce((pre, cur)=>{
            return pre + cur;
        }, 0);
    }

    norm(){
        return Math.sqrt(this.arr.map((el)=>{
            return Math.pow(el, 2);
        }).reduce((pre, cur)=>{
            return pre + cur;
        }, 0));
    }

    toString(){
        return `(${this.arr.join(',')})`;
    }

    equals(v){
        if(this.length !== v.length){
            return false;
        }

        for(let i=0; i<this.length; i++){
            if(this.get(i) !== v.get(i)){
                return false;
            }
        }

        return true;
    }
}

module.exports = Vector;