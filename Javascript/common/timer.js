/**
 * @fileOverview: timer
 * @author: xuejian.xu
 * @date: 15/10/23.
 */

global.timer = {
    now : function(){
        return new Date().getTime();
    },

    calcTime : function(task){
        var startTime = this.now();

        task();

        return this.now() - startTime;
    }
};
