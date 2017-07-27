/**
 var a = new Vector([1,2,3]);
 var b = new Vector([3,4,5]);
 var c = new Vector([5,6,7,8]);

 a.add(b); // should return Vector([4,6,8])
 a.subtract(b); // should return Vector([-2,-2,-2])
 a.dot(b); // should return 1*3+2*4+3*5 = 26
 a.norm(); // should return sqrt(1^2+2^2+3^2)=sqrt(14)
 a.add(c); // throws an error
 */

const Vector = require('../common/Vector');

var a = new Vector([1,2,3]);
var b = new Vector([3,4,5]);
var c = new Vector([5,6,7,8]);

//console.log(a.add(b));
console.log(a.subtract(b));
console.log(a.dot(b));
console.log(a.equals(new Vector([1,2,2])));
console.log(a.norm());