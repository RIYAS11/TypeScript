"use strict";
// Class
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _heloo_id, _heloo_name, _a, _stat_id, _stat_name, _hex_id, _hex_name, _y_age;
Object.defineProperty(exports, "__esModule", { value: true });
exports.z = void 0;
class hello {
}
// so if we didn't write the constructor we need anotate with excalmation mark ! 
// Create a instance of class means object
let obj = new hello();
obj.id = 20;
obj.name = 'sa';
console.log(obj);
//Constructor
class hoi {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
// now we dont want exclamation mark in here we can only use 1 constructor multiple constructor is not possible in tc . default constructor is there for create a object
let my = new hoi(10, "sam");
console.log(my);
// method inside the constructor 
class dummy {
    constructor(name) {
        this.name = name;
    }
    mineMethod() {
        return this.name;
    }
    minesMethod(num1) {
        return num1;
    }
}
let dums = new dummy("riyas");
dums.mineMethod();
dums.minesMethod(20);
// visiblity of class
// private 
class dummys {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
let dumm = new dummys(20, "mak");
// private var we cannot acces inside the instance one like object we cannot access the value we can use private keyword or we can use #
class heloo {
    constructor(id, name) {
        _heloo_id.set(this, void 0);
        _heloo_name.set(this, void 0);
        __classPrivateFieldSet(this, _heloo_id, id, "f");
        __classPrivateFieldSet(this, _heloo_name, name, "f");
    }
}
_heloo_id = new WeakMap(), _heloo_name = new WeakMap();
// prtected we can only acces insde the child class 
// Static memeber
//  If we write as static we can access the method or var by the class we dont want to create any instance for acces static 
class stat {
    constructor(id) {
        _stat_id.set(this, void 0);
        __classPrivateFieldSet(this, _stat_id, id, "f");
    }
    static mineDetails() {
        return __classPrivateFieldGet(this, _a, "f", _stat_name);
    }
}
_a = stat, _stat_id = new WeakMap();
_stat_name = { value: void 0 };
// If we set as static we can only access static var and method only and we can access by classname . static name 
console.log(stat.mineDetails());
// we have getter and setter using we can set and get the value; 
class hex {
    constructor(id, name) {
        _hex_id.set(this, void 0);
        _hex_name.set(this, void 0);
        __classPrivateFieldSet(this, _hex_id, id, "f");
        __classPrivateFieldSet(this, _hex_name, name, "f");
    }
    get id() {
        return __classPrivateFieldGet(this, _hex_id, "f");
    }
    set name(name) {
        __classPrivateFieldSet(this, _hex_name, name, "f");
    }
    get name() {
        return __classPrivateFieldGet(this, _hex_name, "f");
    }
}
_hex_id = new WeakMap(), _hex_name = new WeakMap();
let ok = new hex(20, "sam");
console.log(ok.id);
console.log(ok.name);
console.log(ok);
// get and set are 2 keyword using that we can use getter and setter bcz private var we cannot access it.
class y extends hex {
    constructor(id, name, age) {
        super(id, name);
        _y_age.set(this, void 0);
        __classPrivateFieldSet(this, _y_age, age, "f");
    }
}
_y_age = new WeakMap();
let ob = new y(10, "OKKOK ", 25);
console.log(ob.id);
console.log(ob.name);
console.log(ob);
class z {
    mineJob() {
        return 'hello';
    }
    mineWorkTime(num1) {
        return num1;
    }
    constructor(name, age, id, email, male) {
        this.name = name;
        this.age = age;
        this.id = id;
        this.email = email;
        this.male = male;
    }
}
exports.z = z;
let p = new z("sam", 20, 30, "samuke", "male");
console.log(p.mineJob());
