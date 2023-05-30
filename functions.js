"use strict";
// function
function mine(num1, name) {
    return num1;
}
console.log(mine(10, "sam"));
// Arrow fun
let sub = (num1, num2) => num1 + num2;
console.log(sub(10, 30));
let mines = function (num1, num2) {
    return num1 + num2;
};
console.log(mines(20, 50));
// Optional Parameter 
// if we  want parameter its optional we can  also do that
let val = (num1, num2, num3) => {
    return num3 ? num1 + num2 + num3 : num1 + num2;
};
console.log(val(20, 23, 20));
console.log(val(40, 50));
// if the third num is there then only it will return sum of 3 number else it will return sum of 2 number using ternary;
// default value;
let nums = (num1, num2, num3 = 20) => {
    return num1 + num2 + num3;
};
console.log(nums(10, 10, 10));
console.log(nums(10, 10));
// if we didnt pass the num3 then it will take default value as we provide that is default value.  
//Rest Paramtere
// If we want n number or anything inside the fundtion we can use rest
function add(num1, num2, ...num3) {
    let sum;
    sum = 0;
    for (let i = 0; i < num3.length; i++)
        sum += num3[i];
    return sum + num1 + num2;
}
// in this function 2 parameter is requiered and all other n paramter will be of number is stored inside the number array
console.log(add(10, 20, ...[20, 40, 50]));
console.log(add(10, 20, 30, 40, 50, 60, 70, 80)); // first 2 param wil be set as num1 and num2 and all other will be stored as num3 array
// Generic Function
// A function we can reuse that is genric function
function getItems(Items) {
    return new Array().concat(Items);
}
// T is not fixed we can use any name as genric 
console.log(getItems([10, 10, 30, 410]));
console.log(getItems(["sam", "mine"]));
console.log(getItems([10, "dam"])); // WE CAN ALSO PASS MIXED DATATYPE IT ALSO WORK BCZ WHEN IT CONVERT TO JS ITS A NORMAL FUNCTION AND IN JS WE CAN PASS MULTIPLE DATATYPE IN ONE ARRAY REFER FUNCTION.JS
