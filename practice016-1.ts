// 옛날 ts import 문법
///<reference path="./practice016-2.ts"/>  //

import { myVariable, someType, MyNameSpace, MyNameSpace2, MyNameSpace3 } from "./practice016-2";
console.log(myVariable);
type MyImportType1 = MyNameSpace.MyType1;

let someVariable: someType = 13;
console.log(someVariable);

let myImportVariable1: MyImportType1 = 13;
let myImportVariable2: MyImportType1 = 'hello world!';
console.log(myImportVariable1, myImportVariable2);

type MyImportType3 = MyNameSpace3.MyType3;


let someObj: MyNameSpace3.MyInterface2 = {
    name: 'julu',
    age: 13,
}

console.log(someObj);

