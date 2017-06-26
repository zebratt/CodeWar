/**
 * @fileOverview: logger
 * @author: xuejian.xu
 * @date: 15/10/23.
 */

global.logger = {
    write: function (str) {
        process.stdout.write(str);
    },

    arr: function (arr, lineCount) {
        lineCount = lineCount ? lineCount : 10;

        this.write('[ \n');

        for (var i = 0; i < arr.length; i++) {
            if (typeof arr[i] === 'object') {
                var subArr = arr[i];

                for (var j = 0; j < subArr.length; j++) {
                    this.write(subArr[j] + ' ');
                    if (j > 0 && j % lineCount === 0) {
                        this.write('\n');
                    }
                }
            } else {
                this.write(arr[i] + ' ');

                if ((i + 1) % lineCount === 0) {
                    this.write('\n');
                }
            }
        }

        console.log(']\n');
    }
};