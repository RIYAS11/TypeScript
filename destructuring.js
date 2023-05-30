"use strict";
class p {
}
let user = { id: 10, age: 35 };
console.log(user.age);
console.log(user.id);
// we need to access we need to specifcly access it 
let { id, age } = { id: 30, age: 450 };
console.log(age);
console.log(id);
// we can also change the variable  name aswell
let { id: mineid, age: mineage } = { id: 30, age: 450 };
console.log(mineid);
console.log(mineage);
