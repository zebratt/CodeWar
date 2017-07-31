/**
 Write a function that counts how many different ways you can make change for an amount of money, given an array of coin denominations. For example, there are 3 ways to give change for 4 if you have coins with denomination 1 and 2:

 1+1+1+1, 1+1+2, 2+2.
 The order of coins does not matter:

 1+1+2 == 2+1+1
 Also, assume that you have an infinite ammount of coins.

 Your function should take an amount to change and an array of unique denominations for the coins:

 countChange(4, [1,2]) // => 3
 countChange(10, [5,2,3]) // => 4
 countChange(11, [5,7]) //  => 0
 */

var desc = function(a, b){
    return a < b;
};

var countChange = function (money, coins) {
    let c = coins.sort(desc);
    let m = new Map();

    function minus(money){
        if(money < 0){
            m.set(money, false);
            return false;
        }

        if(money === 0){
            m.set(money, new Set());
            return new Set();
        }

        let s = new Set();

        for(let i=0; i<c.length; i++){
            let mapRes = m.get(money - c[i]);
            let res = mapRes !== undefined ? mapRes : minus(money - c[i]); 

            if(res){
                let items = Array.from(res);

                if(!items.length){
                    s.add(c[i].toString());
                }else{
                    items.forEach((el)=>{
                        let cs = el.split(',');

                        cs.push(c[i]);

                        s.add(cs.sort(desc).join(','));
                    });
                }
            }
        }

        m.set(money, s.size > 0 ? s : false);

        return s.size > 0 ? s : false;
    }
    
    let result = minus(money).size;  
    
    return result || 0;
};

//console.log(countChange(4, [1,2]));
console.log(countChange(100, [5,2,3]));
//console.log(countChange(11, [5,7]));
