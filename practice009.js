// 옛날 js 문법 , class

function machine(engine) {
    // this.engine = 'v8 engine';
    this.engine = engine;
    this.power = '198 hp';
}

// 과거 class 구현 방식
var m1 = new machine('v8 engine');
var m2 = new machine();
console.log(m1.engine);
console.log(m2.engine);

// js 의 프로토타입, 클래스의 상속 원시버전

machine.prototype.distance = 100;

console.log(m1.distance);

// js array
var array1 = [4, 2, 1];
var array2 = new Array(4, 2, 1);
console.log(array1, array2);
array2.sort();
console.log(array2);