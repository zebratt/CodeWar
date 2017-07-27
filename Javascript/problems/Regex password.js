/**
 * You need to write regex that will validate a password to make sure it meets the following criteria:
 * 1. At least six characters long
 * 2. contains a lowercase letter
 * 3. contains a uppercase letter
 * 4. contains a number
 *
 * Valid passwords will only be alphanumeric characters.
 */

function validate2(str){
    return /^(?=.*\d+)(?=.*[a-z]+)(?=.*[A-Z]+)[\da-zA-Z]{6,}$/.test(str);
}

function validate(str){
    return /^[\da-zA-Z]{6,}$/.test(str) &&
           /[a-z]/.test(str)            &&
           /\d/.test(str)               &&
           /[A-Z]/.test(str);
}

console.log(validate('aaBB000'));
console.log(validate('aaaaaaa'));
console.log(validate('aaa_dddDDD3333'));
console.log(validate('33DDDDDD'));
console.log(validate('333'));
console.log(validate('33ddSSSSS'));
console.log(validate('33ddSSSSS_'));