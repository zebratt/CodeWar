/**
 * @fileOverview: base
 * @author: xuejian.xu
 * @date: 15/10/21.
 */

require('./timer');
require('./logger');

global.utils = {
    createInputs: function (option) {
        var length = option.length || 10,
            min = option.min || 0,
            max = option.max || 10000,
            precision = option.precision || 0;

        var array = [];
        for (var i = 0; i < length; i++) {
            var number = this.createNumber(min, max, precision);
            array.push(number);
        }

        return array;
    },

    createNumber: function (min, max, precision) {
        var seed = Math.random();
        var diff = (max - min) * seed;
        var result = min + diff;

        return parseFloat(result.toFixed(precision));
    }
};