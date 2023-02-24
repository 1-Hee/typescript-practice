// generic

function genFunc(x: unknown[]):unknown {
    return x[0];
}

let myValue1: unknown = genFunc([4, 2]);
console.log(myValue1);
// 문제점 : 명백히 getFunc에서 리턴 값이 number Type이 올 것이 자명한데도 연산이 안됌
// console.log(myValue1 + 1); // error

function genericGetFunc<Type>(x: Type[]): Type{
    return x[0];
}

// 축약형
function genericGetFunc2<T>(x: T[]): T{
    return x[0];
}

let genValue1 = genericGetFunc<number>([4, 2]);
let genValue2 = genericGetFunc2<number>([4, 2]);
let genValue3 = genericGetFunc<string>(['4', '2']);
let genValue4 = genericGetFunc(['4', '2']);
let genValue5 = genericGetFunc<string | number>(['4', 2]);

console.log(genValue1, genValue2, genValue3, genValue4, genValue5);


// generic contraint
function GGF3<T extends number>(x: T) {
    return x - 1;
}


let value1 = GGF3<number>(100);

// custom generic contraint
interface MyObjInterface {
    name: string,
    strArray: string[],    
}

function GGF4<T extends MyObjInterface>(x: T) {
    return x.strArray[0];
}

let myValue2: string = GGF4({ name: 'hello', strArray: ['1'] });
console.log(myValue2);
