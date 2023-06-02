let gretting : string  =   "hello"

let age: number =  10;

if(age>10){
    console.log("Hello you are kid")
}


function  check(abc: number): void{
    console.log(abc)
}

// arrays in ts
let arr: number[] =  [1,2,3]

// tuples in ts
let tupp:  [number, string ] = [1,'abc']
// not possible to add third value in this fixed size Array
// tupp.push(1)  it is the bug of the ts


// enums in ts



const small = 1
const medium = 2
const large  =  3

// PascalCase
enum Size { Small, Medium, Large};

// by default ts assign a value = 0 to the first member and +1 .... to the next one

// const enum Size { Small, Medium, Large}; to make a code more optimized
let mySize: Size =  Size.Medium;
console.log(mySize)


// functions in ts
function checkkk(val: number): number{
    if (val>10){
        return val*21
    }
    return val*12
}

// type aliases

// PascalCase
type Employee ={ readonly id: number, name: string,retire: (date: Date) => void,  age?: number} 

// objects in  ts
let obj : Employee ={
     id:1,
    name: "avvv",
    retire: (date: Date)=>{
        console.log(date)
    }
}
obj.age = 10 

// union types
let a: number | string;
a=  10
a = "aaaa"

// it returns the only common methods between the number and string


// intersection 
let b:  number & string;


// literal in ts   - mean exact or specific value
let quantity: 50  // so qantity can be only 50

// nullable types
function greet(name: string ){
    console.log(name.toUpperCase());
}

greet("aa")

// optinal chaining
type Cust = {
    bDay: Date
}

function getCust(id: number):Cust | null{
    return id === 0 ? null: { bDay: new Date()};
}

let user =  getCust(0)
console.log(user?.bDay)