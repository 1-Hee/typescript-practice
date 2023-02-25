"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 조건부 타입 생성기, object 타입 변환기
var obj = {};
Object.keys(obj);
var value1 = 'name'; // string or number OK!
var value2 = 'name'; // type -> string | number
var myBus = { color: 'red', model: 'hyundai', price: 123 };
console.log(myBus);
var myBus2 = { color: 'blue', model: 'bmw', price: 123 };
console.log(myBus2);
