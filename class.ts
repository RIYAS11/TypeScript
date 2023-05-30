// Class

class hello {

    id!: number;

    name !: string;

}

// so if we didn't write the constructor we need anotate with excalmation mark ! 

// Create a instance of class means object

let obj = new hello();

obj.id = 20;

obj.name = 'sa';

console.log(obj);


//Constructor

class hoi {

    id: number;

    name: string;

    constructor(id: number, name: string) {

        this.id = id;

        this.name = name;
    }

}

// now we dont want exclamation mark in here we can only use 1 constructor multiple constructor is not possible in tc . default constructor is there for create a object

let my = new hoi(10, "sam");

console.log(my);


// method inside the constructor 

class dummy {

    name: string;

    constructor(name: string) {

        this.name = name;
    }

    mineMethod(): string {

        return this.name;
    }

    minesMethod(num1: number): number {

        return num1;
    }
}

let dums = new dummy("riyas");

dums.mineMethod();

dums.minesMethod(20);


// visiblity of class

// private 

class dummys {

    private id: number;

    private name: string;

    constructor(id: number, name: string) {

        this.id = id;

        this.name = name;
    }
}

let dumm = new dummys(20, "mak");

// private var we cannot acces inside the instance one like object we cannot access the value we can use private keyword or we can use #

class heloo {

    #id: number;

    #name: string;

    constructor(id: number, name: string) {

        this.#id = id;

        this.#name = name;
    }

}


// prtected we can only acces insde the child class 

// Static memeber

//  If we write as static we can access the method or var by the class we dont want to create any instance for acces static 

class stat {

    #id: number;

    static #name: string;

    constructor(id: number) {

        this.#id = id;
    }

    static mineDetails(): String {

        return this.#name;
    }
}

// If we set as static we can only access static var and method only and we can access by classname . static name 

console.log(stat.mineDetails());

// we have getter and setter using we can set and get the value; 

class hex {

    #id: number;

    #name: string;

    constructor(id: number, name: string) {

        this.#id = id;

        this.#name = name;
    }

    get id(): number {

        return this.#id;
    }

    set name(name: string) {

        this.#name = name;
    }

    get name(): string {

        return this.#name;
    }

}

let ok = new hex(20, "sam");

console.log(ok.id)

console.log(ok.name);

console.log(ok);


// get and set are 2 keyword using that we can use getter and setter bcz private var we cannot access it.

class y extends hex {

    #age: number;

    constructor(id: number, name: string, age: number) {

        super(id, name);

        this.#age = age;
    }

}

let ob = new y(10, "OKKOK ", 25);


console.log(ob.id)

console.log(ob.name);

console.log(ob);

// class

// import 
import { Employee } from './interface'

export class z implements Employee {

    name: string;
    age: number;
    id: number;
    email: string;
    male: string;

    mineJob(): string {

        return 'hello';
    }

    mineWorkTime(num1: number): number {

        return num1;
    }

    constructor(name : string , age : number , id :number , email :string , male : string){

        this.name = name;

        this.age = age;

        this.id = id;

        this.email = email;

        this.male = male;
    }

}

let p = new z("sam" , 20 , 30 , "samuke" , "male");

console.log(p.mineJob());

