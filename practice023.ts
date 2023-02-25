export {}
// 조건부 타입 생성기, object 타입 변환기

let obj = {}
Object.keys(obj);

interface Person {
    age:number,
    name:string
}

type newPerson = keyof Person; // Union type return
let value1:newPerson = 'name'; // string or number OK!


interface Person2 {
    [key:string]:number,
}

type PK = keyof Person2;
let value2:PK = 'name'; // type -> string | number

type Car = {
    color : boolean,
    model : boolean,
    price : boolean | number
}

type TypeChanger<MyType> = {
    [key in keyof MyType]:string // mapping
}

type newType = TypeChanger<Car>;


// repo1 
type Bus = {
    color:string,
    model :boolean,
    price: number,
}

type TypeChanger2<T> = {
    [key in keyof T]: string|number
}

type newBus = TypeChanger2<Bus>

let myBus:newBus = {color:'red', model:'hyundai', price:123};
console.log(myBus);

// repo2

type TypeChanger3<T, A> = {
    [key in keyof T]: A;
}

type customType = string | number;
type newBus2 = TypeChanger3<Bus, customType>
let myBus2:newBus2 = {color:'blue', model:'bmw', price:123};
console.log(myBus2);