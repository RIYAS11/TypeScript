"use strict";
// String
let str = "name"; // now str datatype is string we cannot change tha value.
console.log(str);
// str = 20;  It will give me compile time error 
// We can also set the datatype so thats also possible;
let names;
names = "Riyas";
console.log(names);
// If we declare a var as itis then datatype is any that means we can store any value and after some time we can store  number also.
//Any
let x; // datatype is any
x = "hello";
x = 20;
console.log(x);
let dum;
dum = 10;
dum = "str";
console.log(dum);
// Its like Js code we can change the datatype in runtime also.
// number
let num;
num = 20;
console.log(num);
num = 30.5;
console.log(num);
// we can also store float values in number.
//boolean 
// Like Java and .Net we deafult value as false but here is no default value the value is undefined.
let flag; // undefined
//  console.log(flag) // undefined
flag = true;
console.log(flag);
// Array 
let arr = [];
let arrs;
let arrr;
// these is the 3 way to declare an array
arrr = [10, 20, 30, 40, 50];
// its have some method also
let res = arrr.filter((el) => el > 20); // now datatype of res is number array
console.log(res);
let out = arrr.find((el) => el == 30);
console.log(out);
let sum = arrr.reduce((s, el) => s += el);
console.log(sum);
//Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let color = Color.Red;
console.log(color);
let colors = 2 /* Colors.Rose */;
console.log(colors);
// tuple 
let swapNumber;
// swapNumber[2] = 10;  It will throw error It like fixed array
function swapTwoNumber(num1, num2) {
    return [num2, num1];
}
swapNumber = swapTwoNumber(10, 20);
console.log(swapNumber);
/****************************************************************------------------------------------------------------------------------------------*************************************** */
