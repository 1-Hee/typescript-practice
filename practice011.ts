type Aniamal = { name: string };
type Cat = { age: number } & Aniamal; // intersection type!


// object 타입에서 사용 가능한 interface
interface Student {
    name: string;
}

// interface는 extends 가능
interface Teacher extends Student{
    age: number;
}

let std: Student = { name: 'hello' }

let tc: Teacher = { name: 'yellow', age: 13 };

console.log(std);
console.log(tc);

// interface는 중복 선언 가능, like extends
interface obj1 {
    name : string
}
interface obj1{
    score: number
}

let obj123: obj1 = { name: 'hey', score: 123 };
console.log(obj123);

// repo
interface Product {
    brand: string;
    serial: number;
    model: string[];
}
let Product:Product = { brand: 'samsung', serial: 1234, model: ['TV', 'phone'] }

interface Merchandise {
    product: string;
    price: number;
}

let basket: Merchandise[] = [{ product: '청소기', price: 7000 }, { product: '삼다수', price: 800 }];

interface vacuumCleaner extends Merchandise{
    card: boolean;
}
let myVaccum: vacuumCleaner = { product: '청소기', price: 7000, card: false };

interface MathModule {
    plus: (num1: number, num2: number) => number;
    minus: (num1: number, num2: number) => number;    
}
let myModule: MathModule = {
    plus: (num1, num2) => {
        return num1 + num2;
    },
    minus: (num1, num2) => {
        return num1 - num2;
    }
}

console.log(myModule.plus(1, 2)); // 3
console.log(myModule.minus(3, 2)) // 1

