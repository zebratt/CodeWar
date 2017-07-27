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
    let amount = 0;
    let m = new Map();

    function divide(money, path) {
        console.log(path);
        let newPath = '';

        for (let i = 0; i < c.length; i++) {
            if (path) {
                let arr = path.split('-');

                arr.push(c[i]);

                newPath = arr.sort(desc).join('-');
            } else {
                newPath = String(c[i]);
            }

            if (money === c[i]) {
                amount++;
                m.set(newPath, true);
            } else if (money > c[i]) {
                if (m.has(newPath)) {
                    if (m.get(newPath)) {
                        return amount++;
                    }
                }

                divide(money - c[i], newPath);
            }
        }

        return 0;
    }

    divide(money);

    return amount;
};

//console.log(countChange(4, [1,2]));
console.log('result:', countChange(10, [5,2,3]));
//console.log(countChange(11, [5,7]));
