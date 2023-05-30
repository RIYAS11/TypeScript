interface user{

    name : string ,
    age : number , 
    id : number , 
    email : string;
}

export interface Employee extends user{

    male : string;

    mineJob():string;

    mineWorkTime(num1 : number): number;

}


// interface we know we used for abstraction 

// let empss : Employee = {name :"sam" , age: 20 , id : 30 , email : "sam" , male : "male"};

