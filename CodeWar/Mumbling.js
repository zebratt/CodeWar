/**
 This time no story, no theory. The examples below show you how to write function accum:

 Examples:

 accum("abcd");    // "A-Bb-Ccc-Dddd"
 accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
 accum("cwAt");    // "C-Ww-Aaa-Tttt"

 The parameter of accum is a string which includes only letters from a..z and A..Z.
 **/

function accum(s) {
    const arr = [];

    for (let i = 0; i < s.length; i++) {
        let letter = s[i].toLowerCase();
        let str = letter.toUpperCase();

        for (let j = 0; j < i; j++) {
            str += letter;
        }

        arr.push(str);
    }

    console.log(arr.join('-'));
}

accum("ZpglnRxqenU");