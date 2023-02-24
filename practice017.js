// generic
function genFunc(x) {
    return x[0];
}
var myValue1 = genFunc([4, 2]);
console.log(myValue1);
// 문제점 : 명백히 getFunc에서 리턴 값이 number Type이 올 것이 자명한데도 연산이 안됌
// console.log(myValue1 + 1); // error
function genericGetFunc(x) {
    return x[0];
}
// 축약형
function genericGetFunc2(x) {
    return x[0];
}
var genValue1 = genericGetFunc([4, 2]);
var genValue2 = genericGetFunc2([4, 2]);
var genValue3 = genericGetFunc(['4', '2']);
var genValue4 = genericGetFunc(['4', '2']);
var genValue5 = genericGetFunc(['4', 2]);
console.log(genValue1, genValue2, genValue3, genValue4, genValue5);
// generic contraint
function GGF3(x) {
    return x - 1;
}
var value1 = GGF3(100);
function GGF4(x) {
    return x.strArray[0];
}
var myValue2 = GGF4({ name: 'hello', strArray: ['1'] });
console.log(myValue2);
