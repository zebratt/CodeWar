/**
 Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.

 Examples:

 // returns "theStealthWarrior"
 toCamelCase("the-stealth-warrior")

 // returns "TheStealthWarrior"
 toCamelCase("The_Stealth_Warrior")
 */

function toCamelCase(str){
    let delimiter = /-/.test(str) ? '-' : '_';

    return str.split(delimiter).reduce(function(pre, cur, idx){
        if(idx === 0){
            return pre + cur;
        }

        return pre + cur.slice(0,1).toUpperCase() + cur.slice(1);
    }, '');
}

/*
best one

function toCamelCase(str){
    var regExp=/[-_]\w/ig;
    // we can use the match result: match , to replace the letter in that string
    return str.replace(regExp,function(match){
        return match.charAt(1).toUpperCase();
    });
}*/
